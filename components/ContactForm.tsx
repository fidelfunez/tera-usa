"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/config/site";

const endpoint = siteConfig.formspreeSubmitUrl;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Record<string, string> = {};
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter a valid email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email doesn't look right.";
    if (!message) next.message = "Tell us a bit about the project.";
    setErrors(next);
    if (Object.keys(next).length) return;

    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p
        className="rounded-2xl border border-tera-green/30 bg-tera-green/10 px-6 py-8 text-center text-lg text-white/90"
        role="status"
      >
        We got it—talk soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5"
      noValidate
      aria-label="Project inquiry"
    >
      {!endpoint && (
        <p className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-100/90">
          Set{" "}
          <code className="rounded bg-black/30 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_FORMSPREE_ID</code>{" "}
          in <code className="rounded bg-black/30 px-1.5 py-0.5 text-xs">.env.local</code> before
          going live (full Formspree URL or <code className="rounded bg-black/30 px-1.5 py-0.5 text-xs">/f/</code>{" "}
          slug).
        </p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/80">
          Name <span className="text-tera-green">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy/80 px-4 py-3 text-white placeholder:text-white/35 focus:border-electric-blue focus:outline-none focus:ring-1 focus:ring-electric-blue"
          placeholder="Alex Johnson"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-300">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/80">
          Email <span className="text-tera-green">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy/80 px-4 py-3 text-white placeholder:text-white/35 focus:border-electric-blue focus:outline-none focus:ring-1 focus:ring-electric-blue"
          placeholder="you@company.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-300">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-white/80">
          Company / business name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy/80 px-4 py-3 text-white placeholder:text-white/35 focus:border-electric-blue focus:outline-none focus:ring-1 focus:ring-electric-blue"
          placeholder="Optional"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80">
          Tell us about your project <span className="text-tera-green">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 w-full resize-y rounded-xl border border-white/15 bg-navy/80 px-4 py-3 text-white placeholder:text-white/35 focus:border-electric-blue focus:outline-none focus:ring-1 focus:ring-electric-blue"
          placeholder="What problem are you trying to solve? Timeline? Anything we should know?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-300" role="alert">
          Something went wrong. Email us at{" "}
          <a className="underline underline-offset-2 hover:text-white" href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-tera-green px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-tera-green/40 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send it →"}
      </button>
    </form>
  );
}

# Cursor prompt — buildwithtera.com

Build a **production-ready, single-page marketing site** for **Tera** (U.S. market). The domain is **buildwithtera.com**. Audience: U.S.-based small and mid-size business owners who need **custom** web or mobile software—not a template, not DIY, not a big agency.

**Scope:** One landing page. No auth, no database, no CMS. Static-first, fast, deployable on **Netlify** or **Vercel** (static export compatible).

---

## Sister brand (source of truth)

This site is the **U.S. sibling** of **teralatam.co**. Keep visual and verbal continuity with the **live** Tera Latam codebase so both properties feel like the same company.

**Reference project (read-only for tokens and assets):** `Tera - LATAM/` in the same Dev Portfolio folder.

### Brand tokens — align with production Tera Latam

Do **not** invent a separate palette unless explicitly adjusting below. The Latam site’s Tailwind theme is authoritative:

| Token            | Hex       | Usage                                      |
|------------------|-----------|--------------------------------------------|
| `navy`           | `#1A2E4A` | Page background, primary dark surfaces     |
| `electric-blue`  | `#2563A8` | Primary links, key UI accents, focus rings |
| `tera-green`     | `#16A34A` | Success states, secondary accent highlights|

**Logo:** Prefer `/public/tera-logo.webp` (copy from Latam `public/` if needed). Use `next/image` with appropriate `alt` text (“Tera”).

**Typography (default — strongest consistency):**

- **Body / UI:** `Plus Jakarta Sans` via `next/font/google` (same family as Latam `layout.tsx`).

**Optional elevation (U.S. page only, still on-brand):**

- Add **one** display face for **hero headline + section headings only**, e.g. `Cormorant Garamond`, while keeping **Plus Jakarta Sans** for body, nav, buttons, and forms. If this adds complexity, ship **Jakarta-only** first; consistency beats novelty.

**Aesthetic:** Dark, refined, boutique studio. Generous whitespace, subtle grain or soft gradient blobs (similar *spirit* to Latam hero blurs, not a copy-paste layout). Use `electric-blue` and `tera-green` sparingly as accents—avoid generic SaaS purple gradients and neon overload.

---

## Tech stack

- **Next.js 14** (App Router), **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for scroll-triggered and hero motion
- **Formspree** for the contact form — replace `REPLACE_WITH_YOUR_FORMSPREE_ID` with the real form id
- **English only** (no i18n)

**Performance / architecture**

- Use **client components** only where required (motion, mobile menu, form client state). Keep the rest as server components where practical.
- Lazy-load below-the-fold heavy chunks if needed; no unnecessary third-party scripts.
- `next/font/google` for fonts (avoid extra `<link>` font tags unless you have a reason).

**Components**

- No shadcn, MUI, or heavy UI kits—hand-built with Tailwind, semantic HTML, and sensible `aria-*` on interactive elements.

---

## SEO, social, and metadata

- Unique `<title>` and meta **description** (English, ~155–160 characters, no LATAM/Honduras wording).
- **`metadataBase`:** `https://buildwithtera.com`
- **Open Graph** + **Twitter** `summary_large_image` with a dedicated OG image (e.g. `/og-image.png` or reuse logo-based graphic—**1200×630**).
- **Canonical** URL set to the production homepage.
- **`robots.txt`** and **`sitemap.xml`** appropriate for a single-page site (can mirror Latam’s approach if static export).

**Structured data (JSON-LD)**

- Use **`Organization`** or **`ProfessionalService`** (not `LocalBusiness` tied to Honduras unless you add a real U.S. address). Include: `name`, `url`, `logo`, `description`, `email` (see contact).

---

## Legal / trust (lightweight)

- Add a simple **`/privacy`** page (or static section) describing what the contact form collects and that submissions go through Formspree. Link it from the footer.
- Skip cookie banners unless you add analytics cookies that require it; if you add GA later, revisit.

---

## Motion (Framer Motion)

Tasteful, premium—not flashy.

- Staggered fade + slide-up on section entry (`useInView` with `once: true` and reasonable `margin`).
- Optional subtle parallax or slow drift on hero decorative layers.
- Card hover: slight lift (`y: -4` to `-6`) and border/shadow refinement.
- Hero headline: short stagger on load.
- Navbar: transparent over hero; after scroll, solid/blur bar with readable contrast on `navy`.

---

## Page sections and content

### 1. Navbar

- Left: logo / wordmark “Tera”.
- Right: `Work`, `Process`, `About`, `Contact` (anchor links, smooth scroll).
- CTA: **Start a project →** → `#contact`.
- Mobile: hamburger, slide-down or full-width drawer, focus trap basics.

### 2. Hero

**Headline:** We build the app your business actually needs.

**Subhead:** Custom web and mobile apps for business owners who are done duct-taping together tools that weren’t built for them.

**CTAs:** Primary **Let’s talk →** (`#contact`); secondary **See our work ↓** (`#work` or case study id).

**Visual:** Dark `navy` base, soft `electric-blue` / `tera-green` glow blobs (low opacity), optional noise overlay. No stock photography.

### 3. Problem

**Label (small caps, accent):** THE PROBLEM  
**Heading:** Most businesses are running on workarounds.

Three cards:

1. **Spreadsheets doing jobs software should do** — Manual tracking, version chaos, things slip.
2. **Off-the-shelf tools that almost fit** — Too many apps, poor integration, redundant cost.
3. **A website that just sits there** — Looks fine but doesn’t capture leads, bookings, or real workflows.

### 4. What we build

**Label:** WHAT WE BUILD  
**Heading:** Apps built around the way your business actually works.

Six cards (responsive grid, e.g. 1 → 2 → 3 columns):

1. **Field & operations apps** — Crews, jobs, reports; mobile-first.
2. **Client portals** — Projects, invoices, updates; less email ping-pong.
3. **Booking & scheduling** — Flows that match how you sell time.
4. **Internal dashboards** — Operational visibility from your data.
5. **E-commerce & online stores** — Built around your catalog, not template limits.
6. **Landing pages & marketing sites** — Fast, conversion-minded, on-brand.

**Footnote line:** Not sure which one you need? We’ll figure it out together.

### 5. Case study (id: `work`)

**Label:** CASE STUDY  
**Heading:** From messy daily reports to a real system.

**Body (keep or tighten; ensure client permission if real):**  
Construction team in **Arizona** sent daily updates as voice notes and photos in a chat app. The owner spent hours each week piecing together what happened on each site. We shipped a **PWA**: workers complete a structured report on their phone in minutes; the owner uses an admin dashboard—sites, people, days—searchable and exportable. Live in under three weeks, high day-one adoption.

**Metrics row:**

- **&lt; 3 weeks** — Kickoff to live  
- **2 min** — Typical report time  
- **100%** — Team adoption from day one  

If the story is illustrative rather than a single named client, add a discreet line: *Representative project; details anonymized.*

### 6. Process

**Label:** PROCESS  
**Heading:** Simple process. No surprises.

Four steps (horizontal desktop, stacked mobile):

1. **Discovery call** — Business, problem, success criteria. No fluff.
2. **Scope & proposal** — What we build, timeline, investment. You decide.
3. **Build** — Iterations with visible progress; regular check-ins.
4. **Launch & support** — Go-live together; support after launch.

### 7. About

**Label:** WHO WE ARE  
**Heading:** A small studio that moves fast and builds things that last.

**Copy:** Boutique dev studio; small team by design; direct access to builders; experience across service businesses and operations-heavy companies; custom scope per client; we care about the work.

**Optional image:** `/public/team.jpg` if available (`next/image`).

### 8. Contact

**Label:** START A PROJECT  
**Heading:** Tell us what you’re building.  
**Sub:** We respond within 24 hours. No pressure—just a conversation.

**Formspree fields:** Name (required), Email (required), Company, Project details (textarea, required). Submit: **Send it →**  
**Success state:** We got it—talk soon.  
**Validation:** HTML5 + clear inline errors.

**Direct email:** Prefer a U.S.-facing address if you set one up (e.g. `hello@buildwithtera.com` forwarding to your inbox); otherwise `fidel@teralatam.co` is acceptable—list whichever you actually monitor.

### 9. Footer

- Wordmark left; links **Work · Process · About · Contact**; **Privacy**; copyright **© 2026 Tera.**

---

## Copy tone

- Smart, direct, human—**not** corporate marketing speak.
- Short sentences, active voice.
- Avoid: *leverage, synergy, cutting-edge, empower, innovative solutions, seamless, world-class.*
- Reader skims—headlines carry the story.
- **Do not** mention Latin America, Honduras, LATAM, or Spanish-market positioning on this page.
- **Do not** list package pricing**; custom quotes after conversation.

---

## Out of scope (v1)

- Blog, pricing page, Calendly/booking embed, chatbot, testimonial carousel, stock photo hero, heavy animation libraries.
- Purple gradients; Inter/Roboto as primary brand fonts; generic “big blue” SaaS button styling.

---

## Acceptance checklist

- [ ] Lighthouse: strong performance baseline (optimize images, font subsetting).
- [ ] Keyboard navigable menu and form; visible focus states using `electric-blue`.
- [ ] All sections reachable via anchors; sticky nav doesn’t obscure headings (scroll-margin).
- [ ] Formspree works end-to-end including success UI.
- [ ] Metadata, OG/Twitter, canonical, and JSON-LD validate in Rich Results / debugger tools.
- [ ] Visual check: side-by-side with teralatam.co—logo and colors feel like the **same brand**, U.S. page feels slightly more “custom studio” if you used a display heading font.

---

## Formspree endpoint

Replace placeholder in the form `action`:

`https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID`

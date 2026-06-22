import Image from "next/image";
import { siteConfig } from "../config/site";

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? 32 : 40;

  return (
    <Image
      src="/logo/tera-logo.png"
      alt={siteConfig.name}
      width={dim}
      height={dim}
      className="rounded-full"
      priority
    />
  );
}

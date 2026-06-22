import type { ReactNode } from "react";
import type { CapabilityId } from "../../config/capabilities";

const icons: Record<CapabilityId, ReactNode> = {
  web: (
    <>
      <rect x="4" y="6" width="24" height="16" rx="2" strokeWidth="1.5" />
      <path d="M4 10h24" strokeWidth="1.5" />
      <circle cx="7" cy="8" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="10" cy="8" r="0.75" fill="currentColor" stroke="none" />
    </>
  ),
  apps: (
    <>
      <rect x="8" y="4" width="16" height="24" rx="3" strokeWidth="1.5" />
      <path d="M12 22h8" strokeWidth="1.5" />
      <rect x="13" y="7" width="6" height="1.5" rx="0.5" fill="currentColor" stroke="none" />
    </>
  ),
  automation: (
    <>
      <circle cx="8" cy="16" r="3" strokeWidth="1.5" />
      <circle cx="24" cy="8" r="3" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="3" strokeWidth="1.5" />
      <path d="M11 14.5L19 9.5M11 17.5L19 22.5" strokeWidth="1.5" />
    </>
  ),
  ai: (
    <>
      <path
        d="M16 4L18.5 11.5L26 14L18.5 16.5L16 24L13.5 16.5L6 14L13.5 11.5L16 4Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="14" r="2" strokeWidth="1.5" />
    </>
  )
};

export function CapabilityIcon({
  id,
  className = "h-8 w-8"
}: {
  id: CapabilityId;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden
    >
      {icons[id]}
    </svg>
  );
}

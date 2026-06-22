export function ProcessFlow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="4" fill="currentColor" />
      <path d="M68 40 H92" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="92,36 100,40 92,44" fill="currentColor" />
      <rect x="100" y="12" width="56" height="56" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M116 40 H152 M128 28 V52" stroke="currentColor" strokeWidth="1.5" />
      <path d="M156 40 H180" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="180,36 188,40 180,44" fill="currentColor" />
      <path
        d="M216 20 L248 40 L216 60 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M248 40 H272" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="272,36 280,40 272,44" fill="currentColor" />
      <circle cx="296" cy="40" r="16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M290 40 L296 46 L302 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

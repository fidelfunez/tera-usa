export function ArchitectureLayers({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M40 220 L200 160 L360 220 L200 280 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
      <path
        d="M60 170 L200 110 L340 170 L200 230 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
      <path
        d="M80 120 L200 60 L320 120 L200 180 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <path
        d="M100 70 L200 20 L300 70 L200 130 Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="200" cy="75" r="4" fill="currentColor" />
      <line x1="200" y1="79" x2="200" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="200" y1="130" x2="200" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="200" y1="180" x2="200" y2="230" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

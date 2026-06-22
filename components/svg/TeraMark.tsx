export function TeraMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Left bracket */}
      <path d="M8 8L14 11V15L8 18V8Z" fill="currentColor" />
      <path d="M8 18L14 21V25L8 28V18Z" fill="currentColor" opacity="0.55" />
      {/* Slash */}
      <path d="M15 10L17 10L15 22L13 22L15 10Z" fill="currentColor" />
      {/* Right bracket */}
      <path d="M24 8L18 11V15L24 18V8Z" fill="currentColor" opacity="0.55" />
      <path d="M24 18L18 21V25L24 28V18Z" fill="currentColor" />
    </svg>
  );
}

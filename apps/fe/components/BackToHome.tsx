import Link from "next/link";

export default function BackToHome() {
  return (
    <Link
      href="/"
      className="absolute top-6 left-6 flex items-center gap-1.5 text-sm text-[#9ca3af] transition-colors hover:text-[#171717] lg:top-8 lg:left-8"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Home
    </Link>
  );
}

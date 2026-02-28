"use client";

import Button from "./Button";
import WhiteboardMockup from "./WhiteboardMockup";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 line-grid">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-[#00E0C6]/8 blur-[100px]" />
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-[#3B82F6]/6 blur-[120px]" />
        <div className="absolute -bottom-20 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/5 blur-[100px]" />
      </div>

      <svg className="pointer-events-none absolute top-28 left-[8%] w-20 h-20 text-[#00E0C6]/20 hidden lg:block" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" className="slow-spin" style={{ transformOrigin: "40px 40px" }} />
        <circle cx="40" cy="40" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="2 5" className="slow-spin" style={{ transformOrigin: "40px 40px", animationDirection: "reverse" }} />
      </svg>
      <svg className="pointer-events-none absolute top-44 right-[10%] w-16 h-16 text-[#6366F1]/15 hidden lg:block" viewBox="0 0 60 60" fill="none">
        <path d="M10 50 L30 10 L50 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 38 L42 38" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <svg className="pointer-events-none absolute bottom-[38%] left-[5%] w-10 h-10 text-[#F59E0B]/20 hidden lg:block float-delay-2" viewBox="0 0 40 40" fill="none">
        <rect x="5" y="5" width="30" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(12 20 20)" />
      </svg>
      <svg className="pointer-events-none absolute top-[30%] right-[6%] w-6 h-6 text-[#EC4899]/25 hidden lg:block float" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="6" />
      </svg>
      <svg className="pointer-events-none absolute top-[55%] left-[12%] w-4 h-4 text-[#9ca3af]/30 hidden lg:block" viewBox="0 0 16 16" fill="none">
        <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <svg className="pointer-events-none absolute top-[20%] right-[15%] w-5 h-5 text-[#9ca3af]/20 hidden lg:block" viewBox="0 0 16 16" fill="none">
        <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      <div className="pointer-events-none absolute -right-12 top-20 h-px w-48 rotate-[30deg] bg-gradient-to-r from-transparent via-[#00E0C6]/20 to-transparent hidden lg:block" />
      <div className="pointer-events-none absolute -left-8 bottom-[40%] h-px w-36 -rotate-[25deg] bg-gradient-to-r from-transparent via-[#6366F1]/15 to-transparent hidden lg:block" />

      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div
          className={`flex justify-center mb-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00E0C6]/30 bg-[#00E0C6]/5 px-4 py-1.5 text-sm font-medium text-[#059669]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E0C6] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E0C6]" />
            </span>
            Now in Public Beta
          </div>
        </div>

        <h1
          className={`text-center text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Write together.{" "}
          <span className="squiggle-underline gradient-text">Ship faster.</span>
        </h1>

        <p
          className={`mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-[#6b7280] sm:text-xl transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Exaclidra-ws is the collaborative text editor built for modern teams.
          Edit documents in real-time with seamless WebSocket sync, rich
          formatting, and zero conflicts.
        </p>

        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Button variant="primary" size="lg" href="/signin" className="glow-btn group">
            Start Editing
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button variant="secondary" size="lg" href="/signup">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M8 5V8M8 8V11M8 8H11M8 8H5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            Try for Free
          </Button>
        </div>

        <div
          className={`mt-14 flex justify-center gap-8 sm:gap-16 transition-all duration-700 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { value: "10K+", label: "Active Users" },
            { value: "99.9%", label: "Uptime" },
            { value: "<50ms", label: "Sync Latency" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-16">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#171717] sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-[#9ca3af]">{stat.label}</div>
              </div>
              {i < 2 && <div className="hidden sm:block h-10 w-px bg-[#e5e7eb]" />}
            </div>
          ))}
        </div>

        <div
          className={`flex justify-center mt-10 transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-[#00E0C6]/40">
            <path d="M12 2 C11 10, 13 18, 12 28 C11 30, 10 31, 8 33 M12 28 C13 30, 14 31, 16 33 M12 2 C12 4 12 4 12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div
          className={`mt-4 sm:mt-6 transition-all duration-1000 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <WhiteboardMockup />
        </div>
      </div>
    </section>
  );
}

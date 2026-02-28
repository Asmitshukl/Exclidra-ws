"use client";

import { useInView } from "@/hooks/useInView";
import Button from "./Button";

export default function CTA() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative py-24 sm:py-32 bg-[#171717] overflow-hidden cross-hatch">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-[#00E0C6]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#6366F1]/8 blur-[120px]" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-8 left-[15%] w-24 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-[#00E0C6]/15 to-transparent" />
        <div className="absolute bottom-12 right-[12%] w-32 h-px -rotate-[18deg] bg-gradient-to-r from-transparent via-[#6366F1]/12 to-transparent" />
        <div className="absolute top-1/2 left-[8%] w-16 h-px rotate-[35deg] bg-gradient-to-r from-transparent via-[#ffffff]/5 to-transparent" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl px-6 text-center transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to write{" "}
          <span className="squiggle-underline gradient-text">together</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[#9ca3af]">
          Join thousands of teams already shipping faster with Exaclidra-ws.
          Free to start, no credit card required.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="primary"
            size="lg"
            href="/signup"
            className="!bg-[#00E0C6] !text-[#171717] hover:!bg-[#00C9B2] glow-btn font-semibold"
          >
            Get Started Free
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
          <Button
            variant="secondary"
            size="lg"
            href="/signin"
            className="!border-[#333] !text-white hover:!bg-[#222] hover:!border-[#444]"
          >
            Log in
          </Button>
        </div>
      </div>
    </section>
  );
}

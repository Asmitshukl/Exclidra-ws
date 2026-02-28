"use client";

import { useInView } from "@/hooks/useInView";

const STEPS = [
  {
    step: "01",
    title: "Create a Workspace",
    description:
      "Sign up and create a workspace in seconds. Invite your team via email or a shareable link.",
    visual: (
      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#f0fdf9] to-[#ecfdf5] p-6">
        <div className="space-y-3">
          <div className="h-3 w-32 rounded bg-[#00E0C6]/30" />
          <div className="flex gap-2">
            <div className="h-10 w-10 rounded-lg bg-[#00E0C6]/20 flex items-center justify-center text-[#059669] text-lg">+</div>
            <div className="flex-1 h-10 rounded-lg bg-white border border-[#d1fae5] flex items-center px-3">
              <span className="text-xs text-[#6b7280]">team@company.com</span>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            {["Alex", "Kim", "Jay"].map((name) => (
              <div key={name} className="flex items-center gap-1.5 rounded-full bg-white border border-[#d1fae5] px-3 py-1">
                <div className="h-4 w-4 rounded-full bg-[#00E0C6]/40" />
                <span className="text-[10px] font-medium text-[#374151]">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    step: "02",
    title: "Start Writing Together",
    description:
      "Open a document and start typing. Everyone sees changes in real-time with colored cursors.",
    visual: (
      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] p-6">
        <div className="space-y-2">
          <div className="h-4 w-48 rounded bg-[#3B82F6]/20" />
          <div className="h-3 w-full rounded bg-[#3B82F6]/10" />
          <div className="h-3 w-3/4 rounded bg-[#3B82F6]/10" />
          <div className="relative mt-2">
            <div className="h-3 w-5/6 rounded bg-[#3B82F6]/10" />
            <div className="absolute left-1/2 -top-1 h-5 w-0.5 bg-[#6366F1] animate-pulse rounded" />
            <div className="absolute left-1/2 -top-3 text-[8px] bg-[#6366F1] text-white px-1 rounded font-medium">Sarah</div>
          </div>
          <div className="relative mt-1">
            <div className="h-3 w-2/3 rounded bg-[#3B82F6]/10" />
            <div className="absolute left-1/3 -top-1 h-5 w-0.5 bg-[#F59E0B] animate-pulse rounded" style={{ animationDelay: "500ms" }} />
            <div className="absolute left-1/3 -top-3 text-[8px] bg-[#F59E0B] text-white px-1 rounded font-medium">Mike</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    step: "03",
    title: "Ship with Confidence",
    description:
      "Export, share, or integrate with your workflow. Your work is always saved and version-controlled.",
    visual: (
      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1V13M1 7H13" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-xs font-medium text-[#5B21B6]">Export Ready</div>
          </div>
          <div className="flex gap-2">
            {["PDF", "MD", "HTML"].map((format) => (
              <div key={format} className="flex-1 rounded-lg bg-white border border-[#DDD6FE] py-2.5 text-center text-xs font-semibold text-[#7C3AED]">
                .{format.toLowerCase()}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-1 rounded-lg bg-white border border-[#DDD6FE] px-3 py-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M10 3L4.5 8.5L2 6" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[10px] text-[#374151]">All changes saved & synced</span>
          </div>
        </div>
      </div>
    ),
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof STEPS)[0];
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {index < STEPS.length - 1 && (
        <div className="hidden lg:block absolute top-8 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-px border-t-2 border-dashed border-[#e5e7eb] z-0" />
      )}
      <div className="relative overflow-hidden rounded-2xl border border-[#f0f0f0] bg-white transition-shadow duration-300 hover:shadow-lg">
        {step.visual}
        <div className="p-6">
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-xs font-bold text-white">
            {step.step}
          </div>
          <h3 className="text-lg font-semibold text-[#171717]">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-[#fafafa] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-12 -left-20 w-[300px] h-px rotate-[15deg] bg-gradient-to-r from-transparent via-[#d1d5db]/40 to-transparent" />
        <div className="absolute top-28 -left-10 w-[200px] h-px rotate-[15deg] bg-gradient-to-r from-transparent via-[#d1d5db]/25 to-transparent" />
        <div className="absolute bottom-20 -right-16 w-[250px] h-px -rotate-[12deg] bg-gradient-to-r from-transparent via-[#d1d5db]/35 to-transparent" />
      </div>

      <svg className="pointer-events-none absolute bottom-12 right-[8%] w-14 h-14 text-[#6366F1]/8 hidden lg:block" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="28" cy="28" r="12" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
      </svg>

      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`max-w-xl transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block rounded-full bg-[#6366F1]/10 px-4 py-1.5 text-sm font-medium text-[#4338CA] mb-4">
            How it Works
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Up and running in{" "}
            <span className="gradient-text">minutes</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-[#6b7280]">
            No complex setup. No steep learning curve. Just start writing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

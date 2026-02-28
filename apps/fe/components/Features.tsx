"use client";

import { useInView } from "@/hooks/useInView";

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Real-Time Sync",
    description:
      "Changes propagate instantly across all connected clients via WebSocket. No refresh needed, ever.",
    color: "#00E0C6",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21V19C23 17.1362 21.7252 15.5701 20 15.126" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 3.12602C17.7252 3.57006 19 5.13616 19 7C19 8.86384 17.7252 10.4299 16 10.874" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Multi-User Cursors",
    description:
      "See where every collaborator is editing with colored cursors and selections in real-time.",
    color: "#6366F1",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 8H17M7 12H13M7 16H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Rich Formatting",
    description:
      "Bold, italic, code blocks, headings, lists, links and more. Full markdown support included.",
    color: "#F59E0B",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Version History",
    description:
      "Every edit is tracked. Roll back to any point in time with a complete history of changes.",
    color: "#EC4899",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "End-to-End Encryption",
    description:
      "Your documents are encrypted in transit and at rest. Only you and your team can read them.",
    color: "#EF4444",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4H10V10H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4H20V10H14V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 14H10V20H4V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 14H20V20H14V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Infinite Whiteboard",
    description:
      "Sketch diagrams, flowcharts, and wireframes alongside your text. No canvas limits.",
    color: "#8B5CF6",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-[#f0f0f0] bg-white p-8 transition-all duration-500 hover:shadow-xl hover:border-transparent hover:-translate-y-1 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${feature.color}10, transparent 60%)`,
        }}
      />
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
        style={{
          backgroundColor: `${feature.color}12`,
          color: feature.color,
        }}
      >
        {feature.icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[#171717]">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
        {feature.description}
      </p>
    </div>
  );
}

export default function Features() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      <svg className="pointer-events-none absolute top-16 right-[7%] w-24 h-24 text-[#F59E0B]/10 hidden lg:block" viewBox="0 0 96 96" fill="none">
        <path d="M20 76 Q48 20, 76 76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 6" />
        <path d="M10 60 Q48 10, 86 60" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 5" />
      </svg>
      <svg className="pointer-events-none absolute bottom-24 left-[5%] w-8 h-8 text-[#00E0C6]/15 hidden lg:block" viewBox="0 0 32 32" fill="none">
        <path d="M4 16H28M16 4V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="pointer-events-none absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5e7eb]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`max-w-2xl transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block rounded-full bg-[#00E0C6]/10 px-4 py-1.5 text-sm font-medium text-[#059669] mb-4">
            Features
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <span className="squiggle-underline gradient-text">collaborate</span>
          </h2>
          <p className="mt-4 text-lg text-[#6b7280]">
            Built from the ground up for teams who need speed, reliability, and
            a beautiful editing experience.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

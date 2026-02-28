"use client";

import { useState } from "react";
import Link from "next/link";
import BackToHome from "@/components/BackToHome";
import DecoCorner from "@/components/DecoCorner";
import Divider from "@/components/Divider";
import FormField from "@/components/FormField";
import GoogleOAuthButton from "@/components/GoogleOAuthButton";

const FIELDS = [
  {
    id: "name",
    label: "Full name",
    type: "text",
    placeholder: "Your Name",
    icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  },
  {
    id: "email",
    label: "Email address",
    type: "email",
    placeholder: "id@company.com",
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "At least 8 characters",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
] as const;

const FEATURES = [
  {
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    title: "Real-time sync",
    desc: "Every keystroke arrives instantly across all collaborators.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Multiplayer rooms",
    desc: "Invite anyone with a link — no installs required.",
  },
  {
    icon: "M4 4h10v10H4zM14 14h6v6h-6zM4 18h6v2H4z",
    title: "Infinite whiteboard",
    desc: "Pan, zoom, and sketch without boundaries.",
  },
];

export default function SignUpPage() {
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden flex-col items-center justify-center overflow-hidden bg-[#171717] px-12 py-16 lg:flex">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
          viewBox="0 0 600 800"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={(i + 1) * 80} x2="600" y2={(i + 1) * 80} stroke="#fff" strokeWidth="1" strokeDasharray="4,10" />
          ))}
          {Array.from({ length: 7 }, (_, i) => (
            <line key={`v${i}`} x1={(i + 1) * 80} y1="0" x2={(i + 1) * 80} y2="800" stroke="#fff" strokeWidth="1" strokeDasharray="4,10" />
          ))}
          <rect x="100" y="180" width="90" height="65" rx="4" fill="none" stroke="#00E0C6" strokeWidth="2" strokeDasharray="6,4" transform="rotate(-6 145 212)" />
          <circle cx="430" cy="320" r="50" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="8,5" />
          <polygon points="300,90 345,165 255,165" fill="none" stroke="#00E0C6" strokeWidth="2" />
          <path d="M420 560 Q470 520 510 570 T440 630" fill="none" stroke="#fff" strokeWidth="1.5" />
          <rect x="60" y="400" width="45" height="45" fill="none" stroke="#fff" strokeWidth="1.5" transform="rotate(18 82 422)" />
          <line x1="180" y1="520" x2="380" y2="500" stroke="#00E0C6" strokeWidth="1.5" />
        </svg>

        <div className="relative z-10 text-center">
          <div className="mx-auto mb-6 flex h-[72px] w-[72px] -rotate-6 items-center justify-center rounded-2xl bg-[#00E0C6] shadow-[4px_4px_0_rgba(0,224,198,0.3)]">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path d="M3 17L9 11L13 15L21 7" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 7H21V11" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-[38px] font-bold leading-none tracking-tight text-white">
            Exaclidra<span className="text-[#00E0C6]">-ws</span>
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/40 italic">
            collaborative canvas
          </p>
        </div>

        <div className="relative z-10 mt-14 flex w-full max-w-[280px] flex-col gap-5">
          {FEATURES.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#00E0C6]/40 bg-[#00E0C6]/10">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00E0C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-white">{f.title}</h4>
                <p className="text-xs leading-relaxed text-white/40">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col justify-center bg-[#fafafa] px-8 py-12 sm:px-16 lg:px-20">
        <BackToHome />

        <div className="mx-auto w-full max-w-[400px]">
          <div className="mb-10">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#00E0C6]">
              <span className="block h-0.5 w-5 bg-[#00E0C6]" />
              Get started
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-[#171717]">
              Create your<br />workspace.
            </h1>
            <p className="mt-3 text-sm text-[#6b7280] italic">
              Already have an account?{" "}
              <Link href="/signin" className="font-medium text-[#171717] underline underline-offset-[3px]">
                Sign in here &rarr;
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <GoogleOAuthButton />
            <Divider text="or sign up with email" />

            {FIELDS.map((field) => (
              <FormField
                key={field.id}
                id={field.id}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                icon={field.icon}
                value={formData[field.id as keyof typeof formData]}
                focused={focused === field.id}
                onChange={(v) => setFormData((prev) => ({ ...prev, [field.id]: v }))}
                onFocus={() => setFocused(field.id)}
                onBlur={() => setFocused(null)}
              />
            ))}

            <button
              type="button"
              className="mt-1 w-full cursor-pointer rounded-xl bg-[#171717] py-3.5 text-lg font-semibold text-white shadow-[4px_4px_0_#00E0C6] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:bg-[#2d2d50] hover:shadow-[5px_5px_0_#00E0C6] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#00E0C6]"
            >
              Start collaborating &rarr;
            </button>
          </div>
        </div>

        <DecoCorner />
      </div>
    </div>
  );
}

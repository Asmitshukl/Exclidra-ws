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
    id: "email",
    label: "Email address",
    type: "email",
    placeholder: "your@company.com",
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
] as const;

export default function SignInPage() {
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({ email: "", password: "" });

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
          <circle cx="150" cy="200" r="60" fill="none" stroke="#00E0C6" strokeWidth="2" strokeDasharray="6,5" />
          <rect x="380" y="280" width="100" height="70" rx="4" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="8,4" transform="rotate(5 430 315)" />
          <path d="M120 500 Q200 440 280 510 T440 490" fill="none" stroke="#00E0C6" strokeWidth="1.5" />
          <polygon points="480,140 520,200 440,200" fill="none" stroke="#fff" strokeWidth="1.5" transform="rotate(-10 480 170)" />
          <line x1="80" y1="650" x2="300" y2="630" stroke="#00E0C6" strokeWidth="1.5" strokeDasharray="4,6" />
          <rect x="400" y="550" width="40" height="40" fill="none" stroke="#fff" strokeWidth="1.5" transform="rotate(22 420 570)" />
        </svg>

        <div className="relative z-10 text-center">
          <div className="mx-auto mb-6 flex h-[72px] w-[72px] rotate-6 items-center justify-center rounded-2xl bg-[#00E0C6] shadow-[4px_4px_0_rgba(0,224,198,0.3)]">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-[38px] font-bold leading-none tracking-tight text-white">
            Exaclidra<span className="text-[#00E0C6]">-ws</span>
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/40 italic">
            pick up where you left off
          </p>
        </div>

        <div className="relative z-10 mt-14 w-full max-w-[300px]">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.04] p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2">
                {["#6366F1", "#F59E0B", "#EC4899"].map((color, i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#171717] text-[10px] font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {["S", "M", "A"][i]}
                  </div>
                ))}
              </div>
              <span className="text-xs text-white/50">3 online now</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Your team has been busy — <span className="text-[#00E0C6]">12 edits</span> since
              you last visited. Jump back in and keep the momentum going.
            </p>
          </div>

          <svg className="mx-auto mt-4 opacity-20" width="2" height="40" viewBox="0 0 2 40">
            <line x1="1" y1="0" x2="1" y2="40" stroke="#00E0C6" strokeWidth="1.5" strokeDasharray="4,4" />
          </svg>

          <div className="flex items-center justify-center gap-2 text-xs text-white/30">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            End-to-end encrypted
          </div>
        </div>
      </div>

      <div className="relative flex flex-col justify-center bg-[#fafafa] px-8 py-12 sm:px-16 lg:px-20">
        <BackToHome />

        <div className="mx-auto w-full max-w-[400px]">
          <div className="mb-10">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#00E0C6]">
              <span className="block h-0.5 w-5 bg-[#00E0C6]" />
              Welcome back
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-[#171717]">
              Sign in to<br />your workspace.
            </h1>
            <p className="mt-3 text-sm text-[#6b7280] italic">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-medium text-[#171717] underline underline-offset-[3px]">
                Create one &rarr;
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <GoogleOAuthButton />
            <Divider text="or continue with email" />

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

            <div className="flex justify-end -mt-2">
              <a href="#" className="text-xs text-[#9ca3af] underline underline-offset-2 transition-colors hover:text-[#171717]">
                Forgot password?
              </a>
            </div>

            <button
              type="button"
              className="w-full cursor-pointer rounded-xl bg-[#171717] py-3.5 text-lg font-semibold text-white shadow-[4px_4px_0_#00E0C6] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:bg-[#2d2d50] hover:shadow-[5px_5px_0_#00E0C6] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#00E0C6]"
            >
              Sign in &rarr;
            </button>
          </div>
        </div>

        <DecoCorner />
      </div>
    </div>
  );
}

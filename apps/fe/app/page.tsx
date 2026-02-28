import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <div className="relative h-16 -mt-1 bg-[#fafafa]">z
          <div className="absolute inset-0 bg-white" style={{ clipPath: "polygon(0 0, 100% 60%, 100% 100%, 0 100%)" }} />
        </div>
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

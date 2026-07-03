import Hero from "./components/Hero";
import ThesisStrip from "./components/ThesisStrip";
import Features from "./components/Features";
import Spotlights from "./components/Spotlights";
import Roles from "./components/Roles";
import Objectives from "./components/Objectives";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ThesisStrip />
      <Features />
      <Spotlights />
      <Roles />
      <Objectives />
      <CtaSection />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";
import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center">
      <ThreeBackground />
      <Navbar />
      <div className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Contact />
      </div>
    </main>
  );
}

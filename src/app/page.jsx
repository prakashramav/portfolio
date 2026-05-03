import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center">
      <Navbar />
      <div className="w-full">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

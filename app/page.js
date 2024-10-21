import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <div className="pb-12">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

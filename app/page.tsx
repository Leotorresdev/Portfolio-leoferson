import { LanguageProvider } from "@/components/portfolio/LanguageProvider";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </LanguageProvider>
  );
}

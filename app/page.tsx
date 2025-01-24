import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
import Portfolio from "@/components/portfolio";
import AnimatedCard from "@/components/AnimatedCard";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/email";



export default function Home() {
  return (
    <div>
      <Hero />
      <Carousel />
      <Services />
      <About />
      <Projects />
      <Portfolio />
      <Contact />
    </div>
  );
}
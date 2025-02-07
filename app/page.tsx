import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
import Portfolio from "@/components/portfolio";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/email";
import TestAnimation from "@/components/FadeRegreat";
import Hyper from '@/components/Hyper'; // เปลี่ยนให้ตรง path


export default function Home() {
  return (
    <div>
      <Hero />
      <Hyper />
      <TestAnimation />
      <Carousel />
      <Services />
      <About />
      <Projects />
      <Portfolio />
      <Contact />
    </div>
  );
}
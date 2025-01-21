import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
import Portfolio from "@/components/portfolio";
import Achievements from "@/components/Achievements";
import AnimatedCard from "@/components/AnimatedCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <Carousel />
      <Services />
      <Skills />
      <Portfolio />
      <Achievements />
      {/* เพิ่ม props ให้ AnimatedCard */}
      <AnimatedCard
        title="Weather App"
        description="A dynamic weather application with real-time API integration."
        link="/projects/weather-app"
        thumbnail="/weather-thumbnail.jpg"
      />
    </div>
  );
}
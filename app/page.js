import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Ready from "@/components/Ready";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WhyChoose/>
      <Faq />
      <Ready/>
    </div>
  );
}

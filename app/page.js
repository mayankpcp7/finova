import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Ready from "@/components/Ready";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Faq />
      <Ready />
      <Footer/>
    </div>
  );
}

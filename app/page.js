import CommentsSlider from "@/components/CommentsSlider";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CommentsSlider/>
    </div>
  );
}

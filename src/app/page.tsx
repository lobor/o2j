import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { ReachOut } from "@/components/ReachOut";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-[#343434] bg-[#f6f6f6]">
      <Hero />

      <About />

      <Experience />

      <ReachOut />
    </main>
  );
}

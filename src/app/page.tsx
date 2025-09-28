import Image from "next/image";
import { Home } from "@/components/Home";

export default function PageHome() {
  return (
    <main className="relative min-h-screen flex flex-col gap-8 items-center justify-center bg-gradient-to-tr from-stone-900 to-stone-700 text-white px-16">
      <Home />
      <Image
        src={"/static/lutadores.jpg"}
        className="absolute opacity-10"
        fill
        priority
        alt="Lutadores num ringue"
      />
    </main>
  );
}

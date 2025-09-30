import { Home as HomeComponent } from "@/components/Home";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col gap-8 items-center justify-center bg-gradient-to-tr from-stone-900 to-stone-700 text-white px-8">
      <HomeComponent />
    </div>
  );
}

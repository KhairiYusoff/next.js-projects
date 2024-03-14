import { Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="p-4">
        <h1 className="text-[38px] font-bold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
        <SearchBar />
      </div>
    </main>
  );
}

import { Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars()

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

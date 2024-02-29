import Image from "next/image";
import { fetchAnimes } from "./actions";

export default async function Home() {

  await fetchAnimes(1)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      anime
    </main>
  );
}

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="relative">
      <section className="text-green-500 bg-black">
        <Nav />
      </section>
      <section className="min-h-screen bg-green-300">
        <p>hero</p>
      </section>
      <section className="text-green-500 bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

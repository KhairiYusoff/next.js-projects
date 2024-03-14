import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { CustomerReviews, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";

export default function Home() {
  return (
    <main className="relative">
      <section >
        <Nav />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section>
        <PopularProducts />
      </section>
      <section>
        <SuperQuality />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <SpecialOffer />
      </section>
      <section>
        <CustomerReviews />
      </section>
      <section>
        <Subscribe />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

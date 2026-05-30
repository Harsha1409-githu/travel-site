import Hero from "../components/Hero";
import Services from "../components/Services";
import Fleet from "../components/Fleet";
import BookingForm from "../components/BookingForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <section id="services" className="py-16 px-6 bg-white dark:bg-black">
        <Services />
      </section>

      {/* FLEET */}
      <section id="fleet" className="py-16 px-6 bg-gray-100 dark:bg-black">
        <Fleet />
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-16 px-6 bg-white dark:bg-black">
        <BookingForm />
      </section>

      {/* CONTACT (ADDED - THIS WAS MISSING) */}
      <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-black">
        <Contact />
      </section>

      {/* FOOTER (LAST) */}
      <Footer />
      <div className="pb-20 md:pb-0"></div>

    </div>
    
  );
}
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Fleet from "../components/Fleet"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import BookingForm from "../components/BookingForm"

import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sri Venkateswara Travels</title>

        <meta
          name="description"
          content="Best travel and car services"
        />
      </Helmet>

      <Navbar />
      <Hero />
      <Services />
      <Fleet />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
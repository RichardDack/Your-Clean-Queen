import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Services from '../components/Services'
import BookingForm from '../components/BookingForm'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Areas from '../components/Areas'
import Footer from '../components/Footer'

// Keep your excellent SEO metadata exactly as is
export const metadata: Metadata = {
  title: "Your Clean Queen - Professional House Cleaning Services | Dorchester, Weymouth, Dorset",
  description: "Professional house cleaning services in Dorchester, Weymouth, Poundbury & surrounding Dorset areas. Reliable, trustworthy, and with a personal touch. Book your house cleaning today!",
  keywords: [
    "house cleaning Dorchester",
    "cleaning services Weymouth",
    "domestic cleaning Poundbury",
    "professional cleaners Dorset",
    "home cleaning Dorchester",
    "residential cleaning Weymouth",
    "weekly cleaning Dorchester",
    "one-off cleaning Weymouth",
    "deep cleaning Dorset",
    "reliable house cleaners Dorchester",
    "trusted cleaning services Weymouth",
    "Your Clean Queen"
  ],
  openGraph: {
    title: "Your Clean Queen - House Cleaning Dorchester, Weymouth, Dorset",
    description: "Professional house cleaning with a personal touch across Dorchester, Weymouth, Poundbury and Dorset.",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <BookingForm />
      <About />
      <Testimonials />
      <Areas />
      <Footer />
    </main>
  )
}
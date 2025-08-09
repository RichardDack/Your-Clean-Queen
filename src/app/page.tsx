import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Services from '../components/Services'
import BookingForm from '../components/BookingForm'
import About from '../components/About'
import GoogleReviews from '../components/GoogleReviews'
import Areas from '../components/Areas'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

// Enhanced SEO metadata targeting "Cleaners Dorchester" and "Cleaners West Dorset"
export const metadata: Metadata = {
  title: "Cleaners Dorchester | Professional House Cleaners West Dorset | Your Clean Queen",
  description: "Professional cleaners in Dorchester and West Dorset. Reliable house cleaners providing weekly cleaning, deep cleans & end of tenancy services. Fully insured cleaners with 5+ years experience serving West Dorset.",
  keywords: [
    "cleaners Dorchester",
    "cleaners West Dorset",
    "house cleaners Dorchester", 
    "professional cleaners West Dorset",
    "domestic cleaners Dorchester",
    "reliable cleaners Weymouth",
    "local cleaners Poundbury",
    "best cleaners Dorchester",
    "trusted cleaners West Dorset",
    "Your Clean Queen cleaners"
  ],
  openGraph: {
    title: "Professional Cleaners Dorchester & West Dorset | Your Clean Queen",
    description: "Your Clean Queen provides reliable, professional cleaners across Dorchester, West Dorset and surrounding areas. Trusted house cleaners with 5+ years experience.",
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
      <GoogleReviews />
      <Areas />
      <FAQ />
      <Footer />
    </main>
  )
}
'use client'
import { useState } from 'react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "Do you have professional cleaners in Dorchester?",
      answer: "Yes, Your Clean Queen provides professional house cleaners across Dorchester and West Dorset. All our cleaners are fully trained, DBS checked, and committed to delivering excellent residential cleaning. We're locally based in Dorchester and serve the entire West Dorset area."
    },
    {
      question: "Do you cover West Dorset for cleaning services?",
      answer: "Absolutely! We provide professional cleaning services throughout West Dorset including Dorchester, Weymouth, Poundbury and surrounding areas within a 15-mile radius. Our local cleaners know the area well and provide reliable service across all of West Dorset."
    },
    {
      question: "How much do cleaners cost in Dorchester?",
      answer: "Our cleaning prices are competitive and transparent. We offer free quotes tailored to your specific needs and home size. Prices vary based on the size of your property, frequency of cleaning, and specific requirements. Contact us for a personalized quote from our Dorchester-based team."
    },
    {
      question: "Are your cleaners insured and DBS checked?",
      answer: "Yes, all Your Clean Queen cleaners are fully insured and DBS checked for your complete peace of mind. We are a professional, trustworthy cleaning company with comprehensive insurance coverage and strict security procedures."
    },
    {
      question: "What cleaning services do you offer in West Dorset?",
      answer: "We offer regular weekly/fortnightly house cleaning, one-off deep cleaning, end of tenancy cleaning, and specialized cleaning services. Our professional cleaners use eco-friendly products and provide a comprehensive service tailored to your needs."
    },
    {
      question: "How do I book cleaners in Dorchester?",
      answer: "Booking is easy! Call us on 01305 584616 or fill out our online form for a free quote. We'll arrange a convenient time to visit your property and discuss your cleaning requirements. Our friendly team will tailor a cleaning schedule that works for you."
    },
    {
      question: "Do you provide regular cleaners or one-off cleaning?",
      answer: "We offer both! Many customers choose our regular weekly or fortnightly cleaning service with the same trusted cleaners each time. We also provide one-off deep cleans, spring cleaning, and end of tenancy cleaning services across Dorchester and West Dorset."
    },
    {
      question: "Are you a local cleaning company in Dorchester?",
      answer: "Yes, we're a local Dorchester-based cleaning company serving West Dorset and surrounding areas. Being local means we understand the area, provide reliable service, and build lasting relationships with our customers. We're proud to be your trusted local cleaners."
    }
  ]

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-800 mb-4 md:mb-6">
            Frequently Asked Questions About Our Cleaners
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about our professional cleaning services in Dorchester and West Dorset
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border-2 border-black overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-4 md:p-6 focus:outline-none focus:ring-2 focus:ring-vibrant-green focus:ring-inset"
                aria-expanded={openItems.includes(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base md:text-lg lg:text-xl font-heading font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-vibrant-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-4 pb-4 md:px-6 md:pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="bg-vibrant-green rounded-xl md:rounded-2xl p-6 md:p-8 text-white border-2 border-black">
            <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 md:mb-4">
              Still Have Questions About Our Cleaners?
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-white/90 mb-4 md:mb-6">
              Our friendly team in Dorchester is here to help answer any questions about our professional cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a 
                href="tel:01305584616"
                className="inline-block bg-white text-vibrant-green hover:bg-gray-100 font-bold px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base transition-colors duration-300 shadow-lg border-2 border-black"
              >
                Call 01305 584616
              </a>
              <a 
                href="#contact"
                className="inline-block bg-transparent text-white hover:bg-white/10 font-bold px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-sm md:text-base transition-colors duration-300 border-2 border-white"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
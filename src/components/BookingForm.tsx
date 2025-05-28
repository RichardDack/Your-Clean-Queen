'use client'
import { useState } from 'react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    date: '',
    frequency: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Quote request submitted! We will be in touch shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      postcode: '',
      date: '',
      frequency: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-800 mb-6">
              Ready to book our home cleaning services?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Contact us to request a free home visit. You can discuss your housekeeping requirements,
              and we will take into account your preferences and the number of rooms you need cleaning.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'DBS checked housekeepers',
                'Tailored cleaning solutions',
                'Fully managed and insured service',
                'Eco-friendly cleaning products',
                'Strict security procedures',
                'Fully employed trusted teams'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-vibrant-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-vibrant-green rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                </svg>
                <div>
                  <div className="text-lg font-bold">Call for immediate booking</div>
                  <div className="text-2xl font-bold">01305 123 456</div>
                </div>
              </div>
              <p className="text-white/80 text-sm">Available Monday to Friday, 9AM to 6PM</p>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">
                    Book your free quote
                  </h3>
                  <p className="text-gray-600">
                    Get started with our professional cleaning service today.
                  </p>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none text-gray-800 bg-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none text-gray-800 bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Telephone/Mobile *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none text-gray-800 bg-white"
                    placeholder="01305 ..."
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Postcode *</label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none text-gray-800 bg-white"
                    placeholder="DT1 1XX"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Pick a date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none text-gray-800 bg-white"
                  />
                  <p className="text-gray-500 text-xs mt-1">
                    Please select a day at least 2 days in advance of today's date.
                  </p>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Frequency of cleaning *</label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none text-gray-800 bg-white"
                  >
                    <option value="">Please select...</option>
                    <option value="weekly">Weekly</option>
                    <option value="fortnightly">Fortnightly</option> 
                    <option value="monthly">Monthly</option>
                    <option value="oneoff">One-Off Clean</option>
                    <option value="deep-clean">Deep Clean</option>
                    <option value="end-tenancy">End of Tenancy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Additional Information</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none resize-none text-gray-800 bg-white"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-vibrant-green hover:bg-vibrant-green-dark text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-lg shadow-lg"
                >
                  Book your free quote now
                </button>
                
                <p className="text-gray-500 text-sm text-center">
                  To find out more information about how we handle your data, please see our{' '}
                  <a href="#" className="underline hover:text-vibrant-green">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function BookingForm() {
  const [state, handleSubmitFormspree] = useForm("myzwrrzb");
  const [dateError, setDateError] = useState('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    if (selectedDate) {
      const dateObj = new Date(selectedDate);
      // Adjust for timezone offset to prevent day shifting
      const userTimezoneOffset = dateObj.getTimezoneOffset() * 60000;
      const correctedDate = new Date(dateObj.getTime() + userTimezoneOffset);
      
      const day = correctedDate.getDay(); // 0 for Sunday, 6 for Saturday
      if (day === 0 || day === 6) {
        setDateError('Bookings are not available on weekends. Please select a weekday.');
        e.target.value = ''; // Clear the invalid date
      } else {
        setDateError('');
      }
    } else {
      setDateError(''); // Clear error if date is cleared
    }
  };

  return (
    <section id="contact" className="py-8 md:py-16 bg-gradient-to-r from-vibrant-green to-vibrant-green-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Ready to <span className="drop-shadow-xl text-gray-700" >book</span>  our home cleaning services? 
            </h2>
            
            <p className="text-sm md:text-base lg:text-xl text-white mb-6 md:mb-8 leading-relaxed">
              Contact us to request a free home visit. You can discuss your housekeeping requirements,
              and we will take into account your preferences and the number of rooms you need cleaning.
            </p>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {[
                'DBS checked housekeepers',
                'Tailored cleaning solutions',
                'Fully managed and insured service',
                'Eco-friendly cleaning products',
                'Strict security procedures',
                'Fully employed trusted teams'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-800 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  <span className="text-white  font-medium text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-vibrant-green rounded-xl md:rounded-2xl p-4 md:p-6 text-white border-2 border-black shadow-lg">
              <div className="flex items-center mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                </svg>
                <div>
                  <div className="text-sm md:text-base lg:text-lg font-bold">Call for immediate booking</div>
                  <div className="text-lg md:text-xl lg:text-2xl font-bold">01305 566785</div>
                </div>
              </div>
              <p className="text-white/80 text-xs md:text-sm">Available Monday to Friday, 9AM to 6PM</p>
            </div>
          </div>
          
          <div>
            {state.succeeded ? (
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border-2 border-black">
                <div className="text-center py-10">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-800 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Your quote request has been submitted. We will be in touch shortly.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border-2 border-black">
                <form onSubmit={handleSubmitFormspree} className="space-y-4 md:space-y-6">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-800 mb-2">
                    Book your free quote
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Get started with our professional cleaning service today.
                  </p>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none text-gray-800 bg-white text-sm md:text-base"
                    placeholder="Your name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none text-gray-800 bg-white text-sm md:text-base"
                    placeholder="your@email.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Telephone/Mobile *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none text-gray-800 bg-white text-sm md:text-base"
                    placeholder="01305 ..."
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                
                <div>
                  <label htmlFor="postcode" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Postcode *</label>
                  <input
                    id="postcode"
                    type="text"
                    name="postcode"
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none text-gray-800 bg-white text-sm md:text-base"
                    placeholder="DT1 1XX"
                  />
                  <ValidationError
                    prefix="Postcode"
                    field="postcode"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Pick a date *</label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    required
                    onChange={handleDateChange}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none text-gray-800 bg-white text-sm md:text-base"
                  />
                  <ValidationError
                    prefix="Date"
                    field="date"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                  {dateError && <p className="text-red-500 text-xs mt-1">{dateError}</p>}
                  <p className="text-gray-500 text-xs mt-1">
                    Please select a day at least 2 days in advance of today&apos;s date. Weekends are not available.
                  </p>
                </div>
                
                <div>
                  <label htmlFor="frequency" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Frequency of cleaning *</label>
                  <select
                    id="frequency"
                    name="frequency"
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none text-gray-800 bg-white text-sm md:text-base"
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
                  <ValidationError
                    prefix="Frequency"
                    field="frequency"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-vibrant-green focus:border-vibrant-green outline-none resize-none text-gray-800 bg-white text-sm md:text-base"
                    placeholder="Tell us about your requirements..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-vibrant-green hover:bg-vibrant-green-dark text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-colors duration-300 text-base md:text-lg shadow-lg border-2 border-black"
                >
                  Book your free quote now
                </button>
                
                <p className="text-gray-500 text-xs md:text-sm text-center">
                  To find out more information about how we handle your data, please see our{' '}
                  <a href="#" className="underline hover:text-vibrant-green">Privacy Policy</a>
                </p>
              </form>
            </div>
            )} {/* Closes the ternary operator for conditional rendering */}
          </div>
        </div>
      </div>
    </section>
  )
}
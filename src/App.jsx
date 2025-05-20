import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChatBot from './components/ChatBot'
import Service from './components/Service'
import CustomerReview from './components/CustomerReview'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'  // Import the new Footer component

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Service />
      <CustomerReview />
      <ContactForm />
      <Footer />   {/* Add the Footer component here, after ContactForm */}
      <ChatBot />
    </div>
  )
}

export default App
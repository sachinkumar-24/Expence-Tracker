import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">We’re here to help you with Expense Tracker</p>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto p-6 grid lg:grid-cols-2 gap-12 mt-10">
        
        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject (optional)"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Message / Query"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="flex items-center gap-3">
            <Mail className="text-blue-600" /> support@expensetracker.com
          </p>
          <p className="flex items-center gap-3">
            <Phone className="text-blue-600" /> +91 98765 43210
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="text-blue-600" /> New Delhi, India
          </p>
          <p className="flex items-center gap-3">
            <Clock className="text-blue-600" /> Mon – Fri: 9 AM – 6 PM
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition">
              <Facebook />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-400 hover:text-white transition">
              <Twitter />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-700 hover:text-white transition">
              <Linkedin />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-pink-600 hover:text-white transition">
              <Instagram />
            </a>
          </div>
        </div>
      </section>

      {/* Google Map */}
<section className="max-w-7xl mx-auto p-6 mt-10">
  <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
  <iframe
    title="map"
    className="w-full h-64 rounded-xl shadow-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.2635074063212!2d80.91420390788366!3d26.809439753976193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfeb91f7db979%3A0xf88f33c0acc03392!2sEco%20Garden%20Lucknow!5e1!3m2!1sen!2sin!4v1758049017465!5m2!1sen!2sin"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</section>


      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto p-6 mt-10">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-medium">How to reset password?</summary>
            <p className="mt-2 text-gray-600">Click on "Forgot Password" at login and follow the instructions.</p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-medium">How to track daily expenses?</summary>
            <p className="mt-2 text-gray-600">Go to Dashboard → Add Expense and enter your details.</p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-medium">Is my data secure?</summary>
            <p className="mt-2 text-gray-600">Yes, we use encryption to keep your financial data safe.</p>
          </details>
        </div>
      </section>

      {/* Footer with Quick Links */}
      <footer className="bg-gray-100 text-center py-6 mt-10 text-gray-600">
        <div className="flex justify-center gap-6 mb-4">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/services" className="hover:text-blue-600">Services</a>
          <a href="/dashboard" className="hover:text-blue-600">Dashboard</a>
          <a href="/login" className="hover:text-blue-600">Login</a>
        </div>
        <p>© {new Date().getFullYear()} Expense Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;

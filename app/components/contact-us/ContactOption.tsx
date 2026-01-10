"use client";

import React, { useState } from "react";
import { Phone, Mail, Users, ChevronRight } from "lucide-react";

const ContactPageSections = () => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    // TODO: connect API / email service
    console.log("Form submitted");
  };

  return (
    <div className="font-sans">
      {/* 1. Contact Options Section */}
      <section className="bg-[#051129] py-20 px-6 text-white text-center">
        <h2 className="text-4xl font-bold mb-16">Contact Options</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* General Enquiries */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center mb-6">
              <Phone className="text-orange-500 w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold mb-4">General Enquiries</h3>
            <p className="text-sm text-gray-400 mb-1">
              Email: <span className="underline">info@nigerianmanpowersolutions.com</span>
            </p>
            <p className="text-sm text-gray-400 mb-1">Phone: +234 000 000 0000</p>
            <p className="text-sm text-gray-400 mb-8">
              Office Hours: Mon - Fri, 8:00am - 5:00pm
            </p>
            <button className="px-6 py-2 border border-gray-600 rounded-md text-xs font-bold hover:bg-white/5 transition-all">
              Contact us
            </button>
          </div>

          {/* Manpower Support */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center mb-6">
              <Users className="text-orange-500 w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold mb-4">Request Manpower Support</h3>
            <p className="text-sm text-gray-400 mb-1">
              Email: <span className="underline">manpower@nigerianmanpowersolutions.com</span>
            </p>
            <p className="text-sm text-gray-400 mb-4">Phone: +234 000 000 0000</p>
            <p className="text-xs text-gray-500 max-w-[250px] mb-8 italic">
              <span className="font-bold text-gray-400 not-italic">Note:</span>{" "}
              For urgent manpower needs or large workforce deployment.
            </p>
            <button className="px-6 py-2 border border-gray-600 rounded-md text-xs font-bold hover:bg-white/5 transition-all">
              Get support
            </button>
          </div>

          {/* Partnerships */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center mb-6">
              <Mail className="text-orange-500 w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold mb-4">Partnership & Corporate Clients</h3>
            <p className="text-sm text-gray-400 mb-1">
              Email: <span className="underline">partnership@nigerianmanpowersolutions.com</span>
            </p>
            <p className="text-sm text-gray-400 mb-8">Phone: +234 000 000 0000</p>
            <button className="px-6 py-2 border border-gray-600 rounded-md text-xs font-bold hover:bg-white/5 transition-all">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* 2. Contact Form Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-600 font-bold uppercase tracking-widest mb-4">
            Send Us a Message
          </p>
          <h2 className="text-5xl text-gray-600 font-extrabold mb-4">Contact Form</h2>
          <p className="text-black mb-10">
            Our friendly team would love to hear from you.
          </p>

          <form className="space-y-8" onSubmit={handleSubmit}>
  {/* Full Name */}
  <input
    type="text"
    placeholder="Full Name"
    required
    className="w-full border-b border-black py-3 bg-transparent
               text-gray-700 placeholder-gray-400
               outline-none focus:border-orange-500 focus:text-gray-900"
  />

  {/* Email & Phone */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="email"
      placeholder="Email Address"
      required
      className="border-b border-black py-3 bg-transparent
                 text-gray-700 placeholder-gray-400
                 outline-none focus:border-orange-500 focus:text-gray-900"
    />

    <input
      type="tel"
      placeholder="Phone Number"
      className="border-b border-black py-3 bg-transparent
                 text-gray-700 placeholder-gray-400
                 outline-none focus:border-orange-500 focus:text-gray-900"
    />
  </div>

  {/* Company */}
  <input
    type="text"
    placeholder="Company / Organization Name"
    className="w-full border-b border-black py-3 bg-transparent
               text-gray-700 placeholder-gray-400
               outline-none focus:border-orange-500 focus:text-gray-900"
  />

            {/* Reason */}
            <div className="space-y-2 text-sm text-gray-700">
              <p className="font-bold">Reason for Contact</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "General Inquiry",
                  "Careers & Recruitment",
                  "Partnership & Business",
                  "Media / Press",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input type="radio" name="reason" required />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
<textarea
  rows={5}
  placeholder="Type your message..."
  required
  className="w-full border-b border-black py-3 bg-transparent
             text-gray-700 placeholder-gray-400
             outline-none focus:border-orange-500 focus:text-gray-900"
/>
{/* Agreement */}
<div className="flex items-start gap-3 text-sm text-gray-700">
  <input
    type="checkbox"
    checked={agreed}
    onChange={(e) => setAgreed(e.target.checked)}
    className="accent-orange-500 mt-1"
  />
  <span className="leading-relaxed">
    I agree to the{" "}
    <a
      href="/privacy-policy"
      className="underline text-gray-900 hover:text-orange-500 transition-colors"
    >
      Privacy Policy
    </a>{" "}
    and{" "}
    <a
      href="/terms-of-service"
      className="underline text-gray-900 hover:text-orange-500 transition-colors"
    >
      Terms of Service
    </a>.
  </span>
</div>


            {/* Submit */}
            <button
              type="submit"
              disabled={!agreed}
              className={`px-10 py-3 rounded-md font-bold text-sm transition-colors ${
                agreed
                  ? "bg-[#ff6f00] text-white hover:bg-[#e65100]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Submit Message
            </button>
          </form>
        </div>
      </section>

      {/* 3. Location Section */}
      <section className="py-20 px-6 bg-white text-center">
        <p className="text-xs text-gray-600 font-bold uppercase tracking-widest mb-4">
          Our Head Office
        </p>
        <h2 className="text-5xl text-gray-600 font-extrabold mb-12">Our location</h2>

        {/* Google Map */}
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-12 h-[500px]">
          <iframe
            title="Victoria Island Map"
            src="https://www.google.com/maps?q=12%20Marina%20Street%20Victoria%20Island%20Lagos&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        <h3 className="text-3xl text-gray-600 font-extrabold mb-2">Victoria Island</h3>
        <p className="text-gray-600 text-sm mb-6">
          12 Marina Street, Victoria Island, Lagos, Nigeria.
        </p>
        <a
          href="https://www.google.com/maps?q=12+Marina+Street+Victoria+Island+Lagos"
          target="_blank"
          className="flex items-center gap-1 text-gray-600 justify-center font-bold"
        >
          Get Directions <ChevronRight size={16} />
        </a>
      </section>
    </div>
  );
};

export default ContactPageSections;

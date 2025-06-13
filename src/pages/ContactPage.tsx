// src/pages/ContactPage.tsx (or src/components/ContactPage.tsx)
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiExternalLink, FiLoader } from 'react-icons/fi';
import { AnimatedWrapper } from '../components/AnimatedWrapper'; // Assuming path
import { fadeInUp, fadeInLeft, fadeInRight } from '../components/animations/variants'; // Assuming path

// EmailJS Configuration - Store these in .env!
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Use a specific template for contact
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

interface FormData {
  from_name: string;
  from_email: string;
  phone_number: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  from_name: '',
  from_email: '',
  phone_number: '',
  subject: '',
  message: '',
};

function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const year = new Date().getFullYear();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      console.error("EmailJS .env variables are not configured for contact form!");
      setSubmitStatus('error');
      alert("Sorry, the contact form is currently unavailable. Please email us directly.");
      return;
    }
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(
        (result) => {
          console.log('EmailJS SUCCESS!', result.text);
          setSubmitStatus('success');
          setFormData(initialFormData); // Reset form
        },
        (error) => {
          console.error('EmailJS FAILED...', error.text);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactDetails = [
    { label: 'Phone', value: '+234 703 3020 608', href: 'tel:+2347033020608' },
    { label: 'Email', value: 'info@aynadatasolutions.com', href: 'mailto:info@aynadatasolutions.com' },
    { label: 'Office', value: '14B, Kafayat Abdulrasaq Street, Lekki Phase 1' },
  ];

  return (
    <section id="contact-page" className="min-h-screen flex items-center bg-data-dark-bg py-40 md:py-52">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 md:gap-16 items-start">
          {/* Left Column: Text Info */}
          <AnimatedWrapper
            variants={fadeInLeft}
            className="lg:col-span-4 space-y-8"
          >
            <motion.h1
              variants={fadeInUp(0.6)}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-data-text-main font-heading leading-none tracking-tighter"
            >
              Let's get <br />
              in touch
            </motion.h1>

            <motion.p variants={fadeInUp(0.6, 0.1)} className="text-xl sm:text-2xl font-medium text-data-text-muted">
              Share your Data concerns with us!
            </motion.p>

            <motion.div variants={fadeInUp(0.6, 0.2)} className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <p className="text-xs text-data-text-muted uppercase tracking-wider">{detail.label}</p>
                  {detail.href ? (
                    <a href={detail.href} className="text-md sm:text-lg text-data-text-main hover:text-primary transition-colors">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-md sm:text-lg text-data-text-main">{detail.value}</p>
                  )}
                </div>
              ))}
              <div>
                <a
                  href="https://maps.google.com/?q=14B+Kafayat+Abdulrasaq+Street+Lekki+Phase+1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-data-text-main hover:text-primary font-medium inline-flex items-center group"
                >
                  See on Google Map
                  <FiExternalLink className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          </AnimatedWrapper>

          {/* Right Column: Contact Form */}
          <AnimatedWrapper
            variants={fadeInRight}
            className="lg:col-span-6 bg-data-text-main text-data-dark-bg p-8 sm:p-10 md:p-12 rounded-form-card shadow-2xl relative"
          >
            <h2 className="text-2xl font-semibold mb-8">Contact</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden input fields for EmailJS template compatibility */}
              <input type="hidden" name="name" value={formData.from_name} />
              <input type="hidden" name="title" value={formData.subject} />
              <input type="hidden" name="current_year" value={year.toString()} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <motion.input 
                    type="text" 
                    name="from_name" 
                    placeholder="Name" 
                    value={formData.from_name} 
                    onChange={handleChange} 
                    required 
                    whileFocus={{ scale: 1.02 }}
                    className="form-input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                  />
                </div>
                <div className="relative">
                  <motion.input 
                    type="email" 
                    name="from_email" 
                    placeholder="Email" 
                    value={formData.from_email} 
                    onChange={handleChange} 
                    required 
                    whileFocus={{ scale: 1.02 }}
                    className="form-input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                  />
                </div>
                <div className="relative">
                  <motion.input 
                    type="tel" 
                    name="phone_number" 
                    placeholder="Phone" 
                    value={formData.phone_number} 
                    onChange={handleChange} 
                    whileFocus={{ scale: 1.02 }}
                    className="form-input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                  />
                </div>
                <div className="relative">
                  <motion.input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    whileFocus={{ scale: 1.02 }}
                    className="form-input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                  />
                </div>
              </div>
              <div className="relative">
                <motion.textarea 
                  name="message" 
                  placeholder="Tell us about what you are interested in" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={5} 
                  required 
                  whileFocus={{ scale: 1.02 }}
                  className="form-input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical transition-all duration-200"
                />
              </div>
              <div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-yellow hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-data-dark-bg font-bold py-3.5 px-6 rounded-md transition-all duration-200 ease-out flex items-center justify-center text-md"
                >
                  {isSubmitting ? (
                    <FiLoader className="animate-spin mr-2 w-5 h-5" />
                  ) : null}
                  {isSubmitting ? 'Sending...' : 'Send to us'}
                </motion.button>
              </div>
            </form>
            {submitStatus === 'success' && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="mt-4 text-center text-green-600 font-medium"
              >
                Message sent successfully! We'll be in touch.
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="mt-4 text-center text-red-600 font-medium"
              >
                Oops! Something went wrong. Please try again.
              </motion.p>
            )}
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
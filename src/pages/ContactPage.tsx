// src/pages/ContactPage.tsx (or src/components/ContactPage.tsx)
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FiArrowRight, FiExternalLink, FiLoader } from 'react-icons/fi';
import { AnimatedWrapper } from '../components/AnimatedWrapper'; // Assuming path
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '../components/animations/variants'; // Assuming path

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

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
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
    { label: 'Phone', value: '+ (2) 578-365-379', href: 'tel:+2578365379' },
    { label: 'Email', value: 'info@aynadatasolutions.com', href: 'mailto:info@aynadatasolutions.com' },
    { label: 'Office', value: '14B, Kafayat Abdulrasaq Street, Lekki Phase 1' },
  ];

  return (
    <section id="contact-page" className="min-h-screen flex items-center bg-contact-bg-light py-40 md:py-52">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 md:gap-16 items-start">
          {/* Left Column: Text Info */}
          <AnimatedWrapper
            variants={fadeInLeft} // Adjusted delay for faster appearance
            className="lg:col-span-4 space-y-8"
          >
            <motion.h1
              variants={fadeInUp(0.6)}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-contact-text-dark font-heading leading-none tracking-tighter"
            >
              Let's get <br />
              in touch
            </motion.h1>

            <motion.p variants={fadeInUp(0.6, 0.1)} className="text-xl sm:text-2xl font-medium text-contact-text-dark">
              Don't be afraid to say hello with us!
            </motion.p>

            <motion.div variants={fadeInUp(0.6, 0.2)} className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <p className="text-xs text-contact-text-muted uppercase tracking-wider">{detail.label}</p>
                  {detail.href ? (
                    <a href={detail.href} className="text-md sm:text-lg text-contact-text-dark hover:text-primary transition-colors">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-md sm:text-lg text-contact-text-dark">{detail.value}</p>
                  )}
                </div>
              ))}
              <div>
                <a
                  href="https://maps.google.com/?q=14B+Kafayat+Abdulrasaq+Street+Lekki+Phase+1" // Replace with actual address for proper linking
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-contact-text-dark hover:text-primary font-medium inline-flex items-center group"
                >
                  See on Google Map
                  <FiExternalLink className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          </AnimatedWrapper>

          {/* Right Column: Contact Form */}
          <AnimatedWrapper
            variants={fadeInRight} // Adjusted delay
            className="lg:col-span-6 bg-contact-bg-dark text-contact-text-light p-8 sm:p-10 md:p-12 rounded-form-card shadow-2xl relative"
          >
      

            <h2 className="text-2xl font-semibold mb-8">Contact</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div whileFocus={{borderColor: 'var(--color-contact-accent-yellow, #F7FF00)'}} className="relative">
                  <input type="text" name="from_name" placeholder="Name" value={formData.from_name} onChange={handleChange} required className="form-input" />
                </motion.div>
                <motion.div whileFocus={{borderColor: 'var(--color-contact-accent-yellow, #F7FF00)'}} className="relative">
                  <input type="email" name="from_email" placeholder="Email" value={formData.from_email} onChange={handleChange} required className="form-input" />
                </motion.div>
                <motion.div whileFocus={{borderColor: 'var(--color-contact-accent-yellow, #F7FF00)'}} className="relative">
                  <input type="tel" name="phone_number" placeholder="Phone" value={formData.phone_number} onChange={handleChange} className="form-input" />
                </motion.div>
                <motion.div whileFocus={{borderColor: 'var(--color-contact-accent-yellow, #F7FF00)'}} className="relative">
                  <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="form-input" />
                </motion.div>
              </div>
              <motion.div whileFocus={{borderColor: 'var(--color-contact-accent-yellow, #F7FF00)'}} className="relative col-span-full"> {/* sm:col-span-2 if you want it with others */}
                <textarea name="message" placeholder="Tell us about your interested in" value={formData.message} onChange={handleChange} rows={5} required className="form-input"></textarea>
              </motion.div>
              <div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -1, backgroundColor: 'var(--color-contact-accent-yellow-dark, #D4DB00)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-yellow text-contact-bg-dark font-bold py-3.5 px-6 rounded-button-contact transition-all duration-200 ease-out flex items-center justify-center text-md"
                  style={{'--color-contact-accent-yellow-dark': '#D4DB00'} as React.CSSProperties}
                >
                  {isSubmitting ? (
                    <FiLoader className="animate-spin mr-2 w-5 h-5" />
                  ) : null}
                  {isSubmitting ? 'Sending...' : 'Send to us'}
                </motion.button>
              </div>
            </form>
            {submitStatus === 'success' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center text-green-400">
                Message sent successfully! We'll be in touch.
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center text-red-400">
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


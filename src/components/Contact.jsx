import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Add timestamp dynamically as EmailJS variable
    const timeStamp = new Date().toLocaleString();

    // Inject timestamp into hidden form field
    formRef.current.time.value = timeStamp;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', title: '', message: '' });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-slate-900 dark:text-cyan-400"
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">

          {/* LEFT SIDE INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              Contact Information
            </h3>

            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I am currently seeking better opportunities in the financial services industry.
              Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <FaEnvelope className="text-purple-600 dark:text-cyan-400 text-xl mr-4" />
                <a 
                  href="mailto:mrsiddharthabhunia@gmail.com" 
                  className="text-slate-700 dark:text-slate-200 hover:text-purple-700 dark:hover:text-cyan-400 font-medium"
                >
                  mrsiddharthabhunia@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <FaPhone className="text-purple-600 dark:text-cyan-400 text-xl mr-4" />
                <a 
                  href="tel:+918967164046" 
                  className="text-slate-700 dark:text-slate-200 hover:text-purple-700 dark:hover:text-cyan-400 font-medium"
                >
                  +91 8967164046
                </a>
              </div>

              <div className="flex items-center">
                <FaMapMarkerAlt className="text-purple-600 dark:text-cyan-400 text-xl mr-4" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">
                  Bhekutia, Nandigram, Purba Medinipur, West Bengal, 721656
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-purple-200 dark:border-slate-800"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

              {/* HIDDEN TIMESTAMP FIELD */}
              <input type="hidden" name="time" />

              <div>
                <label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-purple-50 dark:bg-slate-950 border border-purple-200 dark:border-slate-700 rounded-lg p-3"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-purple-50 dark:bg-slate-950 border rounded-lg p-3"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full bg-purple-50 dark:bg-slate-950 border rounded-lg p-3"
                  placeholder="Email Subject"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-purple-50 dark:bg-slate-950 border rounded-lg p-3 h-32 resize-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-400"
                >
                  <FaCheckCircle />
                  <span className="font-medium">Message sent successfully!</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-400"
                >
                  <FaExclamationCircle />
                  <span className="font-medium">Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

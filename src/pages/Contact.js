import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      await emailjs.sendForm(
        'service_dhg9lxh', // Remplacez par votre Service ID
        'template_ogp0rec', // Remplacez par votre Template ID
        formRef.current,
        'ATd6NqIS0ovGoaKBR' // Remplacez par votre Public Key
      );

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Message envoyé avec succès !',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Une erreur est survenue. Veuillez réessayer.',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-secondary">Contact</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-textPrimary">
                Prenons contact
              </h3>
              <p className="text-textSecondary mb-8">
                Je suis toujours ouverte à discuter de nouveaux projets, idées créatives
                ou opportunités de collaboration.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-secondary text-xl" />
                  <span className="text-textSecondary">y.ettaleby123@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-secondary text-xl" />
                  <span className="text-textSecondary">+212669300768</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-secondary text-xl" />
                  <span className="text-textSecondary">Casablanca, Morocco</span>
                </div>
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-textPrimary mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary text-textPrimary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-textPrimary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary text-textPrimary"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-textPrimary mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary text-textPrimary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-textPrimary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary text-textPrimary"
                  required
                ></textarea>
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.success
                      ? 'bg-green-500/20 text-green-500'
                      : status.error
                      ? 'bg-red-500/20 text-red-500'
                      : ''
                  }`}
                >
                  {status.message}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.loading}
                className={`w-full bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors ${
                  status.loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status.loading ? 'Envoi en cours...' : 'Envoyer le message'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 
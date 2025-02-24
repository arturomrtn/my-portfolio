import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center text-center px-6 py-16">
      <motion.h2
        className="text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let's Connect!
      </motion.h2>
      <motion.form
        action="https://formsubmit.co/moretonarturo@gmail.com"
        method="POST"
        className="w-full max-w-2xl shadow-lg rounded-2xl p-8 space-y-6 border border-gray-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yourwebsite.com/thanks" />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <label className="block text-gray-700 font-medium text-lg mb-4">Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-400 text-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <label className="block text-gray-700 font-medium text-lg mb-4">Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-400 text-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <label className="block text-gray-700 font-medium text-lg mb-4">Message</label>
          <textarea
            name="message"
            required
            placeholder="Write your message..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-400 text-lg h-40"
          ></textarea>
        </motion.div>
        <motion.button
          type="submit"
          className="w-full bg-green400 text-white py-4 text-lg font-bold rounded-lg hover:shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;


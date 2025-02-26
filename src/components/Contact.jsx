import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  
  const baseLabelStyle = "text-sm font-medium text-gray-700 dark:text-gray-300"
  const baseInputStyle = "mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none"

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center text-center px-6 py-16">
      <motion.h2
        className="text-3xl mb-6 tracking-tight"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's Connect!
      </motion.h2>

      <motion.form
        action="https://formsubmit.co/moretonarturo@gmail.com"
        method="POST"
        className="w-full max-w-md  p-6 rounded-cxl shadow-md border space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://arturowebdev.com" />

        <div>
          <label className={baseLabelStyle}>Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className={baseInputStyle}
          />
        </div>

        <div>
          <label className={baseLabelStyle}>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className={baseInputStyle}
          />
        </div>

        <div>
          <label className={baseLabelStyle}>Message</label>
          <textarea
            name="message"
            required
            placeholder="Write your message..."
            rows="4"
            className={baseInputStyle}
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className="w-full bg-cyan-500 text-white py-2 rounded-md font-medium hover:bg-cyan-600 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;




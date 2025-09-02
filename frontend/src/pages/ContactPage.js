
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    toast.success('تم إرسال رسالتك بنجاح!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-finclick-gold p-8 font-tajawal">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center font-playfair">تواصل معنا</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <h2 className="text-2xl font-bold mb-6 font-playfair">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">الاسم</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-finclick-gold/10 border border-finclick-gold/30 rounded-md p-3 focus:ring-finclick-gold focus:border-finclick-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-finclick-gold/10 border border-finclick-gold/30 rounded-md p-3 focus:ring-finclick-gold focus:border-finclick-gold"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">رسالتك</label>
                <textarea 
                  name="message" 
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-finclick-gold/10 border border-finclick-gold/30 rounded-md p-3 focus:ring-finclick-gold focus:border-finclick-gold"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary font-bold py-3 px-6 rounded-md w-full"
              >
                إرسال
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-4 font-playfair">معلومات التواصل</h2>
              <p><strong>العنوان:</strong> المملكة العربية السعودية - الرياض</p>
              <p><strong>البريد الإلكتروني:</strong> info@finclick.ai</p>
              <p><strong>ساعات العمل:</strong> الأحد - الخميس | 9 صباحًا - 5 مساءً</p>
            </div>
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-4 font-playfair">تابعنا على</h2>
              <div className="flex space-x-4">
                {/* Add social media links here */}
                <a href="#" className="hover:text-finclick-gold-light">تويتر</a>
                <a href="#" className="hover:text-finclick-gold-light">لينكد إن</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

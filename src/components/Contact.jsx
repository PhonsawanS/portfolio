'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_vgi9afy',     // ex. 'gmail'
      'template_vnw04xg',    // ex. 'template_xxxxxx'
      formData,
      'l_O3ST0wyyTR96IOY'      // ex. 'user_xxxxxxxxx'
    ).then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' }); // reset form
      },
      (error) => {
        console.error('Email failed to send:', error.text);
        alert('Failed to send the message, please try again.');
      }
    );
  };

  return (
    <div id="contact" className="py-16 flex flex-col items-center " >
      <h1 className="text-4xl font-medium mb-2">Contact</h1>
      <p className="text-center mb-8">You can contact me here.</p>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-4 w-full mb-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="w-full p-3 border border-gray-300 rounded-md h-40 mb-8"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition-colors"
        >
          Submit now
        </button>
      </form>
    </div>
  );
};

export default Contact;
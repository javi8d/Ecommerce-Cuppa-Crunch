import React from 'react';
import { Assets } from '../assets/assets';
import Title from '../components/Title';
import Newsletterbox from '../components/newsletterbox';

const Contact = () => {
  return (
    <main>
      {/* Title Section */}
      <header className="text-center text-2xl pt-10 border-t">
        <Title text1="CONTACT" text2="US" />
      </header>

      {/* Contact Details Section */}
      <section
        className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-14"
        aria-labelledby="contact-info"
      >
        {/* Contact Image */}
        <img
          className="w-full h-full md:max-w-[480px]"
          src={Assets.contact}
          alt="Contact illustration showing customer service interaction"
        />

        {/* Contact Information */}
        <div
          className="flex flex-col justify-center items-start gap-2"
          id="contact-info"
        >
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">Tel: <a href="tel:0480490393">0480 490 393</a></p>
          <p className="text-gray-500">
            Email: <a href="mailto:contact@cuppaandcrunch.com.co">contact@cuppaandcrunch.com.co</a>
          </p>
          <p className="text-gray-500">Address: 10 Barrack St, Sydney NSW 2000</p>

          {/* Google Maps Embed */}
          <iframe
            title="Google Maps location of 10 Barrack Street, Sydney NSW 2000"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.862844873455!2d151.20389087650145!3d-33.86742541898917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12affe3ca500cb%3A0x1d8e5675efd1255c!2s10%20Barrack%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1738027997724!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 'none' }}
            aria-label="Google Maps view of the store location"
          ></iframe>
        </div>
      </section>

      {/* Newsletter Box Section */}
      <Newsletterbox />
    </main>
  );
};

export default Contact;


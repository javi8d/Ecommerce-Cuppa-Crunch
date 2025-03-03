import React from 'react';
import { Assets } from '../assets/assets';
import Title from '../components/Title';
import Newsletterbox from '../components/newsletterbox';
import Guarantees from '../components/guarantees';

const About = () => {
  console.log("About component rendered");
  return (
    <main>
      {/* ABOUT US Section */}
      <header className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </header>
      <section className="my-10 flex flex-col md:flex-row gap-16">
        {/* Image with meaningful alt text */}
        <img
          src={Assets.about}
          className="w-full md:max-w-[450px]"
          alt="A welcoming display of tea, coffee, and snacks from Cuppa & Crunch"
        />
        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to <strong>Cuppa & Crunch</strong>, your go-to destination for all things delicious, comforting, and satisfying. At Cuppa & Crunch, we believe that every sip of tea and every bite of a snack should be a moment of joy. Our mission is to bring you the finest selection of premium teas, organic coffees, and irresistible snacks that are perfect for any occasion.
          </p>
          <p>
            Founded with a passion for high-quality ingredients and an unwavering commitment to exceptional flavor, we strive to create a space where every visit feels like a cozy retreat. Whether you are sipping a cup of our signature tea or coffee, nibbling on our freshly baked cookies, or enjoying a relaxing break with friends, we aim to elevate your experience with every item we offer.
          </p>
          <p>
            Our carefully curated range of products is crafted with love and designed to cater to the tastes of tea lovers, coffee enthusiasts, and snack aficionados alike. We’re not just about serving beverages and treats; we're about bringing people together and creating lasting memories over a cup and a crunch.
          </p>
          <p>
            Join us on this flavorful journey and indulge in the simple pleasures of life, one sip and bite at a time. Thank you for choosing <strong>Cuppa & Crunch</strong> — where every moment is better with a little extra crunch!
          </p>
        </div>
      </section>

      {/* Guarantees Section */}
      <header className="text-2xl text-center pt-8 border-t">
        <Title text1="GUARANTEES" text2="WE GIVE YOU" />
      </header>
      <section>
        <Guarantees />
      </section>

      {/* Newsletter Signup Section */}
      <section className="mt-10">
        <Newsletterbox />
      </section>
    </main>
  );
};

export default About;

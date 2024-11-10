'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageLanding12 from '../../assets/Landing-Image1.jpg';
import ImageLanding13 from '../../assets/Landing-Image2.jpg';
import ImageLanding14 from '../../assets/Landing-Image3.jpg';
import WomanEducation from '../../assets/Educationandskilldevelopment.jpg';
import Supportive from '../../assets/SupportiveCommunity.jpg';
import awareness from '../../assets/Awareness.jpg';
import woman from '../../assets/WomenEmpowerment.jpg';
import career from '../../assets/career.jpeg';
import health from '../../assets/Healthandwell.jpg';
import education from '../../assets/Education.jpg';
import healthImage from '../../assets/Healthandwellbeing.jpg';

import Navbar from './Navbar';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [ImageLanding12, ImageLanding14, ImageLanding13];

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section>
        <section>
            <Navbar />
        </section>
   <section className="relative w-full h-screen justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-white">
  {/* Background Slider */}
  <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-black">
    <div className="sliderWrapper w-full h-full relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide absolute w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Slide Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          {/* SkyBlue Overlay */}
          <div className="absolute inset-0 bg-[#007cc3] opacity-50"></div>
        </div>
      ))}
    </div>
  </div>
  <div className="relative z-10 flex flex-col items-center justify-center text-center mt-36">
  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide relative drop-shadow-[0_6px_15px_rgba(0,0,0,0.9)] animate-[fadeInUp_1.5s_ease-out_forwards] transition-transform duration-1000 ease-in-out">
    Welcome to Women
    <br />
     <span className="text-2xl md:text-4xl lg:text-5xl"> Friendly Association</span>
  </h1>
<h2 className='text-white text-sm mb-10'>Empowering Women, Transforming Lives!</h2>
</div>

  {/* Main Content Area */}
  <div className="relative z-10 flex flex-col lg:flex-row lg:w-full mt-20 lg:space-x-8 items-center justify-center">
    
    {/* Left Content */}
    <div className="flex flex-col items-center lg:w-1/2 lg:pr-8">
     

      <div className="flex flex-col space-y-4 mt-6">
        <h2 className="text-white text-lg sm:text-xl font-semibold">Join Our Community</h2>
        <p className="text-gray-300 font-semibold text-sm sm:text-base">
          Be part of a supportive network that promotes growth, education, and empowerment for women of all ages.
        </p>
        <h2 className="text-white text-lg sm:text-xl font-semibold">Get Involved</h2>
        <p className="text-gray-300 font-semibold text-sm sm:text-base">
          Participate in our events, workshops, and initiatives designed to uplift and inspire.
        </p>
        <h2 className="text-white text-lg sm:text-xl font-semibold">Explore Resources</h2>
        <p className="text-gray-300 font-semibold text-sm sm:text-base">
          Access tools, guides, and information tailored to help you succeed in various aspects of life.
        </p>
      </div>
    </div>

    {/* Right Subscription Box */}
    <div className="relative z-10 flex items-center justify-center lg:w-1/3 mt-8 lg:pl-8  lg:mt-10">
      <div className="bg-white rounded-3xl shadow-xl p-6 space-y-4 border border-[#007cc3] w-full">
        <h2 className="text-xl font-bold text-center text-[#007cc3]">Get Started Today!</h2>
        <p className="text-gray-800 text-center text-base">
          Join our community to stay updated on the latest events, news, and opportunities!
        </p>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#007cc3] transition duration-200"
        />
        <button 
          className="w-full bg-[#007cc3] text-white py-2 rounded-full hover:bg-blue-600 transition duration-300 shadow-md">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  {/* Custom Styles for the Slider */}
  <style jsx>{`
    .sliderWrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .slide {
      animation: fade 10s infinite ease-in-out; /* Adjusted animation duration */
      transition: opacity 0.5s ease-in-out; /* Reduced transition duration for smoother effect */
    }

    @keyframes fade {
      0% { opacity: 0; }
      10% { opacity: 1; }
      40% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 0; }
    }

    .slide:nth-child(1) { animation-delay: 0s; }
    .slide:nth-child(2) { animation-delay: 4s; } /* Overlap the animations */
    .slide:nth-child(3) { animation-delay: 8s; } /* Overlap the animations */
  `}</style>
</section>



       <section className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-12 xl:px-24 rounded-lg shadow-lg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-skyBlue opacity-20 rounded-lg"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-skyBlue opacity-10 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-skyBlue opacity-10 rounded-full transform translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-skyBlue mb-6 lg:mb-8">
         Empowering Women, Inspiring Change
        </h2>
        <p className="text-lg md:text-xl leading-relaxed lg:leading-loose text-center mb-4">
          Here at Women Friendly Association, we firmly believe in the strength of unity, resilience, and empowerment to pave the way for women to thrive without limitations. Our organization is committed to advocating for women’s empowerment and promoting the values of gender equality. Our ultimate vision is a community where every woman can access the resources, understanding, and encouragement necessary to reach her full potential and positively impact a fair and equal world.
        </p>
        <p className="text-lg md:text-xl leading-relaxed lg:leading-loose text-center mb-6">
          We understand that there are many challenges women and their intersectionalities face when trying to navigate advancement in their careers. Instead of watching from the sidelines, we take a proactive, inclusive, and multi-faceted approach to ensure women are supported and celebrated every step of the way.
        </p>
        <div className="flex justify-center">
          <button className="bg-skyBlue text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-sky-600 transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
    <section className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-12 xl:px-24 rounded-lg shadow-lg relative overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-full h-full bg-skyBlue opacity-10 rounded-lg"></div>
  
  <div className="max-w-6xl mx-auto relative z-10">
    <h2 className="text-4xl md:text-5xl font-bold text-skyBlue text-center mb-8">
      Our Mission
    </h2>
    <p className="text-lg md:text-xl leading-relaxed lg:leading-loose text-center mb-8">
      Beyond just achieving gender equality, empowering women means creating a space where they are honored, supported, and provided with the tools to take charge and thrive. We aim to dismantle obstacles, defy stereotypes, and open doors for women to excel in every aspect of their lives.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
        <Image src={education} alt="Empowered Women" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold text-skyBlue mb-2">Empowerment Through Education</h3>
          <p className="text-gray-600">Providing educational resources and workshops to empower women in their personal and professional lives.</p>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
        <Image src={Supportive} alt="Supportive Community" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold text-skyBlue mb-2">Building a Supportive Community</h3>
          <p className="text-gray-600">Creating a safe and inclusive environment for women to connect, share, and grow together.</p>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
        <Image src={healthImage} alt="Breaking Barriers" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold text-skyBlue mb-2">Breaking Barriers</h3>
          <p className="text-gray-600">Challenging societal norms and stereotypes to pave the way for women to excel in every field.</p>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
        <Image src={woman} alt="Mentorship Programs" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold text-skyBlue mb-2">Mentorship Programs</h3>
          <p className="text-gray-600">Offering mentorship opportunities to guide women on their journeys toward success.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-gray-50 text-gray-800 py-16 px-4 sm:px-6 lg:px-12 xl:px-24 rounded-lg shadow-lg relative overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full bg-skyBlue opacity-5 rounded-lg"></div>

  <div className="max-w-6xl mx-auto relative z-10">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-skyBlue">
      What We Do
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Education and Skill Development Card */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative w-full md:w-1/2 h-48">
          <Image
            src={WomanEducation}
            alt="Education and Skill Development"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-skyBlue to-transparent opacity-40 rounded-lg"></div>
        </div>
        <div className="p-6 md:w-1/2">
          <h3 className="text-xl font-bold text-skyBlue mb-2">Education & Skill Development</h3>
          <p className="text-gray-600">
            We believe in the power of education to enact significant change. Our initiatives focus on providing women with opportunities for top-notch education and skill development.
          </p>
        </div>
      </div>

      {/* Career Guidance and Mentorship Card */}
      <div className="flex flex-col  items-center md:flex-row-reverse">
        <div className="relative w-full md:w-1/2 h-48">
          <Image
            src={career}
            alt="Career Guidance and Mentorship"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-skyBlue to-transparent opacity-40 rounded-lg"></div>
        </div>
        <div className="p-6 md:w-1/2">
          <h3 className="text-xl font-bold text-skyBlue mb-2">Career Guidance & Mentorship</h3>
          <p className="text-gray-600">
            We offer exceptional career guidance and mentorship, linking women with experienced professionals who provide priceless advice and encouragement as they chase their dreams.
          </p>
        </div>
      </div>

      {/* Health and Well-being Card */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative w-full md:w-1/2 h-48">
          <Image
            src={health}
            alt="Health and Well-being"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-skyBlue to-transparent opacity-40 rounded-lg"></div>
        </div>
        <div className="p-6 md:w-1/2">
          <h3 className="text-xl font-bold text-skyBlue mb-2">Health & Well-being</h3>
          <p className="text-gray-600">
            Our priority is to promote women’s health and wellness, providing various tools and initiatives to support physical and mental well-being.
          </p>
        </div>
      </div>

      {/* Advocacy and Awareness Card */}
      <div className="flex flex-col items-center md:flex-row-reverse">
        <div className="relative w-full md:w-1/2 h-48">
          <Image
            src={awareness}
            alt="Advocacy and Awareness"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-skyBlue to-transparent opacity-40 rounded-lg"></div>
        </div>
        <div className="p-6 md:w-1/2">
          <h3 className="text-xl font-bold text-skyBlue mb-2">Advocacy & Awareness</h3>
          <p className="text-gray-600">
            We advocate for policies that uphold gender equality, championing women’s rights and raising awareness of pressing issues facing women globally.
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-12">
      <button className="bg-skyBlue text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-sky-600 transition duration-300 ease-in-out">
        Join Our Movement
      </button>
    </div>
  </div>
</section>
<section className="relative py-24">
      <Image
        src={ImageLanding14}
        alt="Empowering Women"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 rounded-lg"
      />
      <div className="absolute inset-0 bg-skyBlue opacity-60"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Empowering Women for a Brighter Future
        </h2>
        <p className="text-lg md:text-xl text-white mb-8 px-4">
          At Women Friendly, we are dedicated to creating an environment where women can thrive, breaking down barriers and providing the necessary support to help them achieve their dreams.
        </p>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-skyBlue font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
   <section>
    <Footer />
   </section>


    </section>
  );
};

export default LandingPage;

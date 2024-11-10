'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';
import GalleryImage1 from '../../assets/GalleryImage1.jpg';
import GalleryImage2 from '../../assets/GalleryImage2.jpg';
import GalleryImage3 from '../../assets/GalleryImage3.jpg';
import GalleryImage4 from '../../assets/GalleryImage4.jpg';
import GalleryImage5 from '../../assets/GalleryImage5.jpeg';
import GalleryImage6 from '../../assets/GalleryImage6.jpg';
import GalleryImage7 from '../../assets/GalleryImage7.jpg';
import GalleryImage8 from '../../assets/GalleryImage8.jpg';
import GalleryImage9 from '../../assets/GalleryImage9.jpg';
import GalleryImage10 from '../../assets/GalleryImage10.jpg';

const images = [
  { src: GalleryImage1, alt: 'Conference celebration moment', description: 'Women celebrating success at a conference, fostering connections.' },
  { src: GalleryImage2, alt: 'Brainstorming creative ideas', description: 'A group of women engaged in a brainstorming session, sharing ideas.' },
  { src: GalleryImage3, alt: 'Community service project', description: 'Women participating in a community service project, making a difference.' },
  { src: GalleryImage4, alt: 'Mentorship in action', description: 'A mentor guiding a young woman, showcasing the importance of mentorship.' },
  { src: GalleryImage5, alt: 'Skill-building workshop', description: 'Women attending a workshop, enhancing their skills, knowledge, confidence, networking, and career development.' },
  { src: GalleryImage6, alt: 'Celebrating achievements together', description: 'A celebration of achievements, empowering women to pursue their dreams.' },
  { src: GalleryImage7, alt: 'Supportive happiness class', description: 'Women supporting each other during a fitness class, promoting wellness, positivity, community, and motivation.' },
  { src: GalleryImage8, alt: 'Inspiring keynote speech', description: 'An inspiring speaker at an event, encouraging women to embrace their power, confidence, and leadership.' },
  { src: GalleryImage9, alt: 'Professional networking event', description: 'Women networking at a professional event, building connections for growth.' },
  { src: GalleryImage10, alt: 'Diverse community gathering', description: 'A community gathering, celebrating diversity and unity among women for growth, empowerment, collaboration, and shared goals.' },
];

const Gallery: React.FC = () => {
  return (
    <section>
      <Navbar />
      <section className="py-16 bg-gradient-to-br from-sky-400 via-sky-200 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-skyBlue">
            Explore Our Gallery
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            Welcome to Women Friendly Association - Empowering Women, Transforming Lives!
          </p>
          <p className="text-md text-center text-gray-500 max-w-2xl mx-auto mb-10">
            Here at Women Friendly Association, we firmly believe in the strength of unity, resilience, and empowerment to pave the way for women to thrive without limitations. Our organization is committed to advocating for women’s empowerment and promoting the values of gender equality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 relative">
  <Image 
    src={image.src}
    alt={image.alt}
    width={500}
    height={300}
    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
  />
  {/* Overlay for blue blur effect */}
  <div className="absolute inset-0 bg-blue-500 opacity-30 backdrop-blur-md"></div>
  <div className="p-4 bg-white relative z-10"> {/* Added relative z-10 for content visibility */}
    <h3 className="text-lg font-semibold text-sky-600">{image.alt}</h3>
    <p className="text-gray-600 mt-2">{image.description}</p>
  </div>
</div>

            ))}
          </div>
          <div className="mt-12 text-center">
             <h3 className="text-2xl font-semibold text-sky-600 mb-4">Join Our Movement</h3>
            <p className="text-md text-gray-500 max-w-xl mx-auto">
              We invite you to join us toward a more inclusive and empowering future. Whether you are a woman seeking support, a professional eager to mentor, or an advocate for gender equality, your involvement makes a difference.
            </p>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
};

export default Gallery;

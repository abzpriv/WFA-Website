import Image from 'next/image';
import logo from '../../assets/footerlogo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-12 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-start">
            <Image src={logo} alt="Logo" width={100} height={20} />
            <p className="mt-4 text-gray-600 text-sm">
              At Women Friendly, we strive to empower women by providing resources, support, and a community that fosters growth and success.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-skyBlue mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-skyBlue transition duration-200">Home</a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-600 hover:text-skyBlue transition duration-200">Gallery</a>
              </li>
              
              <li>
                <a href="/contact" className="text-gray-600 hover:text-skyBlue transition duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-skyBlue mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-skyBlue transition duration-200 transform hover:scale-125">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-skyBlue transition duration-200 transform hover:scale-125">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-skyBlue transition duration-200 transform hover:scale-125">
                <FaLinkedinIn size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-skyBlue transition duration-200 transform hover:scale-125">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Women Friendly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

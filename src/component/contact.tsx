'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from './Footer';
import Navbar from './Navbar';
import { useEffect } from 'react';




const ContactUs = () => {
  

  
  

  const validationSchema = Yup.object({
    name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

    const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form Submitted', values);
      // Handle form submission logic here (e.g., sending data to an API)
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
        <section>
            <Navbar />
        </section>
<section className="bg-gradient-to-r from-sky-300 mt-5 via-gray-100 to-sky-300  min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-7xl mx-auto">
            {/* Left Section: Map and Address */}
            <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-r from-[#007cc3] to-[#00aaff] text-white">
              <h2 className="text-4xl font-bold mb-6">Visit Our Office</h2>
              <p className="text-lg mb-4">
                We’re located at: <br />
                123 Health St, Wellness City, State, 12345
              </p>

              <iframe
                className="w-full h-64 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8401088798496!2d144.9581014153166!3d-37.81732797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57776940f3d430!2sMelbourne%20CBD%2C%20VIC!5e0!3m2!1sen!2sau!4v1631493036477!5m2!1sen!2sau"
                allowFullScreen={false}
                loading="lazy"
                title="Company Location"
              ></iframe>
            </div>

            {/* Right Section: Contact Form */}
            <div className="lg:w-1/2 p-8 lg:p-12 bg-white">
              <h2 className="text-4xl font-bold text-[#007cc3] mb-6">Contact Us</h2>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                {/* Full Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full p-4 bg-white border ${
                      formik.touched.name && formik.errors.name
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-[#007cc3] transition`}
                    required
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm mt-2">{formik.errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full p-4 bg-white border ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-[#007cc3] transition`}
                    required
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-2">{formik.errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full p-4 bg-white border ${
                      formik.touched.subject && formik.errors.subject
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-[#007cc3] transition`}
                    required
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-red-500 text-sm mt-2">{formik.errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full p-4 bg-white border ${
                      formik.touched.message && formik.errors.message
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-[#007cc3] transition min-h-[150px] max-h-[400px]`}
                    rows={6}
                    required
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm mt-2">{formik.errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
               <button
  type="submit"
  className="w-full py-4 rounded-lg text-white transition-transform transform bg-[#007cc3] hover:bg-blue-600"
>
  Send Message
</button>


                {/* Success Message */}
               
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </section>
  );
};

export default ContactUs;

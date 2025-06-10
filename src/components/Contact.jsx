import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          toast.success(
            "Thank you for your message! I'll respond as soon as possible."
          );
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong. Please try again later.");
          console.error("Failed to send message: ", error.text);
        }
      );
  };

  return (
    <div
      className="bg-gradient-to-t from-indigo-900 via-sky-900 to-black text-white py-20 mt-[-10px]"
      id="contact"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          {/* Contact Information */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
              from-sky-400 to-indigo-400 mb-4"
            >
              Let&apos;s Connect
            </h3>
            <p>
              Whether you have a question, an opportunity, or just want to say
              hi, feel free to reach out. I’m excited to connect and grow in the
              world of web development.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-sky-400 mr-2" />
              <a
                href="mailto:mohammedabdulabi@gmail.com?subject=Inquiry&body=Hi Mohammed, I would like to discuss..."
                className="hover:underline"
              >
                mohammedabdulabi@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-sky-400 mr-2" />
              <span>+0047 45845550</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-sky-400 mr-2" />
              <span>Sigrids vei 32, Kristiansand, Norge</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="user_name"
                  required
                  autoComplete="name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="user_email"
                  required
                  autoComplete="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  autoComplete="off"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  rows="5"
                  placeholder="Write your message here"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white
                  transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;

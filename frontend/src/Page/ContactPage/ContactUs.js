import React, { useState } from "react";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocation } from "react-icons/io5";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext";
import { toast } from 'react-hot-toast';

const ContactUs = () => {
  const { user } = useAuth();
  const [status, setStatus] = useState("");

  const [contactData, setContactData] = useState({
    fullname: "",
    email: "",
    mobileNumber: "",
    message: ""
  });

  const BASE_URL = "http://localhost:8000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`${BASE_URL}/api/user/contact`, {
        ...contactData,
        userId: user?.id
      });
      console.log(response);
      toast.success("Message sent successfully! Thank you for reaching out to us!.");
      if (response.status === 201) {
        setStatus("Thank you for reaching out to us! We will get back to you as soon as possible.");
        setContactData({
          fullname: "",
          email: "",
          mobileNumber: "",
          message: ""
        });
      }
      setTimeout(() => {
        setStatus("");
      }, 5000);
    } catch (error) {
      toast.error("Failed to send message");
      setStatus("Failed to send message. Please try again.");
      setTimeout(() => {
        setStatus("");
      }, 5000);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  return (
    <div className="flex container px-2 lg:px-20 mt-4 mb-4 mx-auto w-full min-h-screen justify-center items-center">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full p-10 rounded-xl shadow-lg text-white overflow-hidden">
        <div className="flex flex-col space-y-8 justify-between md:w-[60%]">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
            <p className="pt-2 text-cyan-100 text-sm">
              SoulWays is a travel company dedicated to providing unforgettable
              travel experiences to our customers. With a passion for adventure
              and exploration, we curate unique itineraries and offer
              exceptional service to ensure every journey is memorable.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <FaPhoneAlt className="text-teal-300 text-xl" />
              <span>+91 8936897141</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <IoMail className="text-teal-300 text-xl" />
              <span>soulways@contact.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <IoLocation className="text-teal-300 text-xl" />
              <span>Law Gate Phagwada, Punjab</span>
            </div>
          </div>
          <div className="flex space-x-8 text-lg">
            <a href="#" className=""><FaFacebook /></a>
            <a href="#" className=""><FaSquareInstagram /></a>
            <a href="#" className=""><FaTwitterSquare /></a>
            <a href="#" className=""><FaLinkedin /></a>
          </div>
        </div>
        <div className="md:w-[40%] relative">
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"></div>
          <div className="relative z-1 bg-white rounded-xl shadow-lg p-8 text-gray-600">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullname" className="text-sm">Your Name</label>
                <input
                  type="text"
                  id="fullname"
                  value={contactData.fullname}
                  onChange={handleChange}
                  placeholder="Your Full name"
                  className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={contactData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>

              <div>
                <label htmlFor="mobileNumber" className="text-sm">Mobile Number</label>
                <input
                  type="text"
                  id="mobileNumber"
                  value={contactData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea
                  id="message"
                  value={contactData.message}
                  onChange={handleChange}
                  placeholder="Ask anything..."
                  rows="4"
                  className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <button
                type="submit"
                className="inline-block self-end bg-cyan-700 text-white font-bold uppercase rounded-lg px-6 py-2 text-sm"
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-sm">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

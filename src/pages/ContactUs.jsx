import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-blue-300 mt-2">We'd love to hear from you!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                  className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <section className="flex flex-col justify-center bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              Feel free to reach out to us through any of the following methods:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Email:</h3>
                <p className="text-blue-800">
                  okhunjonmakhmudov1998.@gmail.com
                </p>
              </div>
              <div>
                <h3 className="font-medium">Phone:</h3>
                <p className="text-blue-800">+998 93 670 70 76</p>
              </div>
              <div>
                <h3 className="font-medium">Address:</h3>
                <p className="text-gray-700">
                  123 Facts Street, Truth City, World
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;

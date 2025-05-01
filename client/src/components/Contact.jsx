import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form behavior
    setLoading(true);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "ca1bfe38-5926-419d-8ff5-1e98a433cb52");

      const object = Object.fromEntries(formData.entries());
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        toast.success("Email sent successfully!");
        event.target.reset(); // clear form fields
      } else {
        toast.error(res.message || "Failed to send email. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-7">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-200">
            <span className="text-sm font-medium text-blue-600">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Contact Us for Any Queries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help! If you have any questions or need assistance,
            please reach out to us using the form below or through our contact
            information. Our team is dedicated to providing you with the best
            support possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-6 shadow-md rounded-md border border-blue-100">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm font-medium text-blue-600">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-600">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-600">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Write your message here"
                  className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="text-black">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">
              Get in Touch!
            </h3>
            <p className="text-sm mb-6">
              Got a question or need help? Use the form to reach out, and our
              team will get back to you shortly. Whether it's about a course or
              general inquiry, we're here to support your learning journey.
            </p>
            <p className="mb-2">
              <strong className="text-blue-600">Email:</strong>{" "}
              lmsupport@example.com
            </p>
            <p className="mb-2">
              <strong className="text-blue-600">Location:</strong> UVPCE, Ganpat
              University
            </p>
            <p className="mb-2">
              <strong className="text-blue-600">Designed By:</strong>{" "}
              <Link to="https://www.linkedin.com/in/tirth-patel-b90b1622a/">
                Tirth Patel
              </Link>
            </p>
            <p className="mb-2">
              <strong className="text-blue-600">Developed By:</strong>{" "}
              <Link to="https://www.linkedin.com/in/tirth-patel-b90b1622a/">
                Tirth Patel
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

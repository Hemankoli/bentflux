import { useState } from "react";
import InputField from "../shared/InputField";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/contact-us`, { method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Something went wrong. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D] text-white">
      <main className="flex-grow px-6 md:px-20 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Let’s talk.
            </h1>
            <p className="text-gray-400 text-lg">
              Ready to build something? Fill out the form, and we’ll get in
              touch within 24 hours.
            </p>
          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 gap-12">
            <form
              className="space-y-6 bg-gray-800 rounded-lg p-10"
              onSubmit={handleSubmit}
            >
              <InputField
                labelName="Name"
                type="text"
                name="name"
                value={formData.name}
                method={handleChange}
                placeholder="Your name"
              />
              <InputField
                labelName="Email"
                type="email"
                name="email"
                value={formData.email}
                method={handleChange}
                placeholder="Your email"
              />
              <InputField
                labelName="Subject"
                type="text"
                name="subject"
                value={formData.subject}
                method={handleChange}
                placeholder="Your subject"
              />
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none"
                  placeholder="Tell us what you're looking for..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-block bg-pink-600 w-full hover:bg-pink-500 text-white font-medium px-6 py-3 rounded-lg transition-all"
              >
                Send message
              </button>

              {status && (
                <p className="text-center text-sm text-gray-400 mt-3">{status}</p>
              )}
            </form>

            {/* Contact Info */}
            <div className="space-y-8 text-center">
              <p className="text-gray-500 mt-2">
                Betaflux Consulting Pvt Ltd
                <br />
                123, Some Road
                <br />
                Bangalore, KA 560001
                <br />
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
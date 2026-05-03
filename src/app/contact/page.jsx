"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";

    if (!form.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // simulate API call
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  if (sent) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-green-600">
            Message Sent 🎉
          </h2>
          <p className="text-gray-600 mt-2">
            Thanks for reaching out. We’ll get back to you soon.
          </p>

          <button
            onClick={() => setSent(false)}
            className="mt-4 text-green-700 underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-8">
        We usually reply within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Your Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Your Email
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-medium transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      alert("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    emailjs
      .send(
        "service_u9442hr",
        "template_9uupeu8",
        formData,
        "RoaxQCpfmM2XYcRao"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("error");
          alert("Oops! Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="contact-section" id = 'contact'>
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          rows={5}
          required
        />

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="success-msg">
            Message sent successfully! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="error-msg">
            There was an error sending your message. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;

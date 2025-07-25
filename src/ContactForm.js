import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"; // Step 2

export default function ContactForm() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_km3f3zn",     // Replace with your EmailJS service ID
        "template_5ll2h4m",    // Replace with your template ID
        formRef.current,
        "J7hefLTZ3T5dADMSZ"      // Replace with your EmailJS public key
      )
      .then(() => {
        setSent(true);
        formRef.current.reset();
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
      });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="contact-form">
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" rows="5" required />
      <button type="submit">Send Message</button>
      {sent && <p className="success-msg">Message sent successfully!</p>}
    </form>
  );
}

  import React, { useState } from "react";
  import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
  const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
      e.preventDefault(); // Stop standard form submission redirect

      // 1. Validation check
      if (
        !name.trim() ||
        !email.trim() ||
        !message.trim()
      ) {
        alert('Please fill all the required columns!!');
        return;
      }

      // 2. Prepare payload matching FormSubmit expected keys
    const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      // FormSubmit Settings
      formData.append("_captcha", "false");
      formData.append("_template", "table");
      formData.append("_subject", "Weather and news");

      try {
        const mail = import.meta.env.VITE_MAIL;
        const response = await fetch(
          mail,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
            },
            body: formData,
          }
        );
        if (response.ok) {
          alert('🚀 Thank you! Your message has launched!');
          // Reset states upon success
          setEmail("");
          setName("");
          setMessage("")
          }
        else {
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert('An error occurred while sending your message.');
      }
    };
    return (
      <div className="min-h-screen px-4 py-12 text-white">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Contact <span className="text-cyan-300">Us</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            Have feedback about the weather forecast or news experience?
            We would love to hear from you.
          </p>
        </div>

        {/* Main Contact Section */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold">Let's connect</h2>

            <p className="mt-3 leading-7 text-white/70">
              Your feedback helps us improve the way you experience daily
              weather updates and breaking news.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-400/20 p-3">
                  <Mail className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <p className="font-medium">📧 weathercheck@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-400/20 p-3">
                  <MessageCircle className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-sm text-white/50">Feedback</p>
                  <p className="font-medium">We value your suggestions</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-400/20 p-3">
                  <MapPin className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-sm text-white/50">Available</p>
                  <p className="font-medium">Worldwide Weather & News</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

            <h2 className="text-2xl font-bold">Send us a message</h2>

            <div className="mt-6 space-y-5">

              <input
                type="text"
                value={name}
                name="name"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-cyan-300"
                onChange={(e) => setName(e.target.value)} 
              />

              <input
                type="email"
                value={email}
                name="mail"
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Your Email"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-cyan-300"
              />

              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                placeholder="Your Message"
                className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-cyan-300"
              ></textarea>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-900 transition hover:scale-[1.02] hover:bg-cyan-300"
              >
                Send Message
                <Send size={18} />
              </button>

            </div>
          </form>

        </div>
      </div>
    );
  };

  export default Contact;
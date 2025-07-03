'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  });

  form.reset();
  setSubmitted(true);
};

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
     <video
  className="pointer-events-none absolute inset-0 w-full h-full object-cover object-center z-0"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/Vid.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<div className="absolute inset-0 z-0 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-20 flex items-center h-full px-6 md:px-16">
        <div className="text-white w-full max-w-lg md:text-left text-center mx-auto md:mx-0">
          <h2 className="text-lg tracking-wide mb-2 uppercase">Create Your Vision</h2>
          {/* <p className="text-lg mb-2">
            <a
              href="mailto:4pulenz@gmail.com"
              className="hover:text-red-400 transition-colors duration-200"
            >
              4pulenz@gmail.com
            </a>
          </p>
          <p className="text-md mb-6">
            <a
              href="tel:9142303744"
              className="hover:text-red-400 transition-colors duration-200"
            >
              (914) 230-3744
            </a>
          </p> */}
         

          {/* Success Message */}
          {submitted ? (
  <p className="text-green-300 font-medium text-lg mt-6">
    Message sent, thank you !
  </p>
) : (
  <form
    onSubmit={handleSubmit}
    action="https://formspree.io/f/mjkwwzna" // ← Replace with your actual Formspree ID
    method="POST"
    className="flex flex-col gap-6"
  >
    <input
      type="text"
      name="name"
      placeholder="Name"
      required
      maxLength={50}
      className="bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-red-500 py-2"
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      maxLength={100}
      className="bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-red-500 py-2"
    />
    <textarea
      name="message"
      placeholder="Message"
      required
      rows={4}
      className="bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-red-500 py-2"
    />
    <button
      type="submit"
      className="mt-4 border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-200"
    >
      Send Message
    </button>
  </form>
)}
        </div>
      </div>
    </div>
  );
}
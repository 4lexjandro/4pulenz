// 'use client';
// import { useState } from 'react';

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);

//  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const data = new FormData(form);

//   await fetch(form.action, {
//     method: form.method,
//     body: data,
//     headers: {
//       Accept: 'application/json',
//     },
//   });

//   form.reset();
//   setSubmitted(true);
// };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Video */}
//      <video
//   className="pointer-events-none absolute inset-0 w-full h-full object-cover object-center z-0"
//   autoPlay
//   loop
//   muted
//   playsInline
// >
//   <source src="/hero.mp4" type="video/mp4" />
//   Your browser does not support the video tag.
// </video>

// <div className="absolute inset-0 z-0 pointer-events-none" />

//       {/* Content Wrapper */}
//       <div className="relative z-20 flex items-center h-full px-6 md:px-16">
//         <div className="text-white w-full max-w-lg md:text-left text-center mx-auto md:mx-0">
//           <h2 className="text-lg tracking-wide mb-2 uppercase">Create Your Vision</h2>
//           {/* <p className="text-lg mb-2">
//             <a
//               href="mailto:4pulenz@gmail.com"
//               className="hover:text-red-400 transition-colors duration-200"
//             >
//               4pulenz@gmail.com
//             </a>
//           </p>
//           <p className="text-md mb-6">
//             <a
//               href="tel:9142303744"
//               className="hover:text-red-400 transition-colors duration-200"
//             >
//               (914) 230-3744
//             </a>
//           </p> */}
         

//           {/* Success Message */}
//           {submitted ? (
//   <p className="text-green-300 font-medium text-lg mt-6">
//     Message sent, thank you !
//   </p>
// ) : (
//   <form
//     onSubmit={handleSubmit}
//     action="https://formspree.io/f/mjkwwzna" // ← Replace with your actual Formspree ID
//     method="POST"
//     className="flex flex-col gap-6"
//   >
//     <input
//       type="text"
//       name="name"
//       placeholder="Name"
//       required
//       maxLength={50}
//       className="bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-red-500 py-2"
//     />
//     <input
//       type="email"
//       name="email"
//       placeholder="Email"
//       required
//       maxLength={100}
//       className="bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-red-500 py-2"
//     />
//     <textarea
//       name="message"
//       placeholder="Message"
//       required
//       rows={4}
//       className="bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-red-500 py-2"
//     />
//     <button
//       type="submit"
//       className="mt-4 border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-200"
//     >
//       Send Message
//     </button>
//   </form>
// )}
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import { useState } from 'react';

const gradientText =
  'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]';

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
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay so form is readable over video */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black/50" />

      {/* Ambient purple glow top */}
      <div
        className="pointer-events-none fixed top-[-20%] left-0 w-full h-[500px] z-10"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.25), transparent 70%)' }}
      />

      {/* Content Wrapper */}
      <div className="relative z-20 flex items-center h-full px-6 md:px-16">
        <div className="text-white w-full max-w-lg md:text-left text-center mx-auto md:mx-0">

          {/* Title */}
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-2">get in touch</p>
          <h2 className={`text-4xl font-bold mb-8 ${gradientText}`}>Create Your Vision</h2>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-red-500 opacity-60 mb-8 md:mx-0 mx-auto" />

          {/* Success Message */}
          {submitted ? (
            <div
              className="rounded-xl px-6 py-5"
              style={{
                background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(239,68,68,0.15))',
                border: '1px solid rgba(168,85,247,0.4)',
              }}
            >
              <p className={`font-semibold text-lg ${gradientText}`}>Message sent — thank you!</p>
              <p className="text-neutral-400 text-sm mt-1">I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/mjkwwzna"
              method="POST"
              className="flex flex-col gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                maxLength={50}
                className="bg-transparent border-b placeholder-neutral-400 text-white focus:outline-none py-2 transition-colors duration-300"
                style={{ borderColor: 'rgba(168,85,247,0.4)' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(168,85,247,1)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)')}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                maxLength={100}
                className="bg-transparent border-b placeholder-neutral-400 text-white focus:outline-none py-2 transition-colors duration-300"
                style={{ borderColor: 'rgba(168,85,247,0.4)' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(168,85,247,1)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)')}
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={4}
                className="bg-transparent border-b placeholder-neutral-400 text-white focus:outline-none py-2 transition-colors duration-300 resize-none"
                style={{ borderColor: 'rgba(168,85,247,0.4)' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(168,85,247,1)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)')}
              />

              <button
                type="submit"
                className="group mt-2 w-full rounded-xl px-6 py-4 transition-all duration-300 flex items-center justify-between overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(239,68,68,0.15))',
                  border: '1px solid rgba(168,85,247,0.4)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(168,85,247,0.8)';
                  (e.currentTarget as HTMLButtonElement).style.background =
                    'linear-gradient(135deg, rgba(168,85,247,0.25), rgba(239,68,68,0.25))';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(168,85,247,0.4)';
                  (e.currentTarget as HTMLButtonElement).style.background =
                    'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(239,68,68,0.15))';
                }}
              >
                <span className={`font-semibold text-sm ${gradientText}`}>Send Message</span>
                <svg
                  className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mapY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const mapScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);
  const formY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative py-20 pb-32" ref={ref}>
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap relative z-10">
        <motion.div 
          style={{ y: formY }}
          className="lg:w-2/3 md:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-2xl"
        >
          <motion.iframe
            style={{ y: mapY, scale: mapScale }}
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 grayscale contrast-125 opacity-40 mix-blend-overlay origin-center"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.426977333085!2d77.67998841521909!3d11.449075949546845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba942741e1a4fc3%3A0xde556a1d49ccc4ef!2sCMXJ%2BJV2%2C%20Varanapuram%2C%20Bhavani%2C%20Tamil%20Nadu%20638301!5e0!3m2!1sen!2sin!4v1654923594678!5m2!1sen!2sin"
          />
          <div className="bg-gray-900/80 backdrop-blur-lg border border-white/10 relative flex flex-wrap py-6 rounded-2xl shadow-xl w-full">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-300">
                43A, Palanipuram 3rd Street, <br />
                Bhavani - 638301
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className="text-green-400 leading-relaxed hover:text-green-300 transition-colors"
                href="mailto:lalithsaran99@gmail.com"
                id="myLink"
              >
                lalithsaran99@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-gray-300">+91-7904921994</p>
            </div>
          </div>
        </motion.div>
        
        <motion.form
          name="contact"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring" }}
          className="lg:w-1/3 md:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col md:ml-auto w-full mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-2 font-bold title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-6 text-gray-300">
            Enter your name and mail to keep in touch with me!
          </p>
          <div className="relative mb-5">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:border-green-400 focus:bg-white/10 focus:ring-2 focus:ring-green-400/50 text-base outline-none text-white py-2 px-4 shadow-sm transition-all duration-200 ease-in-out placeholder-gray-500"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-5">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:border-green-400 focus:bg-white/10 focus:ring-2 focus:ring-green-400/50 text-base outline-none text-white py-2 px-4 shadow-sm transition-all duration-200 ease-in-out placeholder-gray-500"
              placeholder="your.email@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-6">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:border-green-400 focus:bg-white/10 focus:ring-2 focus:ring-green-400/50 h-32 text-base outline-none text-white py-2 px-4 shadow-sm resize-none transition-all duration-200 ease-in-out placeholder-gray-500"
              placeholder="What do you want to talk about?"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-green-500/80 backdrop-blur-md border border-green-500 focus:outline-none hover:bg-green-500 rounded-xl text-lg py-3 px-6 shadow-lg hover:shadow-green-500/40 transform hover:-translate-y-0.5 transition-all w-full font-medium"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
};

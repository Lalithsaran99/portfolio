import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroGraphic } from "./HeroGraphic";

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const graphicY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <section id="about" className="flex items-center min-h-screen relative overflow-hidden" ref={ref}>
      {/* Abstract Background Graphic */}
      <motion.div 
        style={{ y: graphicY }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-tr from-green-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]) }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-[80px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center relative z-10">
        <motion.div 
          style={{ y: textY }}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-12 rounded-3xl shadow-2xl relative group">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-white tracking-tight relative z-10 leading-tight">
              Hi, I'm Lalith Saran.
              <br className="hidden lg:inline-block mt-2" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mt-2 block">
                I love to build amazing apps.
              </span>
            </h1>
            <p className="mb-8 leading-relaxed text-gray-300 text-lg relative z-10">
              I'm a full stack JavaScript developer focused on creating interactive, premium digital experiences utilizing the latest 3D web technologies.
            </p>
            <div className="flex justify-center md:justify-start relative z-10">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500/80 backdrop-blur-sm border border-green-400/50 py-3 px-8 focus:outline-none hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/40 rounded-full text-lg transition-all hover:-translate-y-1"
              >
                Work With Me
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          style={{ y: imageY }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative z-10 border border-white/10 bg-white/5 shadow-2xl rounded-3xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
              <HeroGraphic />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

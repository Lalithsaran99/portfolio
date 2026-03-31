import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const graphicY1 = useTransform(scrollYProgress, [0, 1], ["60%", "-60%"]);
  const graphicY2 = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Decorative Graphics */}
      <motion.div style={{ y: graphicY1 }} className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <motion.div style={{ y: graphicY2 }} className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-5 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <ChipIcon className="w-12 inline-block mb-4 text-green-400" />
          <h1 className="sm:text-5xl text-4xl font-bold title-font text-white mb-4 tracking-tight">
            Skills &amp; Technologies
          </h1>
          <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
            Skills Which I have Trained
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
        >
          {skills.map((skill, index) => (
            <motion.div variants={itemVariants} key={skill} className={`p-2 sm:w-1/2 w-full flex ${index % 2 === 0 ? "justify-start" : "justify-end sm:justify-start"}`}>
              <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex p-6 h-full items-center shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl hover:bg-white/10 group cursor-default">
                <BadgeCheckIcon className="text-green-400 w-8 h-8 flex-shrink-0 mr-4 group-hover:scale-110 group-hover:text-blue-400 transition-all" />
                <span className="title-font font-medium text-white text-lg group-hover:text-green-400 transition-colors">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

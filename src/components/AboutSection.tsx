import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-32 relative overflow-hidden">
      {/* Large background text */}
      <motion.span
        className="absolute -right-10 top-1/2 -translate-y-1/2 font-display text-[12rem] md:text-[18rem] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none"
        style={{ y }}
      >
        ABOUT
      </motion.span>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-5xl relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body"
        >
          About
        </motion.p>

        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-xl md:text-2xl font-light leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Currently based in Berlin.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted-foreground font-body leading-relaxed text-sm"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </motion.p>

          {/* Animated skill tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-2 pt-4"
          >
            {["Figma", "Prototyping", "Design Systems", "User Research", "Motion"].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.05, borderColor: "hsl(16, 85%, 60%)" }}
                className="px-4 py-1.5 border border-border rounded-full text-xs font-body text-muted-foreground transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage, t } from "@/contexts/LanguageContext";

const skills = ["Figma", "Prototyping", "Design Systems", "User Research", "Motion"];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textReveal = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);
  const rotateCard = useTransform(scrollYProgress, [0.1, 0.5], [4, 0]);

  const { lang } = useLanguage();

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-32 relative overflow-hidden">
      {/* Large background text */}
      <motion.span
        className="absolute -right-10 top-1/2 -translate-y-1/2 font-display text-[12rem] md:text-[18rem] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none"
        style={{ y }}
      >
        {t(lang, "about.bg")}
      </motion.span>

      <motion.div
        style={{ rotateX: rotateCard }}
        className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-5xl relative"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body"
        >
          {t(lang, "about.heading")}
        </motion.p>

        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-xl md:text-2xl font-light leading-relaxed"
          >
            {t(lang, "about.intro")}
          </motion.p>

          {/* Reveal line */}
          <motion.div className="h-[1px] bg-primary/20" style={{ width: textReveal }} />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted-foreground font-body leading-relaxed text-sm"
          >
            {t(lang, "about.body")}
          </motion.p>

          {/* Animated skill tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-2 pt-4"
          >
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.08, borderColor: "hsl(16, 85%, 60%)", y: -2 }}
                className="px-4 py-1.5 border border-border rounded-full text-xs font-body text-muted-foreground transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

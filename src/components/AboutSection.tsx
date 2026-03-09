import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-32">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body"
        >
          About
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-6"
        >
          <p className="font-display text-xl md:text-2xl font-light leading-relaxed">
            I design interfaces that feel intuitive and look unforgettable. Currently based in Berlin.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-sm">
            5+ years shaping products for startups and agencies. I believe great design is invisible — it just works.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, delay: 0.3 + i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
};

const AnimatedWord = ({ text, startIndex }: { text: string; startIndex: number }) => (
  <span className="inline-block overflow-hidden" style={{ perspective: "600px" }}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={startIndex + i}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ transformOrigin: "bottom" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Animated glow */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/6 w-64 h-64 rounded-full bg-primary/5 blur-[100px] pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ y: yText, opacity }}>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-8"
        >
          <motion.span
            className="inline-block w-8 h-[1px] bg-primary mr-4 align-middle"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ transformOrigin: "left" }}
          />
          UX / UI Designer
        </motion.p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight max-w-4xl">
          <AnimatedWord text="Crafting digital" startIndex={0} />
          <br />
          <span className="text-gradient-accent font-medium">
            <AnimatedWord text="experiences" startIndex={16} />
          </span>
          <br />
          <AnimatedWord text="that matter." startIndex={27} />
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-16 flex items-center gap-3 text-muted-foreground"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDownRight className="w-4 h-4" />
          </motion.div>
          <span className="text-sm font-body tracking-wide">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

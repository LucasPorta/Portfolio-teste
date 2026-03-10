import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { useLanguage, t } from "@/contexts/LanguageContext";

const letterVariants = {
  hidden: { opacity: 0, y: 100, rotateX: -90, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: 0.3 + i * 0.035, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const AnimatedWord = ({ text, startIndex }: { text: string; startIndex: number }) => (
  <span className="inline-block overflow-hidden" style={{ perspective: "800px" }}>
    <AnimatePresence mode="wait">
      {text.split("").map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          custom={startIndex + i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </AnimatePresence>
  </span>
);

const FloatingOrb = ({ className, delay, duration }: { className: string; delay: number; duration: number }) => (
  <motion.div
    className={className}
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.6, 0.3],
      x: [0, 30, -20, 0],
      y: [0, -20, 15, 0],
    }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  const { lang } = useLanguage();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.02);
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.02);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Animated orbs */}
      <FloatingOrb
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[120px] pointer-events-none"
        delay={0}
        duration={6}
      />
      <FloatingOrb
        className="absolute bottom-1/3 left-[15%] w-64 h-64 rounded-full bg-primary/5 blur-[100px] pointer-events-none"
        delay={2}
        duration={8}
      />
      <FloatingOrb
        className="absolute top-[60%] right-[10%] w-48 h-48 rounded-full bg-accent/4 blur-[80px] pointer-events-none"
        delay={4}
        duration={10}
      />

      {/* Grid lines background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0.03, 0]) }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 bottom-0 w-[1px] bg-foreground/10"
            style={{ left: `${(i + 1) * 16.666}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.8 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </motion.div>

      <motion.div
        style={{
          y: yText,
          opacity,
          scale,
          filter: useTransform(blur, (v) => `blur(${v}px)`),
          x: springX,
        }}
      >
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-8"
        >
          <motion.span
            className="inline-block w-12 h-[1px] bg-primary mr-4 align-middle"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ transformOrigin: "left" }}
          />
          {t(lang, "hero.subtitle")}
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.h1
            key={lang}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight max-w-4xl"
          >
            <AnimatedWord text={t(lang, "hero.line1")} startIndex={0} />
            <br />
            <span className="text-gradient-accent font-medium">
              <AnimatedWord text={t(lang, "hero.line2")} startIndex={16} />
            </span>
            <br />
            <AnimatedWord text={t(lang, "hero.line3")} startIndex={27} />
          </motion.h1>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-16 flex items-center gap-3 text-muted-foreground"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDownRight className="w-4 h-4" />
          </motion.div>
          <motion.span
            className="text-sm font-body tracking-wide"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {t(lang, "hero.scroll")}
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Horizontal scroll-driven line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-primary/60 to-transparent"
        style={{ width: useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]) }}
      />
    </section>
  );
};

export default HeroSection;

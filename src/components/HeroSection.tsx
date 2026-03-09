import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-8"
      >
        UX / UI Designer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight max-w-4xl"
      >
        Crafting digital
        <br />
        <span className="text-gradient-accent font-medium">experiences</span>
        <br />
        that matter.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 flex items-center gap-3 text-muted-foreground"
      >
        <ArrowDownRight className="w-4 h-4" />
        <span className="text-sm font-body tracking-wide">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;

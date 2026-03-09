import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.8]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 py-6"
    >
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        style={{ opacity: bgOpacity }}
      />
      <span className="font-display text-sm font-medium tracking-wide relative z-10">Portfolio</span>
      <motion.a
        href="mailto:hello@designer.com"
        className="font-body text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors relative z-10"
        whileHover={{ scale: 1.05 }}
      >
        Contact
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;

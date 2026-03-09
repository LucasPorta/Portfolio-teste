import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 py-6 mix-blend-difference"
    >
      <span className="font-display text-sm font-medium tracking-wide">Portfolio</span>
      <a
        href="mailto:hello@designer.com"
        className="font-body text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors"
      >
        Contact
      </a>
    </motion.nav>
  );
};

export default Navbar;

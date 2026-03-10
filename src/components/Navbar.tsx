import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useLanguage, t } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.8]);
  const { lang, toggleLang } = useLanguage();

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
      <span className="font-display text-sm font-medium tracking-wide relative z-10">
        {t(lang, "nav.title")}
      </span>
      <div className="flex items-center gap-6 relative z-10">
        {/* Language toggle */}
        <motion.button
          onClick={toggleLang}
          className="flex items-center gap-1 text-xs font-body tracking-[0.15em] uppercase border border-border rounded-full px-3 py-1.5 hover:border-primary/50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={lang}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className={lang === "pt" ? "text-primary" : "text-muted-foreground"}
            >
              PT
            </motion.span>
          </AnimatePresence>
          <span className="text-muted-foreground/40">/</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={lang}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className={lang === "en" ? "text-primary" : "text-muted-foreground"}
            >
              EN
            </motion.span>
          </AnimatePresence>
        </motion.button>

        <motion.a
          href="mailto:hello@designer.com"
          className="font-body text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          {t(lang, "nav.contact")}
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

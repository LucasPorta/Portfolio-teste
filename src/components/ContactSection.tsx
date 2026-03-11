import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useLanguage, t } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const emailY = useTransform(scrollYProgress, [0.2, 0.6], [40, 0]);
  const emailOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  const { lang } = useLanguage();

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-32 pb-16">
      <motion.div style={{ scale }} className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-4"
        >
          {t(lang, "contact.heading")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground font-body text-sm leading-relaxed mb-12 max-w-lg"
        >
          {t(lang, "contact.body")}
        </motion.p>

        <motion.a
          href="mailto:hello@designer.com"
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light group inline-flex items-center gap-4 hover:text-primary transition-colors duration-300"
          style={{ y: emailY, opacity: emailOpacity }}
          whileHover={{ x: 8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          contato@lucasporta.com
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
          >
            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.span>
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-32 flex items-center justify-between text-xs text-muted-foreground font-body"
      >
        <span>{t(lang, "contact.copyright")}</span>
        <div className="flex gap-8">
          {["LinkedIn"].map((link, i) => (
            <motion.a
              key={link}
              href="#"
              className="hover:text-foreground transition-colors relative"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

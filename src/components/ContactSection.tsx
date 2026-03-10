import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
          Get in touch
        </p>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-12 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <motion.a
          href="mailto:hello@designer.com"
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light group inline-flex items-center gap-4 hover:text-primary transition-colors duration-300"
          whileHover={{ x: 8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          hello@designer.com
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
        <span>© 2025</span>
        <div className="flex gap-8">
          {["Dribbble", "LinkedIn", "Twitter"].map((link, i) => (
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

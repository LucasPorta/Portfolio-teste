import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-12">
          Get in touch
        </p>
        <a
          href="mailto:hello@designer.com"
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light group inline-flex items-center gap-4 hover:text-primary transition-colors duration-300"
        >
          hello@designer.com
          <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </motion.div>

      <div className="mt-32 flex items-center justify-between text-xs text-muted-foreground font-body">
        <span>© 2025</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-foreground transition-colors">Dribbble</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

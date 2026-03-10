import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useRef, useState } from "react";
import { useLanguage, t } from "@/contexts/LanguageContext";

const projectKeys = [1, 2, 3, 4];
const projectTools = [
  ["Figma", "Protopie", "After Effects"],
  ["Figma", "Framer", "Notion"],
  ["Sketch", "Principle", "Miro"],
  ["Illustrator", "Figma", "Photoshop"],
];
const projectYears = ["2025", "2024", "2024", "2023"];

const ProjectRow = ({ projectIndex, index }: { projectIndex: number; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();
  const k = projectIndex;
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: rowRef, offset: ["start end", "start 0.7"] });
  const x = useTransform(scrollYProgress, [0, 1], [-60, 0]);
  const rowOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={rowRef}
      style={{ x, opacity: rowOpacity }}
      className="border-t border-border"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group py-8 md:py-10 flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-baseline gap-4 md:gap-8">
          <span className="text-muted-foreground text-xs font-body tabular-nums">0{index + 1}</span>
          <motion.h3
            className="font-display text-2xl md:text-4xl lg:text-5xl font-light group-hover:text-primary transition-colors duration-300"
            whileHover={{ x: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {t(lang, `project.${k}.title`)}
          </motion.h3>
        </div>
        <div className="flex items-center gap-6 md:gap-12">
          <span className="text-muted-foreground text-sm font-body hidden md:block">{t(lang, `project.${k}.category`)}</span>
          <span className="text-muted-foreground text-sm font-body">{projectYears[index]}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors"
          >
            {isOpen ? (
              <Minus className="w-3.5 h-3.5 text-primary" />
            ) : (
              <Plus className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
            )}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-8 md:pl-20 pr-4 md:pr-16">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="md:col-span-2"
                >
                  <p className="text-foreground/80 font-body text-sm leading-relaxed">
                    {t(lang, `project.${k}.details`)}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-2">{t(lang, "projects.role")}</p>
                    <p className="text-sm font-body text-foreground/80">{t(lang, `project.${k}.role`)}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-2">{t(lang, "projects.tools")}</p>
                    <div className="flex flex-wrap gap-2">
                      {projectTools[index].map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 border border-border rounded-full text-xs font-body text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-sm font-body text-primary hover:text-primary/80 transition-colors"
                  >
                    {t(lang, "projects.view")} <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.4"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const { lang } = useLanguage();

  // Parallax counter
  const counterY = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-32 relative">
      {/* Background counter */}
      <motion.span
        className="absolute right-6 md:right-24 top-24 font-display text-[8rem] md:text-[14rem] font-bold text-foreground/[0.015] select-none pointer-events-none leading-none"
        style={{ y: counterY }}
      >
        04
      </motion.span>

      <div className="flex items-center gap-6 mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body whitespace-nowrap"
        >
          {t(lang, "projects.heading")}
        </motion.p>
        <motion.div className="h-[1px] bg-primary/30" style={{ width: lineWidth }} />
      </div>

      <div className="space-y-0">
        {projectKeys.map((k, i) => (
          <ProjectRow key={k} projectIndex={k} index={i} />
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default ProjectsSection;

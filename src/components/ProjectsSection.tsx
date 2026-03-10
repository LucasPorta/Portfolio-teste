import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Finova",
    category: "Mobile App",
    year: "2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    role: "Lead Designer",
    tools: ["Figma", "Protopie", "After Effects"],
  },
  {
    title: "Arclight",
    category: "Web Platform",
    year: "2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    role: "UX/UI Designer",
    tools: ["Figma", "Framer", "Notion"],
  },
  {
    title: "Pulse Health",
    category: "Dashboard",
    year: "2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit.",
    details: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    role: "Product Designer",
    tools: ["Sketch", "Principle", "Miro"],
  },
  {
    title: "Nomad",
    category: "Brand Identity",
    year: "2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    details: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    role: "Brand Designer",
    tools: ["Illustrator", "Figma", "Photoshop"],
  },
];

const ProjectRow = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
      className="border-t border-border"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group py-8 md:py-10 flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-baseline gap-4 md:gap-8">
          <span className="text-muted-foreground text-xs font-body tabular-nums">0{index + 1}</span>
          <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-light group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-6 md:gap-12">
          <span className="text-muted-foreground text-sm font-body hidden md:block">{project.category}</span>
          <span className="text-muted-foreground text-sm font-body">{project.year}</span>
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
                    {project.details}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-2">Role</p>
                    <p className="text-sm font-body text-foreground/80">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-2">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
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
                    View project <ArrowUpRight className="w-3.5 h-3.5" />
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

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-32">
      <div className="flex items-center gap-6 mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body whitespace-nowrap"
        >
          Selected Work
        </motion.p>
        <motion.div className="h-[1px] bg-primary/30" style={{ width: lineWidth }} />
      </div>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default ProjectsSection;

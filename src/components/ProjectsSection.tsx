import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  { title: "Finova", category: "Mobile App", year: "2025", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Arclight", category: "Web Platform", year: "2024", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
  { title: "Pulse Health", category: "Dashboard", year: "2024", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit." },
  { title: "Nomad", category: "Brand Identity", year: "2023", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa." },
];

const ProjectRow = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 12 }}
      className="group border-t border-border py-8 md:py-10 flex items-center justify-between cursor-pointer"
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
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="hidden group-hover:block"
        >
          <ArrowUpRight className="w-5 h-5 text-primary" />
        </motion.div>
      </div>
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

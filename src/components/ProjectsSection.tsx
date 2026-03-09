import { motion } from "framer-motion";

const projects = [
  { title: "Finova", category: "Mobile App", year: "2025" },
  { title: "Arclight", category: "Web Platform", year: "2024" },
  { title: "Pulse Health", category: "Dashboard", year: "2024" },
  { title: "Nomad", category: "Brand Identity", year: "2023" },
];

const ProjectsSection = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-16 font-body"
      >
        Selected Work
      </motion.p>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group border-t border-border py-8 md:py-10 flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-baseline gap-4 md:gap-8">
              <span className="text-muted-foreground text-xs font-body tabular-nums">0{i + 1}</span>
              <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-light group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-6 md:gap-12">
              <span className="text-muted-foreground text-sm font-body hidden md:block">{project.category}</span>
              <span className="text-muted-foreground text-sm font-body">{project.year}</span>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default ProjectsSection;

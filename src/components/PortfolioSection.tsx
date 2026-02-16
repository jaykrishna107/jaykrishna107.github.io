import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import sectionBg from "@/assets/section-bg.jpg";
import portfolioFurniture from "@/assets/portfolio-furniture.jpg";
import portfolioSchool from "@/assets/portfolio-school.jpg";
import portfolioFood from "@/assets/portfolio-food.jpg";

const projects = [
  {
    title: "Anu Furnitures",
    description: "Premium furniture e-commerce platform with seamless shopping experience and location-based inventory management.",
    url: "https://anufurnitures.com/?wc_msl_location=1",
    category: "E-Commerce",
    image: portfolioFurniture,
  },
  {
    title: "Castletown School",
    description: "Modern educational institution website with comprehensive information architecture and engaging student experience.",
    url: "https://castletownschool.com/",
    category: "Education",
    image: portfolioSchool,
  },
  {
    title: "Tasty Train",
    description: "Vibrant food delivery and restaurant platform featuring an appetizing menu showcase and easy online ordering.",
    url: "https://tastytrain.in/",
    category: "Food & Delivery",
    image: portfolioFood,
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${sectionBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent work. We've helped businesses across various 
            industries establish their digital presence and automate their operations.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Project preview with thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm text-primary border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Visit Website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

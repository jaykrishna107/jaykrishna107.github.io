import { motion } from "framer-motion";
import { Globe, Bot, MessageSquare, Phone, Sparkles, Workflow } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "High-Converting Websites",
    description: "Modern, fast-loading websites designed to convert visitors into customers. Mobile-responsive and SEO-optimized.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent chatbots that answer questions, qualify leads, and book appointments automatically.",
  },
  {
    icon: Phone,
    title: "AI Voice Bots",
    description: "Natural-sounding voice assistants that handle phone inquiries and customer support calls 24/7.",
  },
  {
    icon: MessageSquare,
    title: "Lead Capture Systems",
    description: "Automated lead capture and qualification systems that never miss an opportunity.",
  },
  {
    icon: Workflow,
    title: "Booking Automation",
    description: "Seamless scheduling systems that let customers book appointments without back-and-forth.",
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    description: "Tailored automation solutions designed specifically for your business needs and workflows.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Automate & Grow</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From stunning websites to intelligent AI assistants, we provide end-to-end solutions 
            that transform how your business interacts with customers.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

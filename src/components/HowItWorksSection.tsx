import { motion } from "framer-motion";
import { MessageCircle, Cog, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Discovery Call",
    description: "We learn about your business, goals, and current challenges to understand exactly what you need.",
  },
  {
    icon: Cog,
    step: "02",
    title: "Custom Build",
    description: "Our team designs and develops your AI-powered solutions tailored to your specific requirements.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch & Scale",
    description: "We deploy your automation systems and provide ongoing support as your business grows.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Simple Process,{" "}
            <span className="gradient-text">Powerful Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting started with AI automation is easier than you think. 
            Here's how we transform your business in three simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto relative z-10 glass-card">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 text-xs font-bold text-primary bg-background px-2 py-1 rounded-full border border-primary/50">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

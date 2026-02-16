import { motion } from "framer-motion";
import { Clock, DollarSign, Zap, TrendingUp, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a customer inquiry. Your AI assistant works around the clock, even on holidays.",
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description: "Cut operational costs by up to 90% compared to hiring full-time staff for customer support.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Respond to customer inquiries in seconds, not hours. Faster responses mean happier customers.",
  },
  {
    icon: TrendingUp,
    title: "Increase Leads",
    description: "Capture 3x more leads with intelligent qualification and automatic follow-ups.",
  },
  {
    icon: Shield,
    title: "Consistent Quality",
    description: "Deliver the same high-quality experience every time with AI that never has a bad day.",
  },
  {
    icon: Users,
    title: "Scale Effortlessly",
    description: "Handle unlimited conversations simultaneously as your business grows.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Benefits That{" "}
              <span className="gradient-text">Transform Business</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              AI automation isn't just about technology — it's about giving your business 
              a competitive edge while delivering exceptional customer experiences.
            </p>

            {/* Feature highlight */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real Results, Real Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    Our clients see an average 40% increase in lead conversion within the first 3 months.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card p-5 rounded-xl group hover:border-primary/50 transition-all duration-300"
              >
                <benefit.icon className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-semibold mb-1">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

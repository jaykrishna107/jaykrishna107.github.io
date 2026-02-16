import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Mission</h4>
                    <p className="text-sm text-muted-foreground">Empower businesses with AI</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Vision</h4>
                    <p className="text-sm text-muted-foreground">AI-first customer experience</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Promise</h4>
                    <p className="text-sm text-muted-foreground">Results-driven solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              We're Building the Future of{" "}
              <span className="gradient-text">Business Automation</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              At knoxAiautomation, we believe every business deserves access to cutting-edge AI technology. 
              We specialize in creating intelligent automation solutions that help small to mid-size 
              businesses compete with industry giants.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team combines deep expertise in AI, web development, and business strategy to deliver 
              solutions that don't just work — they transform how you operate and grow.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "50+", label: "Clients Served" },
                { value: "99%", label: "Satisfaction Rate" },
                { value: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

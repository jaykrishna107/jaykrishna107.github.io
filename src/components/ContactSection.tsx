import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Get Started</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Ready to{" "}
                <span className="gradient-text">Automate Your Business?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Book a free demo call to see how AI automation can transform your customer 
                interactions and grow your business on autopilot.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="hero" className="group" asChild>
                  <Link to="/book-demo">
                    Book a Free Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              <Button variant="heroOutline" asChild>
                  <a href="mailto:knoxaiautomation@gmail.com?subject=Inquiry%20from%20Website">Get in Touch</a>
                </Button>
              </div>

              {/* Contact info */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <a href="mailto:knoxaiautomation@gmail.com" className="flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm">knoxaiautomation@gmail.com</span>
                </a>
                <a href="tel:+919966191105" className="flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm">+91 9966191105</span>
                </a>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Remote-First</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

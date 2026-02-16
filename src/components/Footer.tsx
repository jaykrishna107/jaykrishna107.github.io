import { Bot, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "AI Chatbots", href: "#services" },
    { name: "Voice Bots", href: "#services" },
    { name: "Lead Capture", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">
                knox<span className="gradient-text">Ai</span>automation
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering businesses with intelligent AI automation solutions.
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:knoxaiautomation@gmail.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                knoxaiautomation@gmail.com
              </a>
              <a 
                href="tel:+919966191105" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 9966191105
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/book-demo"
                  className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} knoxAiautomation. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with AI • Powered by Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

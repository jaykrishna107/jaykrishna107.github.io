import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Solutions",
    feedback: "KnoxAI transformed our customer service. The AI receptionist handles 80% of inquiries automatically, saving us countless hours and improving response times dramatically.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    company: "GrowthHub Agency",
    feedback: "The website they built for us increased our conversion rate by 45%. Their AI chatbot captures leads even when we're asleep. Absolutely game-changing!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Wellness Studio Pro",
    feedback: "From booking appointments to answering FAQs, the AI handles it all. Our clients love the instant responses, and we've seen a 3x increase in bookings.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Marketing Director",
    company: "E-Commerce Plus",
    feedback: "Professional, innovative, and results-driven. The team at KnoxAI delivered beyond our expectations. Our customer engagement has never been better.",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    role: "Owner",
    company: "Real Estate Elite",
    feedback: "The AI voice bot handles property inquiries 24/7. We've captured leads we would have missed otherwise. ROI was visible within the first month.",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "COO",
    company: "FinServe Partners",
    feedback: "Implementing their AI solutions reduced our customer support costs by 60% while improving satisfaction scores. Highly recommend their services.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from businesses that have transformed 
            their operations with our AI automation solutions.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 relative group hover:border-primary/50 transition-colors"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.feedback}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
  name: "Dr. Brahmaramba",
  role: "Managing Director",
  company: "Springfield International School",
  feedback: "Implementing KnoxAI completely streamlined our admission and inquiry process. Parents now receive instant responses regarding admissions, fee structure, and schedules. It has significantly reduced the workload on our front desk staff while improving parent satisfaction.",
  rating: 5,
},
{
  name: "AVINASH REDDY CHEJARLA",
  role: "CEO",
  company: "Anu Furniture",
  feedback: "KnoxAI helped us automate customer inquiries and product queries 24/7. Our website now captures leads even after business hours, and we've noticed a clear increase in showroom visits and serious buyers. The automation has made our sales process much more efficient.",
  rating: 5,
},
{
  name: "Anvith Vedanabatla",
  role: "Owner",
  company: "Spice Garden Restaurant",
  feedback: "The AI system handles table reservations and common customer questions smoothly. We've reduced missed calls and improved response time significantly. While we're still exploring more features, the results so far have been very promising.",
  rating: 4,
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

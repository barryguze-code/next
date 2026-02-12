import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to <span className="text-gradient">Scale?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Book a free strategy call. We'll audit your account, show you the gaps, and map out a 90-day plan—no strings attached.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:hello@nextaicommerce.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass-card text-foreground font-semibold text-base hover:bg-secondary transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-sm text-muted-foreground mb-1">For recovery services</p>
            <p className="font-display text-lg font-bold text-foreground">
              Zero-Risk Pricing
            </p>
            <p className="text-sm text-muted-foreground">
              No recovery = No fee. You only pay when we put money back in your pocket.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

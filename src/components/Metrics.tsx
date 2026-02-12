import { motion } from "framer-motion";
import { TrendingUp, ShoppingCart, BarChart3, Package, DollarSign, Target } from "lucide-react";

const metrics = [
  { icon: TrendingUp, label: "Buy Box Win Rate", value: "94%", sub: "avg across clients" },
  { icon: ShoppingCart, label: "Conversion Rate Lift", value: "+38%", sub: "within 90 days" },
  { icon: BarChart3, label: "TACOS Reduction", value: "-27%", sub: "avg improvement" },
  { icon: Package, label: "In-Stock Rate", value: "99.2%", sub: "maintained avg" },
  { icon: DollarSign, label: "Cash Recovered", value: "$2.1M+", sub: "total reimbursements" },
  { icon: Target, label: "NTB Revenue", value: "+52%", sub: "new-to-brand growth" },
];

const Metrics = () => {
  return (
    <section id="metrics" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Results That <span className="text-gradient">Speak</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real metrics from real Amazon brands we've scaled.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 text-center group hover:glow-border transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <m.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-1">{m.value}</p>
              <p className="text-sm font-medium text-foreground mb-1">{m.label}</p>
              <p className="text-xs text-muted-foreground">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;

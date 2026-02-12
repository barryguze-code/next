import { motion } from "framer-motion";
import { Search, Wrench, Rocket, BarChart2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    phase: "Phase 1",
    title: "Deep Audit",
    desc: "We dissect your catalog, ads, financials, and FBA records to find every leak and opportunity.",
    timeline: "Days 1–30",
  },
  {
    icon: Wrench,
    phase: "Phase 2",
    title: "Rebuild & Harvest",
    desc: "Rewrite listings, restructure campaigns, file reimbursements, and fix inventory planning.",
    timeline: "Days 31–60",
  },
  {
    icon: Rocket,
    phase: "Phase 3",
    title: "Scale & Optimize",
    desc: "Expand winners, tune bids toward target TACOS, and automate replenishment workflows.",
    timeline: "Days 61–90",
  },
  {
    icon: BarChart2,
    phase: "Ongoing",
    title: "Govern & Report",
    desc: "Weekly scorecards, monthly ops reviews with actions, owners, and dates. Continuous improvement.",
    timeline: "Month 4+",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven 30/60/90 framework that delivers measurable results from day one.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`lg:flex items-center gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div
                    className={`glass-card rounded-2xl p-8 inline-block max-w-md ${
                      i % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {step.phase}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{step.desc}</p>
                    <span className="text-xs font-medium text-primary">{step.timeline}</span>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex w-4 h-4 rounded-full bg-primary shrink-0 relative z-10 shadow-[0_0_12px_hsl(145_65%_52%/0.4)]" />

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

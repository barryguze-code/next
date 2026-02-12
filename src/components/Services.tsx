import { motion } from "framer-motion";
import { ShieldCheck, Megaphone, DollarSign, Truck, ChevronRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: ShieldCheck,
    title: "Amazon Account Management",
    tagline: "Be the brand customers actually find—and buy from.",
    bullets: [
      "Catalog Hygiene & Compliance",
      "Buy Box & Pricing Ops",
      "Listing Quality & Conversion",
      "Inventory & FBA Admin",
      "CX & Reviews Management",
      "Weekly Scorecard & Governance",
    ],
    kpis: "Buy Box %, Sessions, CVR, ODR, In-Stock %, TACOS",
  },
  {
    icon: Megaphone,
    title: "Advertising + SEO",
    tagline: "Turn search intent into profitable orders.",
    bullets: [
      "SEO Foundation & Keyword Map",
      "SP/SB/SD Campaign System",
      "Creative That Converts",
      "Budget & Bid Automation",
      "TACOS/ROAS Measurement",
      "30/60/90 Launch Framework",
    ],
    kpis: "TACOS, ROAS, CVR/CTR, CPC Trends, NTB Revenue",
  },
  {
    icon: DollarSign,
    title: "Recovery & Reimbursement",
    tagline: "Get your money back—safely and by the book.",
    bullets: [
      "FBA Lost/Damaged Audits",
      "Evidence-First Case Filing",
      "3PL/Parcel Invoice Audits",
      "Zero-Risk Pricing Model",
      "6–18 Month Lookback Periods",
      "SKU-Level Proof & Tracking",
    ],
    kpis: "No recovery = No fee. Typical 2-5% of revenue recovered.",
  },
  {
    icon: Truck,
    title: "Logistics & Forecasting",
    tagline: "Right inventory, right place, right time.",
    bullets: [
      "Demand Forecasting Models",
      "Min/Max & ROP Engine",
      "FBA Inbound Planning",
      "Cartonization & Pallet Plans",
      "Exception & Expedite Handling",
      "Forecast Error Learning Loops",
    ],
    kpis: "MAPE, In-Stock %, DOH, Turns, Excess/Aged %",
  },
];

const Services = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="text-gradient">Deliver</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Four integrated pillars that cover every lever of Amazon profitability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => {
            const isOpen = active === i;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActive(isOpen ? null : i)}
                className={`glass-card rounded-2xl p-8 cursor-pointer transition-all duration-300 group ${
                  isOpen ? "glow-border" : "hover:glow-border"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </div>

                <h3 className="font-display text-xl font-bold mb-2">{svc.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{svc.tagline}</p>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 mb-4">
                      {svc.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-secondary-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-primary">KPIs:</span> {svc.kpis}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

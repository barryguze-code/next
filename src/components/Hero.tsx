import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Human Expertise + AI Automation
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Scale Faster on{" "}
            <span className="text-gradient">Amazon</span>
            <br />
            with Precision
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            We optimize listings, profits, ads, and inventory while recovering
            cash you're owed. Veteran operator playbooks meet intelligent
            automation to lift your contribution margin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass-card text-foreground font-semibold text-base hover:bg-secondary transition-colors"
            >
              Explore Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

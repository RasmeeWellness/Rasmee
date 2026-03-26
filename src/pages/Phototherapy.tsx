import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import butterflyLogo from "@/assets/butterfly-logo.png";
import FooterSection from "@/components/FooterSection";

const Phototherapy = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-32 bg-background flex items-center justify-center min-h-[80vh]">
        <div className="section-container text-center">
          <motion.img
            src={butterflyLogo}
            alt="Rasmee Wellness"
            className="w-24 h-24 mx-auto mb-10 object-contain animate-float"
            loading="lazy"
            width={96}
            height={96}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6"
          >
            Phototherapy.
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4 }}
            className="glow-line w-20 mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed"
          >
            Sign up and get more information about phototherapy patches by clicking the link below.
          </motion.p>

          <motion.a
            href="https://www.lifewave.com/GeorgiaRasmee"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-body font-semibold text-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Learn more
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Phototherapy;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Sun, Sparkles, Map } from "lucide-react";

const offerings = [
  { icon: Heart, title: "Yoga", desc: "Hatha classes for everyone", link: "/services" },
  { icon: Sun, title: "Bodywork & Healing", desc: "IHYT, Shamanic healing, Reiki", link: "/services" },
  { icon: Sparkles, title: "Tarot Guidance", desc: "Intuitive readings for clarity", link: "/services" },
  { icon: Map, title: "Retreats", desc: "Costa Rica transformative travel", link: "/retreat" },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            Offerings
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Holistic Healing for{" "}
            <span className="text-gradient-glow">Mind, Body & Spirit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map(({ icon: Icon, title, desc, link }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={link}
                className="group block p-8 rounded-2xl bg-muted border border-border hover:border-primary/40 transition-all duration-300 text-center h-full"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
                <p className="font-body text-sm text-muted-foreground">{desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

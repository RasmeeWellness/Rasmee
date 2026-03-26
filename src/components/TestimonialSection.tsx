import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="w-10 h-10 text-primary/40 mx-auto mb-6" />
          <blockquote className="font-display text-xl md:text-2xl text-foreground leading-relaxed italic mb-6">
            "My experience with Georgia and her massage was exceptional. She blends therapeutic massage, 
            stretching and mindful breathwork in a way that feels both relaxing and transformative. She 
            listened to my concerns, focused thoughtfully on areas of tension, and created a calming, 
            healing space. I left feeling balanced, open, and pain-free. I highly recommend her to anyone 
            looking for deep, holistic healing."
          </blockquote>
          <p className="font-body text-sm text-muted-foreground">— Ann Forrest-Rieben</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;

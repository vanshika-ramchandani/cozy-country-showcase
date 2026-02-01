import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-primary" ref={ref}>
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-medium mb-6 leading-tight">
            Create a Home That
            <span className="block italic">Tells a Story</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Visit our store in Shrewsbury, PA and discover pieces that transform 
            your space into a warm, welcoming haven.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-cream text-primary px-8 py-4 font-body font-medium text-sm uppercase tracking-wider hover:bg-warm-beige transition-colors duration-300 rounded-sm shadow-elevated"
          >
            Visit Our Store
          </a>
          <p className="mt-8 font-body text-sm text-primary-foreground/60">
            Open Monday – Saturday, 10am – 6pm
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

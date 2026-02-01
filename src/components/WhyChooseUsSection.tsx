import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, HandMetal, Clock, MapPin } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Curated Farmhouse Designs",
    description: "Every piece is hand-selected to ensure authentic country charm and lasting style.",
  },
  {
    icon: HandMetal,
    title: "High-Quality Handcrafted Pieces",
    description: "We partner with skilled artisans who pour their craft into every creation.",
  },
  {
    icon: Clock,
    title: "Cozy & Timeless Aesthetics",
    description: "Classic designs that transcend trends and grow more beautiful with time.",
  },
  {
    icon: MapPin,
    title: "Locally Inspired Charm",
    description: "Rooted in Pennsylvania heritage with pieces that celebrate rural Americana.",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm uppercase tracking-[0.2em] mb-4">
            The Difference
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Why Choose Us
          </h2>
          <div className="farmhouse-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

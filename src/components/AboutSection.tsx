import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-accent font-body text-sm uppercase tracking-[0.2em] mb-4">
            Our Story
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Crafted with Heart in Shrewsbury
          </h2>
          <div className="farmhouse-divider mb-10" />
          
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground text-body-lg">
            <p>
              Nestled in the charming town of Shrewsbury, Pennsylvania, Country Home Decor 
              has been transforming houses into homes for over two decades. Our passion lies 
              in discovering pieces that tell a story — furniture with character, textiles 
              with soul, and accents that spark joy.
            </p>
            <p>
              Every item in our collection is thoughtfully curated to bring the warmth 
              of country living into your space. From weathered barn wood tables to 
              hand-stitched quilts, we believe in the beauty of craftsmanship and the 
              timeless appeal of rustic elegance.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            <div className="text-center">
              <p className="font-heading text-4xl md:text-5xl text-primary font-medium">20+</p>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mt-1">Years of Craft</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl md:text-5xl text-primary font-medium">500+</p>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mt-1">Unique Pieces</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl md:text-5xl text-primary font-medium">100%</p>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mt-1">Handpicked Items</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

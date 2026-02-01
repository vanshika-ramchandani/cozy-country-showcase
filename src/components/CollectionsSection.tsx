import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import furnitureImg from "@/assets/collection-furniture.jpg";
import textilesImg from "@/assets/collection-textiles.jpg";
import accentsImg from "@/assets/collection-accents.jpg";
import seasonalImg from "@/assets/collection-seasonal.jpg";

const collections = [
  {
    title: "Farmhouse Furniture",
    description: "Weathered wood tables, rustic cabinets, and comfortable seating that anchors your home with character.",
    image: furnitureImg,
  },
  {
    title: "Vintage Textiles",
    description: "Hand-woven blankets, embroidered linens, and soft cotton throws for cozy layering.",
    image: textilesImg,
  },
  {
    title: "Handcrafted Accents",
    description: "Artisan pottery, carved wood pieces, and unique decor items that add soul to any room.",
    image: accentsImg,
  },
  {
    title: "Seasonal Decor",
    description: "Celebrate every season with curated collections that bring nature's beauty indoors.",
    image: seasonalImg,
  },
];

const CollectionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collections" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm uppercase tracking-[0.2em] mb-4">
            What We Offer
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Featured Collections
          </h2>
          <div className="farmhouse-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-sm overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    {collection.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;

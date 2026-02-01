import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionsSection from "@/components/CollectionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <CollectionsSection />
        <WhyChooseUsSection />
        <GallerySection />
        <section id="visit">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

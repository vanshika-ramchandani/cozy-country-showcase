import { MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rich-brown py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="font-heading text-2xl text-cream mb-2">
            Country Home Decor
          </h3>
          <div className="flex items-center justify-center gap-2 text-cream/70 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="font-body text-sm">Shrewsbury, Pennsylvania</span>
          </div>
          <div className="w-16 h-px bg-cream/20 mx-auto mb-6" />
          <p className="font-body text-sm text-cream/50">
            © {currentYear} Country Home Decor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

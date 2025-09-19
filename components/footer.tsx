import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Krishna Furniture</h3>
            <p className="text-muted-foreground text-sm">
              Crafting quality wooden furniture with a perfect blend of traditional and modern designs. Led by master
              craftsman Mohanlal Suthar.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link
                href="/gallery"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Gallery
              </Link>
              <Link
                href="/services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Services
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Services</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Wooden Furniture</p>
              <p className="text-muted-foreground text-sm">Custom Ceiling Work</p>
              <p className="text-muted-foreground text-sm">Aluminum Work</p>
              <p className="text-muted-foreground text-sm">Interior Design</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Krishna Furniture Gamdi Devki
                  <br />
                  District - Dungarpur
                  <br />
                  State - Rajasthan (india) {314024}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">+91 6377624560</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">info@krishnafurniture.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Krishna Furniture. All rights reserved. Crafted with passion by Mohanlal Suthar.
          </p>
        </div>
      </div>
    </footer>
  )
}

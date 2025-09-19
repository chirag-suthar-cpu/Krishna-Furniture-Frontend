"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    // <nav className="bg-card border-b border-border fixed top-0 left-0 right-0 z-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
            <img 
              src="/feather1.png" 
              alt="Mor Pankh" 
              className="h-10 w-10 object-contain"
            />

              <div className="text-xl">ॐ</div>
            </div>
            <div className="text-2xl font-bold text-primary">Krishna Furniture</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>6377624560</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>9783175728</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false)
                    window.scrollTo(0, 0)
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2 border-t border-border mt-2">
                <div className="flex items-center space-x-2 text-sm text-black">
                  <Phone className="h-4 w-4 text-black" />
                  <span>6377624560</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-black">
                  <Phone className="h-4 w-4 text-black" />
                  <span>9783175728</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

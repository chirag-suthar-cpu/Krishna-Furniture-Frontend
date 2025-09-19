"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ZoomIn } from "lucide-react"
import Link from "next/link"
import { Lightbox } from "@/components/lightbox"

const galleryItems = [
  {
    id: 1,
    title: "Royal Dining Set",
    category: "Dining Room",
    image: "/elegant-teak-wood-dining-table-set-with-chairs.jpg",
    description: "Handcrafted teak wood dining set with intricate carvings",
  },
  {
    id: 2,
    title: "Modern Wardrobe",
    category: "Bedroom",
    image: "/modern-wooden-wardrobe-with-sliding-doors.jpg",
    description: "Contemporary wardrobe with sliding doors and premium finish",
  },
  {
    id: 3,
    title: "Executive Office Desk",
    category: "Office",
    image: "/executive-wooden-office-desk-with-drawers.jpg",
    description: "Professional office desk with storage compartments",
  },
  {
    id: 4,
    title: "Living Room Sofa Set",
    category: "Living Room",
    image: "/wooden-frame-sofa-set-with-cushions-living-room.jpg",
    description: "Comfortable sofa set with wooden frame and premium upholstery",
  },
  {
    id: 5,
    title: "Traditional Wooden Chest",
    category: "Traditional",
    image: "/wooden chest.png",
    description: "Handcrafted traditional chest with brass fittings and intricate woodwork",
  },
  {
    id: 6,
    title: "Modern Kitchen Cabinets",
    category: "Kitchen",
    image: "/cabinet.jpg",
    description: "Contemporary kitchen cabinets with soft-close mechanisms",
  },
  {
    id: 7,
    title: "Wooden Ceiling Work",
    category: "Ceiling",
    image: "/ceiling.jpg",
    description: "Decorative wooden ceiling with traditional beam work",
  },
  {
    id: 8,
    title: "PVC Ceiling Installation",
    category: "Ceiling",
    image: "/pvc.png",
    description: "Modern PVC ceiling with integrated LED lighting",
  },
  {
    id: 9,
    title: "Aluminum Window Frames",
    category: "Aluminum",
    image: "/window.png",
    description: "Durable aluminum window frames with premium glass",
  },
  {
    id: 10,
    title: "Traditional Wooden Door",
    category: "Traditional",
    image: "/old.jpg",
    description: "Handcrafted wooden door with traditional Rajasthani carvings",
  },
  {
    id: 11,
    title: "Gypsum False Ceiling",
    category: "Ceiling",
    image: "/pop.png",
    description: "Elegant gypsum false ceiling with modern lighting design",
  },
  {
    id: 12,
    title: "Custom Bookshelf",
    category: "Living Room",
    image: "/bookshelf.png",
    description: "Custom-designed wooden bookshelf with multiple compartments",
  },
  {
    id: 13,
    title: "Traditional Chokhat Door Frame",
    category: "Traditional",
    image: "/traditional-wooden-chokhat-door-frame-with-intrica.jpg",
    description: "Handcrafted traditional chokhat with detailed Rajasthani carvings and brass work",
  },
  {
    id: 14,
    title: "Wooden Jali Work",
    category: "Traditional",
    image: "/traditional-wooden-jali-screen-with-geometric-patt.jpg",
    description: "Intricate wooden jali screen with geometric patterns for privacy and ventilation",
  },
  {
    id: 15,
    title: "Carved Wooden Pillars",
    category: "Traditional",
    image: "/carved-wooden-pillars-with-traditional-motifs.jpg",
    description: "Ornate wooden pillars with traditional motifs and detailed craftsmanship",
  },
  {
    id: 16,
    title: "Modular Kitchen Design",
    category: "Kitchen",
    image: "/kitchen.jpg",
    description: "Complete modular kitchen with wooden cabinets and modern appliances",
  },
  {
    id: 17,
    title: "Wooden Jharokha Balcony",
    category: "Traditional",
    image: "/traditional-wooden-jharokha-balcony-with-carvings.jpg",
    description: "Traditional wooden jharokha balcony with intricate carvings and brackets",
  },
  {
    id: 18,
    title: "Designer Wooden Bed",
    category: "Bedroom",
    image: "/designer-wooden-bed-with-headboard-carvings.jpg",
    description: "Elegant wooden bed with carved headboard and premium finish",
  },
  {
    id: 19,
    title: "Office Conference Table",
    category: "Office",
    image: "/large-wooden-conference-table-for-office.jpg",
    description: "Large wooden conference table with cable management and premium finish",
  },
  {
    id: 20,
    title: "Traditional Wooden Temple",
    category: "Traditional",
    image: "/wooden-temple-mandir-with-intricate-carvings.jpg",
    description: "Handcrafted wooden temple with detailed carvings and traditional design",
  },
  {
    id: 21,
    title: "Aluminum Sliding Windows",
    category: "Aluminum",
    image: "/aluminum-sliding-windows-with-glass-panels.jpg",
    description: "Modern aluminum sliding windows with double glazed glass panels",
  },
  {
    id: 22,
    title: "POP Ceiling with Lighting",
    category: "Ceiling",
    image: "/pop-ceiling-design-with-led-lighting.jpg",
    description: "Decorative POP ceiling with integrated LED lighting and modern design",
  },
  {
    id: 23,
    title: "Wooden TV Entertainment Unit",
    category: "Living Room",
    image: "/wooden-tv-unit-with-storage-compartments.jpg",
    description: "Custom wooden TV entertainment unit with storage and cable management",
  },
  {
    id: 24,
    title: "Traditional Wooden Swing",
    category: "Traditional",
    image: "/traditional-wooden-swing-jhula-with-chains.jpg",
    description: "Traditional wooden swing (jhula) with carved details and strong chains",
  },
]

const categories = [
  "All",
  "Dining Room",
  "Bedroom",
  "Office",
  "Living Room",
  "Kitchen",
  "Traditional",
  "Ceiling",
  "Aluminum",
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore our extensive collection of handcrafted furniture, traditional woodwork, ceiling installations, and
            aluminum work. Each piece showcases the skill and dedication of master craftsman Mohanlal Suthar and his
            team.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  )
}

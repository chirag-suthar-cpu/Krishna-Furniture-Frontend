import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Hammer, Home, Building, Wrench, Layers, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Custom Wooden Furniture",
    icon: <Hammer className="h-8 w-8" />,
    description: "Handcrafted furniture pieces designed to your specifications",
    features: [
      "Dining Tables & Chairs",
      "Wardrobes & Almirahs",
      "Beds & Bedroom Sets",
      "Office Desks & Cabinets",
      "Kitchen Cabinets",
      "Bookshelves & Storage",
      "Sofa Sets with Wooden Frames",
      "TV Units & Entertainment Centers",
    ],
    image: "/customewood.png",
  },
  {
    id: 2,
    title: "Traditional Wooden Work & Heritage Crafts",
    icon: <Home className="h-8 w-8" />,
    description: "Authentic Rajasthani traditional woodwork, chokhat, jali, and heritage crafts",
    features: [
      "Traditional Chokhat (Door Frames) with Carvings",
      "Wooden Jali Work (Lattice Screens)",
      "Handcrafted Wooden Doors with Brass Work",
      "Traditional Jharokhas (Carved Balconies)",
      "Decorative Wall Panels & Brackets",
      "Traditional Wooden Swings (Jhula)",
      "Carved Wooden Pillars & Columns",
      "Heritage Furniture Restoration",
      "Temple Woodwork & Mandirs",
      "Rajasthani Style Furniture & Artifacts",
      "Traditional Wooden Chests & Storage",
      "Ornate Window Frames & Shutters",
    ],
    image: "/Traditionalwood.png",
  },
  {
    id: 3,
    title: "Advanced Ceiling Solutions",
    icon: <Layers className="h-8 w-8" />,
    description: "Professional ceiling installation with modern and traditional designs",
    features: [
      "PVC Ceiling Installation & Maintenance",
      "POP (Plaster of Paris) Designer Ceiling",
      "Gypsum False Ceiling with Patterns",
      "Traditional Wooden Ceiling with Beams",
      "Designer Ceiling with LED Integration",
      "Acoustic Ceiling Solutions",
      "Waterproof & Moisture Resistant Ceiling",
      "Decorative Ceiling with 3D Designs",
      "Coffered Ceiling Work",
      "Suspended Ceiling Systems",
      "Ceiling Repair & Renovation",
      "Custom Ceiling Lighting Solutions",
    ],
    image: "/ceilingpic.png",
  },
  {
    id: 4,
    title: "Premium Aluminum Fabrication",
    icon: <Building className="h-8 w-8" />,
    description: "Durable aluminum fabrication, installation, and custom solutions",
    features: [
      "Aluminum Window Frames & Installation",
      "Sliding Door Systems & Tracks",
      "Aluminum Partitions & Room Dividers",
      "Shop Fronts & Commercial Shutters",
      "Aluminum Railings & Balustrades",
      "Curtain Wall Systems",
      "Aluminum Roofing & Canopies",
      "Custom Aluminum Fabrication",
      "Aluminum Louvers & Ventilation",
      "Glass & Aluminum Combinations",
      "Aluminum Structural Work",
      "Maintenance & Repair Services",
    ],
    image: "/aluminumfabric.png",
  },
  {
    id: 5,
    title: "Specialized Woodworking & Joinery",
    icon: <Wrench className="h-8 w-8" />,
    description: "Expert woodworking techniques and precision joinery work",
    features: [
      "Mortise & Tenon Joinery",
      "Dovetail Joint Construction",
      "Wood Turning & Lathe Work",
      "Hand Carving & Sculpting",
      "Wood Inlay & Marquetry",
      "Steam Bending Techniques",
      "Precision Router Work",
      "Custom Molding & Trim",
      "Furniture Hardware Installation",
      "Wood Finishing & Polishing",
      "Antique Restoration Techniques",
      "Complex Assembly & Installation",
    ],
    image: "/woodworking-tools-and-joinery-techniques.jpg",
  },
  {
    id: 6,
    title: "Architectural Collaboration & Design",
    icon: <Zap className="h-8 w-8" />,
    description: "Professional collaboration with architects and custom design solutions",
    features: [
      "Architectural Design Implementation",
      "3D Design & Visualization",
      "Custom Design Solutions",
      "Material Selection & Sourcing",
      "Project Planning & Management",
      "Quality Control & Assurance",
      "Timeline & Budget Management",
      "Professional Installation Services",
      "Site Measurement & Survey",
      "Technical Drawing & Plans",
      "Structural Analysis & Support",
      "Compliance & Safety Standards",
    ],
    image: "/architect-and-carpenter-working-together-on-plans.jpg",
  },
  {
    id: 7,
    title: "Maintenance, Repair & Restoration",
    icon: <Home className="h-8 w-8" />,
    description: "Comprehensive maintenance, repair, and restoration services",
    features: [
      "Furniture Repair & Restoration",
      "Antique Furniture Conservation",
      "Wood Polishing & Refinishing",
      "Hardware Replacement & Upgrade",
      "Structural Repairs & Reinforcement",
      "Ceiling Maintenance & Repair",
      "Aluminum Frame Servicing",
      "Emergency Repair Services",
      "Annual Maintenance Contracts",
      "Preventive Care Programs",
      "Damage Assessment & Quotes",
      "Insurance Claim Support",
    ],
    image: "/furniture-repair-and-maintenance-work.jpg",
  },
]

export default function ServicesPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            With over 30 years of experience and a skilled team of 12-20 professionals, Krishna Furniture offers
            comprehensive woodworking, traditional crafts, ceiling, and aluminum services. From authentic Rajasthani
            chokhat and jali work to modern architectural solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">{service.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <p className="text-muted-foreground mt-1">{service.description}</p>
                    </div>
                  </div>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Contact Mohanlal Suthar and his expert team today to discuss your furniture, ceiling, or aluminum work
                  requirements. We provide free consultations and competitive quotes.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

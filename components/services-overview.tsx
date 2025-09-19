import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Hammer, Home, Wrench, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Wooden Furniture",
    description: "Custom-made furniture crafted from premium wood with traditional and modern designs.",
    features: ["Dining Sets", "Bedroom Furniture", "Office Furniture", "Living Room Sets"],
    image: "/wooden-furniture-workshop-with-various-furniture-p.jpg",
  },
  {
    icon: Home,
    title: "Ceiling Work",
    description: "Beautiful ceiling designs that transform your space with elegant wooden and modern finishes.",
    features: ["Wooden Ceilings", "False Ceilings", "Decorative Panels", "Custom Designs"],
    image: "/elegant-wooden-ceiling-design-in-modern-home.jpg",
  },
  {
    icon: Wrench,
    title: "Aluminum Work",
    description: "Durable and stylish aluminum solutions for windows, doors, and architectural elements.",
    features: ["Windows & Doors", "Partitions", "Railings", "Custom Fabrication"],
    image: "/modern-aluminum-window-and-door-installation.jpg",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From custom furniture to complete interior solutions, we offer comprehensive services to transform your
            space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-lg">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

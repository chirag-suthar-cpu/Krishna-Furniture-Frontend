import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Shield, Users, Award, Recycle, HandHeart } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We never compromise on quality. Every piece undergoes rigorous quality checks before reaching you.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "We source wood responsibly and follow eco-friendly practices to protect our environment.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Your satisfaction is our success. We listen, understand, and deliver exactly what you envision.",
  },
  {
    icon: Award,
    title: "Excellence in Craft",
    description: "Traditional techniques meet modern innovation to create furniture that stands the test of time.",
  },
  {
    icon: HandHeart,
    title: "Personal Touch",
    description: "Every piece is handcrafted with personal attention, making each creation unique and special.",
  },
  {
    icon: Recycle,
    title: "Lasting Value",
    description: "We create furniture that lasts generations, providing exceptional value for your investment.",
  },
]

export function CompanyValues() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do, from selecting the finest wood to delivering exceptional customer
            service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

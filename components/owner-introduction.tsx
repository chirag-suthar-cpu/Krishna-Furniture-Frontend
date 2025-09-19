import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Clock } from "lucide-react"

export function OwnerIntroduction() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/dp.jpg"
              alt="Mohanlal Suthar - Master Craftsman"
              className="w-full h-[700px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Mohanlal Suthar</h2>
              <p className="text-lg text-muted-foreground mb-6">Master Craftsman & Founder of Krishna Furniture</p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 30 years of dedicated craftsmanship, Mohanlal Suthar has built Krishna Furniture on the
                foundation of quality, tradition, and innovation. His passion for woodworking began in his youth,
                learning from master artisans and perfecting techniques passed down through generations.
              </p>
              <p>
                Today, Mohanlal leads a team of skilled craftsmen who share his commitment to excellence. Every piece
                that leaves our workshop carries his personal touch and unwavering dedication to quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Master Craftsman</div>
                  <div className="text-sm text-muted-foreground">Certified Excellence</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">500+ Customers</div>
                  <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">30+ Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4">
              <Button asChild size="lg">
                <Link href="/about">Learn More About Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

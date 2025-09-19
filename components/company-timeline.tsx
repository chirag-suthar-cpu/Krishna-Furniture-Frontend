import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Trophy } from "lucide-react"

const timelineEvents = [
  {
    year: "1995",
    title: "The Beginning",
    description: "Mohanlal Suthar founded Krishna Furniture with a small workshop and big dreams.",
    icon: MapPin,
    highlight: "Started with 2 craftsmen",
  },
  {
    year: "2000",
    title: "First Major Contract",
    description: "Secured our first major commercial project, furnishing a complete office complex.",
    icon: Trophy,
    highlight: "50+ furniture pieces delivered",
  },
  {
    year: "2005",
    title: "Expansion",
    description: "Expanded our services to include ceiling work and aluminum fabrication.",
    icon: Users,
    highlight: "Team grew to 15 craftsmen",
  },
  {
    year: "2010",
    title: "Modern Workshop",
    description: "Established our current state-of-the-art workshop with modern tools and equipment.",
    icon: MapPin,
    highlight: "5000 sq ft facility",
  },
  {
    year: "2015",
    title: "500th Customer",
    description: "Celebrated serving our 500th satisfied customer, marking a major milestone.",
    icon: Users,
    highlight: "500+ happy families",
  },
  {
    year: "2020",
    title: "Digital Presence",
    description: "Launched our online presence to reach more customers and showcase our work.",
    icon: Calendar,
    highlight: "Online portfolio launched",
  },
]

export function CompanyTimeline() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey Through Time</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to becoming a trusted name in furniture craftsmanship.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border hidden lg:block" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <div
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="w-full lg:w-5/12">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                            <event.icon className="h-5 w-5" />
                          </div>
                          <div className="text-2xl font-bold text-primary">{event.year}</div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground mb-3">{event.description}</p>
                        <div className="bg-muted/50 px-3 py-2 rounded-lg">
                          <p className="text-sm font-medium text-primary">{event.highlight}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                  </div>

                  {/* Spacer */}
                  <div className="w-full lg:w-5/12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

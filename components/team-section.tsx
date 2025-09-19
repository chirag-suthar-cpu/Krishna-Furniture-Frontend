import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Heart } from "lucide-react"

const teamMembers = [
  {
    name: "Mohanlal Suthar",
    role: "Founder & Master Craftsman",
    experience: "30+ Years",
    specialty: "Traditional & Modern Woodworking",
    image: "/dp.jpg",
  },
]

export function TeamSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Expert</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our master craftsman brings decades of experience and passion to every project, ensuring exceptional quality
            in every piece we create.
          </p>
        </div>

        {/* Team Member Card */}
        <div className="flex justify-center mb-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 max-w-sm border-0"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/dp.jpg"}
                    alt={member.name}
                    className="w-full h-100 object-cover transform transition duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:shadow-2xl"
                  />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                    <p className="text-sm font-medium">{member.specialty}</p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
                  <p className="text-primary text-base font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.experience} Experience</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Employees Info */}
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground italic">We currently have 12–20 employees working with us.</p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">12-20</div>
              <div className="text-muted-foreground text-sm">Team Members</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">15+</div>
              <div className="text-muted-foreground text-sm">Years Avg Experience</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">1000+</div>
              <div className="text-muted-foreground text-sm">Projects Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Heart className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">100%</div>
              <div className="text-muted-foreground text-sm">Passion & Dedication</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

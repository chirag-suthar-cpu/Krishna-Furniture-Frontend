// "use client"

// import { Card, CardContent } from "@/components/ui/card"

// const certificates = [
//   { id: 1, title: "ISO 9001 Certified", description: "Quality management certification", image: "/certificates/iso9001.png" },
//   { id: 2, title: "Best Furniture Award 2023", description: "Awarded for excellence in craftsmanship", image: "/id.jpg" },
//   // aur jitne certificates chahiye yahan add kar
// ]

// export function CertificatesSection() {
//   return (
//     <section className="py-16 bg-muted/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Certificates & Achievements</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Krishna Furniture has earned recognition for quality and craftsmanship. Here are some of our certificates and awards.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {certificates.map((cert) => (
//             <Card key={cert.id} className="bg-white shadow-lg">
//               <CardContent className="p-6 text-center">
//                 <img src={cert.image} alt={cert.title} className="mx-auto mb-4 w-24 h-24 object-contain" />
//                 <div className="font-semibold text-lg text-foreground">{cert.title}</div>
//                 <div className="text-muted-foreground text-sm mt-2">{cert.description}</div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }














"use client"

import { Card, CardContent } from "@/components/ui/card"

const certificates = [
  { id: 1, title: "ISO 9001 Certified", description: "Quality management certification", image: "/certificates/iso9001.png" },
  { 
    id: 2, 
    title: "PM Vishwakarma Beneficiary Identity Card", 
    description: "Official certificate issued to the beneficiary under PM Vishwakarma scheme", 
    image: "/id.jpg" 
   }, 

  // aur jitne certificates chahiye yahan add kar
]

export function CertificatesSection() {
  return (
    <section className="py-16 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Certificates & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Krishna Furniture has earned recognition for quality and craftsmanship. Here are some of our certificates and awards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <Card key={cert.id} className="bg-white shadow-lg overflow-hidden">
              {/* Image Full Cover */}
              <div className="w-full h-64">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover" // ✅ full box cover
                />
              </div>

              <CardContent className="p-4 text-center">
                <div className="font-semibold text-lg text-foreground">{cert.title}</div>
                <div className="text-muted-foreground text-sm mt-1">{cert.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

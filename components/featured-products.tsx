// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { ArrowRight } from "lucide-react"

// const featuredProducts = [
//   {
//     id: 1,
//     name: "Royal Dining Set",
//     description: "Handcrafted teak wood dining table with 6 chairs, perfect for family gatherings.",
//     image: "/elegant-teak-wood-dining-table-set-with-chairs.jpg",
//     category: "Dining Room",
//   },
//   {
//     id: 2,
//     name: "Modern Wardrobe",
//     description: "Spacious wardrobe with sliding doors and premium finish for contemporary homes.",
//     image: "/modern-wooden-wardrobe-with-sliding-doors.jpg",
//     category: "Bedroom",
//   },
//   {
//     id: 3,
//     name: "Executive Office Desk",
//     description: "Professional office desk with storage compartments and cable management.",
//     image: "/executive-wooden-office-desk-with-drawers.jpg",
//     category: "Office",
//   },
//   {
//     id: 4,
//     name: "Living Room Sofa Set",
//     description: "Comfortable 3+2 seater sofa set with premium upholstery and wooden frame.",
//     image: "/wooden-frame-sofa-set-with-cushions-living-room.jpg",
//     category: "Living Room",
//   },
// ]

// export function FeaturedProducts() {
//   return (
//     <section className="py-16 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Discover our best-selling furniture pieces, each crafted with precision and attention to detail.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {featuredProducts.map((product) => (
//             <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-0">
//                 <div className="relative overflow-hidden rounded-t-lg">
//                   <img
//                     src={product.image || "/placeholder.svg"}
//                     alt={product.name}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
//                       {product.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
//                   <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
//                   <div className="flex justify-center">
//                     <Button variant="outline" size="sm">
//                       View Details
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center">
//           <Button asChild size="lg">
//             <Link href="/gallery">
//               View All Products
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }


import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Royal Dining Set",
    description: "Handcrafted teak wood dining table with 6 chairs, perfect for family gatherings.",
    image: "/elegant-teak-wood-dining-table-set-with-chairs.jpg",
    category: "Dining Room",
  },
  {
    id: 2,
    name: "Modern Wardrobe",
    description: "Spacious wardrobe with sliding doors and premium finish for contemporary homes.",
    image: "/modern-wooden-wardrobe-with-sliding-doors.jpg",
    category: "Bedroom",
  },
  {
    id: 3,
    name: "Executive Office Desk",
    description: "Professional office desk with storage compartments and cable management.",
    image: "/executive-wooden-office-desk-with-drawers.jpg",
    category: "Office",
  },
  {
    id: 4,
    name: "Living Room Sofa Set",
    description: "Comfortable 3+2 seater sofa set with premium upholstery and wooden frame.",
    image: "/wooden-frame-sofa-set-with-cushions-living-room.jpg",
    category: "Living Room",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our best-selling furniture pieces, each crafted with precision and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  {/* Button removed */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/gallery">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

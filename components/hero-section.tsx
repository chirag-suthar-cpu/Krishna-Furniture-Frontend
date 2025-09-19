// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { ArrowRight, Star } from "lucide-react"

// export function HeroSection() {
//   return (
//     <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/bg.jpg"
//           alt="Beautiful handcrafted wooden furniture"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       <div className="absolute top-6 left-9 z-20">
//         <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/50 shadow-lg">
//           <img src="/lord-krishna-round-image.jpeg" alt="Lord Krishna" className="w-full h-full object-cover" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//         <div className="flex items-center justify-center space-x-1 mb-4">
//           {[...Array(5)].map((_, i) => (
//             <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//           ))}
//           <span className="ml-2 text-sm">Trusted by 500+ Happy Customers</span>
//         </div>

//         <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
//           Crafting Quality
//           <span className="text-primary"> Since 1995</span>
//         </h1>

//         <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto opacity-90">
//           Experience the perfect blend of traditional craftsmanship and modern design with Krishna Furniture's
//           handcrafted wooden furniture, ceiling work, and aluminum solutions.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Button asChild size="lg" className="text-lg px-8 py-6">
//             <Link href="/gallery">
//               Explore Our Collection
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//           <Button
//             asChild
//             variant="outline"
//             size="lg"
//             className="text-lg px-8 py-6 bg-white border-white text-foreground hover:bg-white/90"
//           >
//             <Link href="/contact">Get Custom Quote</Link>
//           </Button>
//         </div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div>
//             <div className="text-3xl font-bold text-primary">30+</div>
//             <div className="text-sm opacity-80">Years of Experience</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold text-primary">500+</div>
//             <div className="text-sm opacity-80">Happy Customers</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold text-primary">1000+</div>
//             <div className="text-sm opacity-80">Projects Completed</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }







import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg.jpg"
          alt="Beautiful handcrafted wooden furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Logo + Title */}
      <div className="relative z-20 flex items-center justify-center gap-4 mt-8 mb-10 px-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/50 shadow-lg">
          <img
            src="/lord-krishna-round-image.jpeg"
            alt="Lord Krishna"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Krishna Furniture
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Stars */}
        <div className="flex items-center justify-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-sm">Trusted by 500+ Happy Customers</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Crafting Quality
          <span className="text-primary"> Since 1995</span>
        </h2>

        {/* Paragraph */}
        <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto opacity-90">
          Experience the perfect blend of traditional craftsmanship and modern design with Krishna Furniture's
          handcrafted wooden furniture, ceiling work, and aluminum solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/gallery">
              Explore Our Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 bg-white border-white text-foreground hover:bg-white/90"
          >
            <Link href="/contact">Get Custom Quote</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">30+</div>
            <div className="text-sm opacity-80">Years of Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm opacity-80">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">1000+</div>
            <div className="text-sm opacity-80">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  )
}




// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { ArrowRight, Star } from "lucide-react"

// export function HeroSection() {
//   return (
//     <section className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/bg.jpg"
//           alt="Beautiful handcrafted wooden furniture"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* Round Image */}
//       <div className="order-1 md:order-0 mt-6 md:mt-0 md:absolute md:top-6 md:left-9 z-20 flex justify-center md:justify-start w-full">
//         <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/50 shadow-lg">
//           <img
//             src="/lord-krishna-round-image.jpeg"
//             alt="Lord Krishna"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left mt-6 md:mt-0 flex-1">
//         {/* Stars */}
//         <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
//           {[...Array(5)].map((_, i) => (
//             <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//           ))}
//           <span className="ml-2 text-sm">Trusted by 500+ Happy Customers</span>
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
//           Crafting Quality
//           <span className="text-primary"> Since 1995</span>
//         </h1>

//         {/* Paragraph */}
//         <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto md:mx-0 opacity-90">
//           Experience the perfect blend of traditional craftsmanship and modern design with Krishna Furniture's
//           handcrafted wooden furniture, ceiling work, and aluminum solutions.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
//           <Button asChild size="lg" className="text-lg px-8 py-6">
//             <Link href="/gallery">
//               Explore Our Collection
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//           <Button
//             asChild
//             variant="outline"
//             size="lg"
//             className="text-lg px-8 py-6 bg-white border-white text-foreground hover:bg-white/90"
//           >
//             <Link href="/contact">Get Custom Quote</Link>
//           </Button>
//         </div>

//         {/* Stats */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//           <div>
//             <div className="text-3xl font-bold text-primary">30+</div>
//             <div className="text-sm opacity-80">Years of Experience</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold text-primary">500+</div>
//             <div className="text-sm opacity-80">Happy Customers</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold text-primary">1000+</div>
//             <div className="text-sm opacity-80">Projects Completed</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// };
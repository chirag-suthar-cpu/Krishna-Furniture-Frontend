// "use client"

// import { HeroSection } from "@/components/hero-section"
// import { FeaturedProducts } from "@/components/featured-products"
// import { OwnerIntroduction } from "@/components/owner-introduction"
// import { ServicesOverview } from "@/components/services-overview"
// import { Card, CardContent } from "@/components/ui/card"
// import { Star } from "lucide-react"
// import { useState, useEffect } from "react"

// // Set your backend URL here
// const BACKEND_URL = "http://localhost:5001" // <-- change if your backend runs on another port

// export default function HomePage() {
//   return (
//     <div className="min-h-screen">
//       <main>
//         <HeroSection />
//         <FeaturedProducts />
//         <OwnerIntroduction />
//         <ServicesOverview />
//         <ReviewAndTestimonials />
//       </main>
//     </div>
//   )
// }

// function ReviewAndTestimonials() {
//   const [reviews, setReviews] = useState<any[]>([])
//   const [currentIndex, setCurrentIndex] = useState(0)

//   // Form state
//   const [name, setName] = useState("")
//   const [rating, setRating] = useState(0)
//   const [message, setMessage] = useState("")
//   const [image, setImage] = useState<File | null>(null)

//   // Static fallback testimonials
//   const staticTestimonials = [
//     {
//       id: 1,
//       name: "Rajesh Kumar",
//       location: "Mumbai",
//       rating: 5,
//       text: "Krishna Furniture transformed our home with their beautiful dining set. Highly recommended!",
//       project: "Dining Room Furniture",
//     },
//     {
//       id: 2,
//       name: "Priya Sharma",
//       location: "Delhi",
//       rating: 4,
//       text: "The ceiling work done by Krishna Furniture is absolutely stunning. Completed on time and great quality.",
//       project: "Ceiling Design",
//     },
//     {
//       id: 3,
//       name: "Amit Patel",
//       location: "Ahmedabad",
//       rating: 5,
//       text: "We got our entire office furniture from Krishna Furniture. Modern + traditional designs, great value for money!",
//       project: "Office Furniture",
//     },
//     {
//       id: 4,
//       name: "Sunita Gupta",
//       location: "Pune",
//       rating: 5,
//       text: "The aluminum work for our windows and doors was completed flawlessly. Very professional and punctual.",
//       project: "Aluminum Work",
//     },
//   ]

//   // Fetch reviews from backend
//   const fetchReviews = async () => {
//     try {
//      const res = await fetch(`http://localhost:5001/api/reviews`)
//       if (!res.ok) throw new Error("Failed to fetch reviews")
//       const data = await res.json()
//       setReviews(data)
//     } catch {
//       setReviews(staticTestimonials)
//     }
//   }

//   useEffect(() => {
//     fetchReviews()
//   }, [])

//   // Auto slide after 4s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const total = reviews.length > 0 ? reviews.length : staticTestimonials.length
//       setCurrentIndex((prev) => (prev + 1) % total)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [reviews])

//   const displayReviews = reviews.length > 0 ? reviews : staticTestimonials
//   const currentReview = displayReviews[currentIndex]

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!rating) return alert("Please select a rating!")

//     const formData = new FormData()
//     formData.append("name", name)
//     formData.append("rating", rating.toString())
//     formData.append("message", message)
//     if (image) formData.append("image", image)

//     try {
//       const res = await fetch(`${BACKEND_URL}/api/reviews`, {
//         method: "POST",
//         body: formData,
//       })

//       if (!res.ok) throw new Error("Failed to submit review")
//       const newReview = await res.json()

//       // Update frontend immediately
//       setReviews((prev) => [newReview, ...prev])
//       setName("")
//       setRating(0)
//       setMessage("")
//       setImage(null)
//       setCurrentIndex(0)
//     } catch (err) {
//       console.error("Error submitting review:", err)
//       alert("Failed to submit review. Try again.")
//     }
//   }

//   return (
//     <section className="py-16 bg-muted/30">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             Share Your Experience
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Submit your review below and help others know about our services.
//           </p>
//         </div>

//         {/* Review Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md rounded-lg p-6 mb-12"
//         >
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border p-2 rounded mb-4"
//             required
//           />

//           {/* Star Rating Input */}
//           <div className="flex items-center space-x-2 mb-4 justify-center">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <Star
//                 key={star}
//                 onClick={() => setRating(star)}
//                 className={`h-8 w-8 cursor-pointer transition ${
//                   star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
//                 }`}
//               />
//             ))}
//           </div>

//           <textarea
//             placeholder="Write your review"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full border p-2 rounded mb-4"
//             required
//           />

//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files?.[0] || null)}
//             className="mb-4"
//           />

//           <button
//             type="submit"
//             className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
//           >
//             Submit Review
//           </button>
//         </form>

//         {/* Auto-Sliding Testimonial */}
//         <Card className="shadow-lg">
//           <CardContent className="p-8 transition-all duration-700 ease-in-out">
//             <div className="flex items-center justify-center space-x-1 mb-4">
//               {[...Array(currentReview.rating)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="h-5 w-5 fill-yellow-400 text-yellow-400"
//                 />
//               ))}
//             </div>
//             <p className="text-lg text-muted-foreground italic mb-6 text-center">
//               "{currentReview.text || currentReview.message}"
//             </p>
//             <div className="text-center">
//               <div className="font-semibold text-foreground text-lg">
//                 {currentReview.name}
//               </div>
//               <div className="text-muted-foreground text-sm">
//                 {currentReview.location || currentReview.project}
//               </div>
//               {currentReview.imageUrl && (
//                 <img
//                   src={currentReview.imageUrl}
//                   alt="Customer"
//                   className="mx-auto mt-4 w-40 h-40 object-cover rounded-full shadow"
//                 />
//               )}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Dots Indicator */}
//         <div className="flex justify-center space-x-2 mt-6">
//           {displayReviews.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`w-3 h-3 rounded-full ${
//                 idx === currentIndex ? "bg-primary" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }






// "use client"

// import { HeroSection } from "@/components/hero-section"
// import { FeaturedProducts } from "@/components/featured-products"
// import { OwnerIntroduction } from "@/components/owner-introduction"
// import { ServicesOverview } from "@/components/services-overview"
// import { Card, CardContent } from "@/components/ui/card"
// import { Star, X } from "lucide-react"
// import { useState, useEffect } from "react"

// // Set your backend URL here
// const BACKEND_URL = "http://localhost:5001" // <-- change if your backend runs on another port

// export default function HomePage() {
//   return (
//     <div className="min-h-screen">
//       <main>
//         <HeroSection />
//         <FeaturedProducts />
//         <OwnerIntroduction />
//         <ServicesOverview />
//         <ReviewAndTestimonials />
//       </main>
//     </div>
//   )
// }

// function ReviewAndTestimonials() {
//   const [reviews, setReviews] = useState<any[]>([])
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [zoomImage, setZoomImage] = useState<string | null>(null)

//   // Form state
//   const [name, setName] = useState("")
//   const [rating, setRating] = useState(0)
//   const [message, setMessage] = useState("")
//   const [image, setImage] = useState<File | null>(null)

//   // Static fallback testimonials
//   const staticTestimonials = [
//     { id: 1, name: "Rajesh Kumar", location: "Mumbai", rating: 5, text: "Krishna Furniture transformed our home with their beautiful dining set. Highly recommended!", project: "Dining Room Furniture" },
//     { id: 2, name: "Priya Sharma", location: "Delhi", rating: 4, text: "The ceiling work done by Krishna Furniture is absolutely stunning. Completed on time and great quality.", project: "Ceiling Design" },
//     { id: 3, name: "Amit Patel", location: "Ahmedabad", rating: 5, text: "We got our entire office furniture from Krishna Furniture. Modern + traditional designs, great value for money!", project: "Office Furniture" },
//     { id: 4, name: "Sunita Gupta", location: "Pune", rating: 5, text: "The aluminum work for our windows and doors was completed flawlessly. Very professional and punctual.", project: "Aluminum Work" },
//   ]

//   // Fetch reviews from backend
//   const fetchReviews = async () => {
//     try {
//       const res = await fetch(`${BACKEND_URL}/api/reviews`)
//       if (!res.ok) throw new Error("Failed to fetch reviews")
//       const data = await res.json()

//       // Map image paths to full URLs
//       const mapped = data.map((r: any) => ({
//         ...r,
//         imageUrl: r.imageUrl ? `${BACKEND_URL}/${r.imageUrl.replace(/^\/?/, "")}` : null
//       }))
//       setReviews(mapped)
//     } catch {
//       setReviews(staticTestimonials)
//     }
//   }

//   useEffect(() => {
//     fetchReviews()
//   }, [])

//   // Auto slide after 4s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const total = reviews.length > 0 ? reviews.length : staticTestimonials.length
//       setCurrentIndex((prev) => (prev + 1) % total)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [reviews])

//   const displayReviews = reviews.length > 0 ? reviews : staticTestimonials
//   const currentReview = displayReviews[currentIndex]

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!rating) return alert("Please select a rating!")

//     const formData = new FormData()
//     formData.append("name", name)
//     formData.append("rating", rating.toString())
//     formData.append("message", message)
//     if (image) formData.append("image", image)

//     try {
//       const res = await fetch(`${BACKEND_URL}/api/reviews`, { method: "POST", body: formData })
//       if (!res.ok) throw new Error("Failed to submit review")
//       const newReview = await res.json()

//       newReview.imageUrl = newReview.imageUrl ? `${BACKEND_URL}/${newReview.imageUrl.replace(/^\/?/, "")}` : null

//       setReviews((prev) => [newReview, ...prev])
//       setName("")
//       setRating(0)
//       setMessage("")
//       setImage(null)
//       setCurrentIndex(0)
//     } catch (err) {
//       console.error("Error submitting review:", err)
//       alert("Failed to submit review. Try again.")
//     }
//   }

//   return (
//     <section className="py-16 bg-muted/30">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Share Your Experience</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Submit your review below and help others know about our services.</p>
//         </div>

//         {/* Review Form */}
//         <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-12">
//           <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded mb-4" required />
//           <div className="flex items-center space-x-2 mb-4 justify-center">
//             {[1,2,3,4,5].map((star) => (
//               <Star key={star} onClick={() => setRating(star)} className={`h-8 w-8 cursor-pointer transition ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
//             ))}
//           </div>
//           <textarea placeholder="Write your review" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border p-2 rounded mb-4" required />
//           <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} className="mb-4" />
//           <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80">Submit Review</button>
//         </form>

//         {/* Auto-Sliding Testimonial */}
//         <Card className="shadow-lg">
//           <CardContent className="p-8 transition-all duration-700 ease-in-out">
//             <div className="flex items-center justify-center space-x-1 mb-4">
//               {[...Array(currentReview.rating)].map((_, i) => (
//                 <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//               ))}
//             </div>
//             <p className="text-lg text-muted-foreground italic mb-6 text-center">"{currentReview.text || currentReview.message}"</p>
//             <div className="text-center">
//               <div className="font-semibold text-foreground text-lg">{currentReview.name}</div>
//               <div className="text-muted-foreground text-sm">{currentReview.location || currentReview.project}</div>
//               {currentReview.imageUrl && (
//                 <img
//                   src={currentReview.imageUrl}
//                   alt="Customer"
//                   className="mx-auto mt-4 w-40 h-40 object-cover rounded-full shadow cursor-pointer"
//                   onClick={() => setZoomImage(currentReview.imageUrl)}
//                 />
//               )}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Dots Indicator */}
//         <div className="flex justify-center space-x-2 mt-6">
//           {displayReviews.map((_, idx) => (
//             <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-primary" : "bg-gray-300"}`} />
//           ))}
//         </div>
//       </div>

//       {/* Zoom Modal */}
//       {zoomImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="relative">
//             <X className="absolute top-2 right-2 text-white cursor-pointer w-8 h-8" onClick={() => setZoomImage(null)} />
//             <img src={zoomImage} alt="Zoom" className="max-h-[80vh] max-w-[80vw] rounded shadow-lg" />
//           </div>
//         </div>
//       )}
//     </section>
//   )
// }





"use client"

import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { OwnerIntroduction } from "@/components/owner-introduction"
import { ServicesOverview } from "@/components/services-overview"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"


import { CertificatesSection } from "@/components/certificates-section"

// aur <main> ke andar


// Set your backend URL here
const BACKEND_URL = "https://krishna-furniture-backend.onrender.com"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <FeaturedProducts />
        <OwnerIntroduction />
        <ServicesOverview />
        <ReviewAndTestimonials />
      </main>
    </div>
  )
}

function ReviewAndTestimonials() {
  const [reviews, setReviews] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Form state
  const [name, setName] = useState("")
  const [rating, setRating] = useState(0)
  const [message, setMessage] = useState("")

  // Static fallback testimonials
  const staticTestimonials = [
    { id: 1, name: "Rajesh Kumar", location: "Mumbai", rating: 5, text: "Krishna Furniture transformed our home with their beautiful dining set. Highly recommended!", project: "Dining Room Furniture" },
    { id: 2, name: "Priya Sharma", location: "Delhi", rating: 4, text: "The ceiling work done by Krishna Furniture is absolutely stunning. Completed on time and great quality.", project: "Ceiling Design" },
    { id: 3, name: "Amit Patel", location: "Ahmedabad", rating: 5, text: "We got our entire office furniture from Krishna Furniture. Modern + traditional designs, great value for money!", project: "Office Furniture" },
    { id: 4, name: "Sunita Gupta", location: "Pune", rating: 5, text: "The aluminum work for our windows and doors was completed flawlessly. Very professional and punctual.", project: "Aluminum Work" },
  ]

  // Fetch reviews from backend
  const fetchReviews = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/reviews`)
      if (!res.ok) throw new Error("Failed to fetch reviews")
      const data = await res.json()
      setReviews(data)
    } catch {
      setReviews(staticTestimonials)
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  // Auto slide after 4s
  useEffect(() => {
    const interval = setInterval(() => {
      const total = reviews.length > 0 ? reviews.length : staticTestimonials.length
      setCurrentIndex((prev) => (prev + 1) % total)
    }, 4000)
    return () => clearInterval(interval)
  }, [reviews])

  const displayReviews = reviews.length > 0 ? reviews : staticTestimonials
  const currentReview = displayReviews[currentIndex]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!rating) return alert("Please select a rating!")

    const formData = new FormData()
    formData.append("name", name)
    formData.append("rating", rating.toString())
    formData.append("message", message)

    try {
      const res = await fetch(`${BACKEND_URL}/api/reviews`, { method: "POST", body: formData })
      if (!res.ok) throw new Error("Failed to submit review")
      const newReview = await res.json()
      setReviews((prev) => [newReview, ...prev])
      setName("")
      setRating(0)
      setMessage("")
      setCurrentIndex(0)
    } catch (err) {
      console.error("Error submitting review:", err)
      alert("Failed to submit review. Try again.")
    }
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Share Your Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Submit your review below and help others know about our services.</p>
        </div>

        {/* Review Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-12">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded mb-4" required />
          <div className="flex items-center space-x-2 mb-4 justify-center">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} onClick={() => setRating(star)} className={`h-8 w-8 cursor-pointer transition ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
            ))}
          </div>
          <textarea placeholder="Write your review" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border p-2 rounded mb-4" required />
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80">Submit Review</button>
        </form>

        {/* Auto-Sliding Testimonial */}
        <Card className="shadow-lg">
          <CardContent className="p-8 transition-all duration-700 ease-in-out">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg text-muted-foreground italic mb-6 text-center">"{currentReview.text || currentReview.message}"</p>
            <div className="text-center">
              <div className="font-semibold text-foreground text-lg">{currentReview.name}</div>
              <div className="text-muted-foreground text-sm">{currentReview.location || currentReview.project}</div>
            </div>
          </CardContent>
        </Card>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {displayReviews.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-primary" : "bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

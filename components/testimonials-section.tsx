"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    text: "Krishna Furniture transformed our home with their beautiful dining set. The craftsmanship is exceptional and Mohanlal's attention to detail is remarkable. Highly recommended!",
    project: "Dining Room Furniture",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "The ceiling work done by Krishna Furniture is absolutely stunning. They completed the project on time and the quality exceeded our expectations. Professional service throughout.",
    project: "Ceiling Design",
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "We got our entire office furniture from Krishna Furniture. The modern designs combined with traditional craftsmanship make their work stand out. Great value for money!",
    project: "Office Furniture",
  },
  {
    id: 4,
    name: "Sunita Gupta",
    location: "Pune",
    rating: 5,
    text: "The aluminum work for our windows and doors was completed flawlessly. The team is professional, punctual, and delivers exactly what they promise. Very satisfied with the service.",
    project: "Aluminum Work",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our work.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-card shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Quote className="h-12 w-12 text-primary opacity-20" />
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground italic mb-6 text-pretty">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <div className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].project}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}









// // "use client"

// // import { Card, CardContent } from "@/components/ui/card"
// // import { Star } from "lucide-react"
// // import { useState, useEffect } from "react"

// // export function TestimonialsSection() {
// //   const [reviews, setReviews] = useState<any[]>([])

// //   // Reviews fetch karne ka function
// //   const fetchReviews = async () => {
// //     try {
// //       const res = await fetch("/api/reviews")
// //       const data = await res.json()
// //       setReviews(data)
// //     } catch (err) {
// //       console.error("Error fetching reviews:", err)
// //     }
// //   }

// //   useEffect(() => {
// //     fetchReviews()
// //   }, [])

// //   // Form state
// //   const [name, setName] = useState("")
// //   const [rating, setRating] = useState(5)
// //   const [message, setMessage] = useState("")
// //   const [image, setImage] = useState<File | null>(null)

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     const formData = new FormData()
// //     formData.append("name", name)
// //     formData.append("rating", rating.toString())
// //     formData.append("message", message)
// //     if (image) formData.append("image", image)

// //     await fetch("/api/reviews", {
// //       method: "POST",
// //       body: formData,
// //     })

// //     setName("")
// //     setRating(5)
// //     setMessage("")
// //     setImage(null)
// //     fetchReviews()
// //   }

// //   return (
// //     <section className="py-16 bg-muted/30">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
// //             What Our Customers Say
// //           </h2>
// //           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
// //             Share your experience with Krishna Furniture. Rate us, upload an image, and write your feedback.
// //           </p>
// //         </div>

// //         {/* Review Form */}
// //         <form
// //           onSubmit={handleSubmit}
// //           className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mb-12"
// //         >
// //           <input
// //             type="text"
// //             placeholder="Your Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             className="w-full border p-2 rounded mb-4"
// //             required
// //           />

// //           <select
// //             value={rating}
// //             onChange={(e) => setRating(Number(e.target.value))}
// //             className="w-full border p-2 rounded mb-4"
// //           >
// //             {[1, 2, 3, 4, 5].map((r) => (
// //               <option key={r} value={r}>
// //                 {r} Stars
// //               </option>
// //             ))}
// //           </select>

// //           <textarea
// //             placeholder="Write your review"
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //             className="w-full border p-2 rounded mb-4"
// //             required
// //           />

// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={(e) => setImage(e.target.files?.[0] || null)}
// //             className="mb-4"
// //           />

// //           <button
// //             type="submit"
// //             className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
// //           >
// //             Submit Review
// //           </button>
// //         </form>

// //         {/* Display Reviews */}
// //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //           {reviews.length === 0 && (
// //             <p className="text-center text-muted-foreground w-full">
// //               No reviews yet. Be the first to share your feedback!
// //             </p>
// //           )}

// //           {reviews.map((review) => (
// //             <Card key={review.id} className="shadow-lg">
// //               <CardContent className="p-6">
// //                 <div className="flex items-center space-x-1 mb-3">
// //                   {[...Array(review.rating)].map((_, i) => (
// //                     <Star
// //                       key={i}
// //                       className="h-4 w-4 fill-yellow-400 text-yellow-400"
// //                     />
// //                   ))}
// //                 </div>
// //                 <p className="text-muted-foreground italic mb-3">
// //                   "{review.message}"
// //                 </p>
// //                 <div className="font-semibold">{review.name}</div>
// //                 {review.imageUrl && (
// //                   <img
// //                     src={review.imageUrl}
// //                     alt="Customer"
// //                     className="mt-3 w-full h-40 object-cover rounded-lg"
// //                   />
// //                 )}
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }





// // "use client"

// // import { Card, CardContent } from "@/components/ui/card"
// // import { Star } from "lucide-react"
// // import { useState, useEffect } from "react"

// // export function TestimonialsSection() {
// //   const [reviews, setReviews] = useState<any[]>([])

// //   // Reviews fetch karna
// //   const fetchReviews = async () => {
// //     try {
// //       const res = await fetch("/api/reviews")
// //       const data = await res.json()
// //       setReviews(data)
// //     } catch (err) {
// //       console.error("Error fetching reviews:", err)
// //     }
// //   }

// //   useEffect(() => {
// //     fetchReviews()
// //   }, [])

// //   // Form state
// //   const [name, setName] = useState("")
// //   const [rating, setRating] = useState(0)
// //   const [message, setMessage] = useState("")
// //   const [image, setImage] = useState<File | null>(null)

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     if (!rating) return alert("Please select a rating!")

// //     const formData = new FormData()
// //     formData.append("name", name)
// //     formData.append("rating", rating.toString())
// //     formData.append("message", message)
// //     if (image) formData.append("image", image)

// //     await fetch("/api/reviews", {
// //       method: "POST",
// //       body: formData,
// //     })

// //     setName("")
// //     setRating(0)
// //     setMessage("")
// //     setImage(null)
// //     fetchReviews()
// //   }

// //   return (
// //     <section className="py-16 bg-muted/30">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
// //             What Our Customers Say
// //           </h2>
// //           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
// //             Share your experience with Krishna Furniture. Rate us, upload an image, and write your feedback.
// //           </p>
// //         </div>

// //         {/* Review Form */}
// //         <form
// //           onSubmit={handleSubmit}
// //           className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mb-12"
// //         >
// //           <input
// //             type="text"
// //             placeholder="Your Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             className="w-full border p-2 rounded mb-4"
// //             required
// //           />

// //           {/* Star Rating Input */}
// //           <div className="flex items-center space-x-2 mb-4">
// //             {[1, 2, 3, 4, 5].map((star) => (
// //               <Star
// //                 key={star}
// //                 onClick={() => setRating(star)}
// //                 className={`h-8 w-8 cursor-pointer transition 
// //                   ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
// //               />
// //             ))}
// //           </div>

// //           <textarea
// //             placeholder="Write your review"
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //             className="w-full border p-2 rounded mb-4"
// //             required
// //           />

// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={(e) => setImage(e.target.files?.[0] || null)}
// //             className="mb-4"
// //           />

// //           <button
// //             type="submit"
// //             className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
// //           >
// //             Submit Review
// //           </button>
// //         </form>

// //         {/* Display Reviews */}
// //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //           {reviews.length === 0 && (
// //             <p className="text-center text-muted-foreground w-full">
// //               No reviews yet. Be the first to share your feedback!
// //             </p>
// //           )}

// //           {reviews.map((review) => (
// //             <Card key={review.id} className="shadow-lg">
// //               <CardContent className="p-6">
// //                 <div className="flex items-center space-x-1 mb-3">
// //                   {[...Array(review.rating)].map((_, i) => (
// //                     <Star
// //                       key={i}
// //                       className="h-4 w-4 fill-yellow-400 text-yellow-400"
// //                     />
// //                   ))}
// //                 </div>
// //                 <p className="text-muted-foreground italic mb-3">
// //                   "{review.message}"
// //                 </p>
// //                 <div className="font-semibold">{review.name}</div>
// //                 {review.imageUrl && (
// //                   <img
// //                     src={review.imageUrl}
// //                     alt="Customer"
// //                     className="mt-3 w-full h-40 object-cover rounded-lg"
// //                   />
// //                 )}
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }





// // "use client"

// // import { Card, CardContent } from "@/components/ui/card"
// // import { Star, Quote } from "lucide-react"
// // import { useState, useEffect } from "react"

// // // Static testimonials fallback
// // const staticTestimonials = [
// //   {
// //     id: 1,
// //     name: "Rajesh Kumar",
// //     location: "Mumbai",
// //     rating: 5,
// //     text: "Krishna Furniture transformed our home with their beautiful dining set. The craftsmanship is exceptional and Mohanlal's attention to detail is remarkable. Highly recommended!",
// //     project: "Dining Room Furniture",
// //   },
// //   {
// //     id: 2,
// //     name: "Priya Sharma",
// //     location: "Delhi",
// //     rating: 5,
// //     text: "The ceiling work done by Krishna Furniture is absolutely stunning. They completed the project on time and the quality exceeded our expectations. Professional service throughout.",
// //     project: "Ceiling Design",
// //   },
// //   {
// //     id: 3,
// //     name: "Amit Patel",
// //     location: "Ahmedabad",
// //     rating: 5,
// //     text: "We got our entire office furniture from Krishna Furniture. The modern designs combined with traditional craftsmanship make their work stand out. Great value for money!",
// //     project: "Office Furniture",
// //   },
// //   {
// //     id: 4,
// //     name: "Sunita Gupta",
// //     location: "Pune",
// //     rating: 5,
// //     text: "The aluminum work for our windows and doors was completed flawlessly. The team is professional, punctual, and delivers exactly what they promise. Very satisfied with the service.",
// //     project: "Aluminum Work",
// //   },
// // ]

// // export function TestimonialsSection() {
// //   const [reviews, setReviews] = useState<any[]>([])

// //   const fetchReviews = async () => {
// //     try {
// //       const res = await fetch("/api/reviews")
// //       const data = await res.json()
// //       setReviews(data)
// //     } catch (err) {
// //       console.error("Error fetching reviews:", err)
// //     }
// //   }

// //   useEffect(() => {
// //     fetchReviews()
// //   }, [])

// //   // Form state
// //   const [name, setName] = useState("")
// //   const [rating, setRating] = useState(0)
// //   const [message, setMessage] = useState("")
// //   const [image, setImage] = useState<File | null>(null)

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     if (!rating) return alert("Please select a rating!")

// //     const formData = new FormData()
// //     formData.append("name", name)
// //     formData.append("rating", rating.toString())
// //     formData.append("message", message)
// //     if (image) formData.append("image", image)

// //     await fetch("/api/reviews", {
// //       method: "POST",
// //       body: formData,
// //     })

// //     setName("")
// //     setRating(0)
// //     setMessage("")
// //     setImage(null)
// //     fetchReviews()
// //   }

// //   // Display reviews: agar backend reviews available hain, wahi show karo; warna static
// //   const displayReviews = reviews.length > 0 ? reviews : staticTestimonials

// //   return (
// //     <section className="py-16 bg-muted/30">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Heading */}
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
// //             What Our Customers Say
// //           </h2>
// //           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
// //             Share your experience with Krishna Furniture. Rate us, upload an image, and write your feedback.
// //           </p>
// //         </div>

// //         {/* Review Form */}
// //         <form
// //           onSubmit={handleSubmit}
// //           className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mb-12"
// //         >
// //           <input
// //             type="text"
// //             placeholder="Your Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             className="w-full border p-2 rounded mb-4"
// //             required
// //           />

// //           {/* Star Rating Input */}
// //           <div className="flex items-center space-x-2 mb-4">
// //             {[1, 2, 3, 4, 5].map((star) => (
// //               <Star
// //                 key={star}
// //                 onClick={() => setRating(star)}
// //                 className={`h-8 w-8 cursor-pointer transition ${
// //                   star <= rating
// //                     ? "fill-yellow-400 text-yellow-400"
// //                     : "text-gray-300"
// //                 }`}
// //               />
// //             ))}
// //           </div>

// //           <textarea
// //             placeholder="Write your review"
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //             className="w-full border p-2 rounded mb-4"
// //             required
// //           />

// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={(e) => setImage(e.target.files?.[0] || null)}
// //             className="mb-4"
// //           />

// //           <button
// //             type="submit"
// //             className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
// //           >
// //             Submit Review
// //           </button>
// //         </form>

// //         {/* Display Reviews */}
// //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //           {displayReviews.map((review) => (
// //             <Card key={review.id} className="shadow-lg">
// //               <CardContent className="p-6">
// //                 <div className="flex items-center space-x-1 mb-3">
// //                   {[...Array(review.rating)].map((_, i) => (
// //                     <Star
// //                       key={i}
// //                       className="h-4 w-4 fill-yellow-400 text-yellow-400"
// //                     />
// //                   ))}
// //                 </div>
// //                 <p className="text-muted-foreground italic mb-3">
// //                   "{review.text || review.message}"
// //                 </p>
// //                 <div className="font-semibold">{review.name}</div>
// //                 <div className="text-sm text-muted-foreground">
// //                   {review.location || review.project || ""}
// //                 </div>
// //                 {review.imageUrl && (
// //                   <img
// //                     src={review.imageUrl}
// //                     alt="Customer"
// //                     className="mt-3 w-full h-40 object-cover rounded-lg"
// //                   />
// //                 )}
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }










// // "use client"

// // import { Card, CardContent } from "@/components/ui/card"
// // import { Star } from "lucide-react"
// // import { useState, useEffect } from "react"

// // // Static testimonials fallback (agar backend empty ho)
// // const staticTestimonials = [
// //   {
// //     id: 1,
// //     name: "Rajesh Kumar",
// //     location: "Mumbai",
// //     rating: 5,
// //     text: "Krishna Furniture transformed our home with their beautiful dining set. The craftsmanship is exceptional. Highly recommended!",
// //     project: "Dining Room Furniture",
// //   },
// //   {
// //     id: 2,
// //     name: "Priya Sharma",
// //     location: "Delhi",
// //     rating: 4,
// //     text: "The ceiling work done by Krishna Furniture is absolutely stunning. Completed on time and great quality.",
// //     project: "Ceiling Design",
// //   },
// //   {
// //     id: 3,
// //     name: "Amit Patel",
// //     location: "Ahmedabad",
// //     rating: 5,
// //     text: "We got our entire office furniture from Krishna Furniture. Modern + traditional designs, great value for money!",
// //     project: "Office Furniture",
// //   },
// //   {
// //     id: 4,
// //     name: "Sunita Gupta",
// //     location: "Pune",
// //     rating: 5,
// //     text: "The aluminum work for our windows and doors was completed flawlessly. Very professional and punctual.",
// //     project: "Aluminum Work",
// //   },
// // ]

// // export function TestimonialsSection() {
// //   const [reviews, setReviews] = useState<any[]>([])
// //   const [currentIndex, setCurrentIndex] = useState(0)

// //   // Fetch backend reviews if available
// //   const fetchReviews = async () => {
// //     try {
// //       const res = await fetch("/api/reviews")
// //       const data = await res.json()
// //       setReviews(data)
// //     } catch {
// //       setReviews(staticTestimonials)
// //     }
// //   }

// //   useEffect(() => {
// //     fetchReviews()
// //   }, [])

// //   // Auto slide after 4s
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prev) =>
// //         prev + 1 >= (reviews.length || staticTestimonials.length) ? 0 : prev + 1
// //       )
// //     }, 4000)
// //     return () => clearInterval(interval)
// //   }, [reviews])

// //   const displayReviews = reviews.length > 0 ? reviews : staticTestimonials
// //   const currentReview = displayReviews[currentIndex]

// //   return (
// //     <section className="py-16 bg-muted/30 overflow-hidden">
// //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Heading */}
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
// //             What Our Customers Say
// //           </h2>
// //           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
// //             Genuine feedback from our happy customers
// //           </p>
// //         </div>

// //         {/* Testimonial Card */}
// //         <Card className="shadow-lg">
// //           <CardContent className="p-8 transition-all duration-700 ease-in-out">
// //             {/* Rating Stars */}
// //             <div className="flex items-center justify-center space-x-1 mb-4">
// //               {[...Array(currentReview.rating)].map((_, i) => (
// //                 <Star
// //                   key={i}
// //                   className="h-5 w-5 fill-yellow-400 text-yellow-400"
// //                 />
// //               ))}
// //             </div>

// //             {/* Review Text */}
// //             <p className="text-lg text-muted-foreground italic mb-6 text-center">
// //               "{currentReview.text || currentReview.message}"
// //             </p>

// //             {/* Reviewer Info */}
// //             <div className="text-center">
// //               <div className="font-semibold text-foreground text-lg">
// //                 {currentReview.name}
// //               </div>
// //               <div className="text-muted-foreground text-sm">
// //                 {currentReview.location || currentReview.project}
// //               </div>

// //               {/* Optional Image */}
// //               {currentReview.imageUrl && (
// //                 <img
// //                   src={currentReview.imageUrl}
// //                   alt="Customer"
// //                   className="mx-auto mt-4 w-40 h-40 object-cover rounded-full shadow"
// //                 />
// //               )}
// //             </div>
// //           </CardContent>
// //         </Card>

// //         {/* Dots Indicator */}
// //         <div className="flex justify-center space-x-2 mt-6">
// //           {displayReviews.map((_, idx) => (
// //             <button
// //               key={idx}
// //               onClick={() => setCurrentIndex(idx)}
// //               className={`w-3 h-3 rounded-full ${
// //                 idx === currentIndex ? "bg-primary" : "bg-gray-300"
// //               }`}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }








// // "use client"

// // import { useState } from "react"
// // import { Star } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Card, CardContent } from "@/components/ui/card"

// // export function ReviewForm() {
// //   const [rating, setRating] = useState(0)
// //   const [hover, setHover] = useState(0)
// //   const [message, setMessage] = useState("")
// //   const [image, setImage] = useState<File | null>(null)
// //   const [preview, setPreview] = useState<string | null>(null)

// //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files[0]) {
// //       const file = e.target.files[0]
// //       setImage(file)
// //       setPreview(URL.createObjectURL(file))
// //     }
// //   }

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     if (!rating || !message) {
// //       alert("Please give a rating and write a message.")
// //       return
// //     }

// //     const formData = new FormData()
// //     formData.append("rating", String(rating))
// //     formData.append("message", message)
// //     if (image) formData.append("image", image)

// //     try {
// //       await fetch("/api/reviews", {
// //         method: "POST",
// //         body: formData,
// //       })
// //       alert("Thank you for your review! 🎉")
// //       setRating(0)
// //       setMessage("")
// //       setImage(null)
// //       setPreview(null)
// //     } catch (error) {
// //       alert("Something went wrong, please try again.")
// //     }
// //   }

// //   return (
// //     <section className="py-12 bg-background">
// //       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <Card>
// //           <CardContent className="p-8">
// //             <h2 className="text-2xl font-bold mb-6 text-center">
// //               Share Your Review
// //             </h2>

// //             <form onSubmit={handleSubmit} className="space-y-6">
// //               {/* Rating Stars */}
// //               <div className="flex justify-center mb-4">
// //                 {[...Array(5)].map((_, index) => {
// //                   const starValue = index + 1
// //                   return (
// //                     <Star
// //                       key={index}
// //                       onClick={() => setRating(starValue)}
// //                       onMouseEnter={() => setHover(starValue)}
// //                       onMouseLeave={() => setHover(0)}
// //                       className={`h-8 w-8 cursor-pointer ${
// //                         starValue <= (hover || rating)
// //                           ? "text-yellow-400 fill-yellow-400"
// //                           : "text-gray-300"
// //                       }`}
// //                     />
// //                   )
// //                 })}
// //               </div>

// //               {/* Message */}
// //               <div>
// //                 <Textarea
// //                   placeholder="Write your review..."
// //                   value={message}
// //                   onChange={(e) => setMessage(e.target.value)}
// //                   required
// //                 />
// //               </div>

// //               {/* Image Upload */}
// //               <div>
// //                 <Input
// //                   type="file"
// //                   accept="image/*"
// //                   onChange={handleImageChange}
// //                 />
// //                 {preview && (
// //                   <img
// //                     src={preview}
// //                     alt="Preview"
// //                     className="mt-4 w-32 h-32 object-cover rounded-lg border mx-auto"
// //                   />
// //                 )}
// //               </div>

// //               {/* Submit Button */}
// //               <Button type="submit" className="w-full">
// //                 Submit Review
// //               </Button>
// //             </form>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </section>
// //   )
// // }












// // "use client"

// // import { useState, useEffect } from "react"
// // import { Star } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Card, CardContent } from "@/components/ui/card"

// // // Static testimonials fallback
// // const staticTestimonials = [
// //   {
// //     id: 1,
// //     name: "Rajesh Kumar",
// //     location: "Mumbai",
// //     rating: 5,
// //     text: "Krishna Furniture transformed our home with their beautiful dining set. Highly recommended!",
// //   },
// //   {
// //     id: 2,
// //     name: "Priya Sharma",
// //     location: "Delhi",
// //     rating: 4,
// //     text: "The ceiling work done by Krishna Furniture is stunning. Completed on time and great quality.",
// //   },
// // ]

// // export function TestimonialsSection() {
// //   const [reviews, setReviews] = useState<any[]>([])
// //   const [currentIndex, setCurrentIndex] = useState(0)
// //   const [rating, setRating] = useState(0)
// //   const [hover, setHover] = useState(0)
// //   const [message, setMessage] = useState("")
// //   const [name, setName] = useState("")
// //   const [image, setImage] = useState<File | null>(null)
// //   const [preview, setPreview] = useState<string | null>(null)

// //   // Fetch reviews from backend
// //   const fetchReviews = async () => {
// //     try {
// //       const res = await fetch("/api/reviews")
// //       const data = await res.json()
// //       setReviews(data)
// //     } catch (err) {
// //       setReviews(staticTestimonials)
// //       console.error("Error fetching reviews:", err)
// //     }
// //   }

// //   useEffect(() => {
// //     fetchReviews()
// //   }, [])

// //   // Auto slide
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       const length = reviews.length || staticTestimonials.length
// //       setCurrentIndex((prev) => (prev + 1) % length)
// //     }, 4000)
// //     return () => clearInterval(interval)
// //   }, [reviews])

// //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files[0]) {
// //       const file = e.target.files[0]
// //       setImage(file)
// //       setPreview(URL.createObjectURL(file))
// //     }
// //   }

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     if (!rating || !message || !name) {
// //       alert("Please provide name, rating and message.")
// //       return
// //     }

// //     const formData = new FormData()
// //     formData.append("name", name)
// //     formData.append("rating", String(rating))
// //     formData.append("message", message)
// //     if (image) formData.append("image", image)

// //     try {
// //       const res = await fetch("/api/reviews", {
// //         method: "POST",
// //         body: formData,
// //       })
// //       if (!res.ok) throw new Error("Failed to submit review")

// //       // Reset form
// //       setRating(0)
// //       setHover(0)
// //       setMessage("")
// //       setName("")
// //       setImage(null)
// //       setPreview(null)

// //       // Refresh reviews immediately
// //       fetchReviews()
// //       alert("Thank you for your review! 🎉")
// //     } catch (err) {
// //       console.error(err)
// //       alert("Failed to submit review, please try again.")
// //     }
// //   }

// //   const displayReviews = reviews.length > 0 ? reviews : staticTestimonials
// //   const currentReview = displayReviews[currentIndex]

// //   return (
// //     <section className="py-16 bg-muted/30">
// //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
// //         {/* Review Form */}
// //         <Card>
// //           <CardContent className="p-8">
// //             <h2 className="text-2xl font-bold mb-6 text-center">Share Your Review</h2>
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               <Input
// //                 placeholder="Your Name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 required
// //               />
// //               <div className="flex justify-center mb-4">
// //                 {[...Array(5)].map((_, index) => {
// //                   const starValue = index + 1
// //                   return (
// //                     <Star
// //                       key={index}
// //                       onClick={() => setRating(starValue)}
// //                       onMouseEnter={() => setHover(starValue)}
// //                       onMouseLeave={() => setHover(0)}
// //                       className={`h-8 w-8 cursor-pointer ${
// //                         starValue <= (hover || rating)
// //                           ? "text-yellow-400 fill-yellow-400"
// //                           : "text-gray-300"
// //                       }`}
// //                     />
// //                   )
// //                 })}
// //               </div>
// //               <Textarea
// //                 placeholder="Write your review..."
// //                 value={message}
// //                 onChange={(e) => setMessage(e.target.value)}
// //                 required
// //               />
// //               <Input type="file" accept="image/*" onChange={handleImageChange} />
// //               {preview && (
// //                 <img
// //                   src={preview}
// //                   alt="Preview"
// //                   className="mt-2 w-32 h-32 object-cover rounded-lg border mx-auto"
// //                 />
// //               )}
// //               <Button type="submit" className="w-full">
// //                 Submit Review
// //               </Button>
// //             </form>
// //           </CardContent>
// //         </Card>

// //         {/* Testimonial Slider */}
// //         <Card className="shadow-lg">
// //           <CardContent className="p-8 transition-all duration-700 ease-in-out">
// //             <div className="flex justify-center space-x-1 mb-4">
// //               {[...Array(currentReview.rating)].map((_, i) => (
// //                 <Star
// //                   key={i}
// //                   className="h-5 w-5 fill-yellow-400 text-yellow-400"
// //                 />
// //               ))}
// //             </div>
// //             <p className="text-lg text-muted-foreground italic mb-6 text-center">
// //               "{currentReview.text}"
// //             </p>
// //             <div className="text-center">
// //               <div className="font-semibold text-foreground text-lg">{currentReview.name}</div>
// //               <div className="text-sm text-muted-foreground">{currentReview.location}</div>
// //               {currentReview.imageUrl && (
// //                 <img
// //                   src={currentReview.imageUrl}
// //                   alt="Customer"
// //                   className="mx-auto mt-4 w-40 h-40 object-cover rounded-full shadow"
// //                 />
// //               )}
// //             </div>
// //           </CardContent>
// //         </Card>

// //         {/* Dots Indicator */}
// //         <div className="flex justify-center space-x-2">
// //           {displayReviews.map((_, idx) => (
// //             <button
// //               key={idx}
// //               onClick={() => setCurrentIndex(idx)}
// //               className={`w-3 h-3 rounded-full ${
// //                 idx === currentIndex ? "bg-primary" : "bg-gray-300"
// //               }`}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }













// // "use client"

// // import { useState, useEffect } from "react"
// // import { Star } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Card, CardContent } from "@/components/ui/card"

// // // Static fallback testimonials
// // const staticTestimonials = [
// //   {
// //     id: 1,
// //     name: "Rajesh Kumar",
// //     location: "Mumbai",
// //     rating: 5,
// //     text: "Krishna Furniture transformed our home with their beautiful dining set. Highly recommended!",
// //   },
// //   {
// //     id: 2,
// //     name: "Priya Sharma",
// //     location: "Delhi",
// //     rating: 4,
// //     text: "The ceiling work done by Krishna Furniture is stunning. Completed on time and great quality.",
// //   },
// // ]

// // export function TestimonialsSection() {
// //   const [reviews, setReviews] = useState<any[]>([])
// //   const [currentIndex, setCurrentIndex] = useState(0)

// //   // Form state
// //   const [rating, setRating] = useState(0)
// //   const [hover, setHover] = useState(0)
// //   const [message, setMessage] = useState("")
// //   const [name, setName] = useState("")
// //   const [image, setImage] = useState<File | null>(null)
// //   const [preview, setPreview] = useState<string | null>(null)

// //   // Fetch reviews from backend
// //   const fetchReviews = async () => {
// //     try {
// //       const res = await fetch("/api/reviews")
// //       const data = await res.json()
// //       setReviews(data)
// //     } catch (err) {
// //       console.error("Error fetching reviews:", err)
// //       setReviews(staticTestimonials)
// //     }
// //   }

// //   useEffect(() => {
// //     fetchReviews()
// //   }, [])

// //   // Auto-slide
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       const length = reviews.length || staticTestimonials.length
// //       setCurrentIndex((prev) => (prev + 1) % length)
// //     }, 4000)
// //     return () => clearInterval(interval)
// //   }, [reviews])

// //   // Image preview
// //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files[0]) {
// //       const file = e.target.files[0]
// //       setImage(file)
// //       setPreview(URL.createObjectURL(file))
// //     }
// //   }

// //   // Submit review
// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     if (!rating || !message || !name) {
// //       alert("Please provide name, rating, and message.")
// //       return
// //     }

// //     const formData = new FormData()
// //     formData.append("name", name)
// //     formData.append("rating", String(rating))
// //     formData.append("message", message)
// //     if (image) formData.append("image", image)

// //     try {
// //       const res = await fetch("/api/reviews", {
// //         method: "POST",
// //         body: formData,
// //       })
// //       if (!res.ok) throw new Error("Failed to submit review")

// //       // Reset form
// //       setRating(0)
// //       setHover(0)
// //       setMessage("")
// //       setName("")
// //       setImage(null)
// //       setPreview(null)

// //       // Refresh reviews immediately
// //       fetchReviews()
// //       alert("Thank you for your review! 🎉")
// //     } catch (err) {
// //       console.error(err)
// //       alert("Failed to submit review, please try again.")
// //     }
// //   }

// //   const displayReviews = reviews.length > 0 ? reviews : staticTestimonials
// //   const currentReview = displayReviews[currentIndex]

// //   return (
// //     <section className="py-16 bg-muted/30">
// //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
// //         {/* Review Form */}
// //         <Card>
// //           <CardContent className="p-8">
// //             <h2 className="text-2xl font-bold mb-6 text-center">Share Your Review</h2>
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               <Input
// //                 placeholder="Your Name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 required
// //               />
// //               <div className="flex justify-center mb-4">
// //                 {[...Array(5)].map((_, index) => {
// //                   const starValue = index + 1
// //                   return (
// //                     <Star
// //                       key={index}
// //                       onClick={() => setRating(starValue)}
// //                       onMouseEnter={() => setHover(starValue)}
// //                       onMouseLeave={() => setHover(0)}
// //                       className={`h-8 w-8 cursor-pointer ${
// //                         starValue <= (hover || rating)
// //                           ? "text-yellow-400 fill-yellow-400"
// //                           : "text-gray-300"
// //                       }`}
// //                     />
// //                   )
// //                 })}
// //               </div>
// //               <Textarea
// //                 placeholder="Write your review..."
// //                 value={message}
// //                 onChange={(e) => setMessage(e.target.value)}
// //                 required
// //               />
// //               <Input type="file" accept="image/*" onChange={handleImageChange} />
// //               {preview && (
// //                 <img
// //                   src={preview}
// //                   alt="Preview"
// //                   className="mt-2 w-32 h-32 object-cover rounded-lg border mx-auto"
// //                 />
// //               )}
// //               <Button type="submit" className="w-full">
// //                 Submit Review
// //               </Button>
// //             </form>
// //           </CardContent>
// //         </Card>

// //         {/* Testimonial Slider */}
// //         <Card className="shadow-lg">
// //           <CardContent className="p-8 transition-all duration-700 ease-in-out">
// //             <div className="flex justify-center space-x-1 mb-4">
// //               {[...Array(currentReview.rating)].map((_, i) => (
// //                 <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
// //               ))}
// //             </div>
// //             <p className="text-lg text-muted-foreground italic mb-6 text-center">
// //               "{currentReview.text}"
// //             </p>
// //             <div className="text-center">
// //               <div className="font-semibold text-foreground text-lg">{currentReview.name}</div>
// //               <div className="text-sm text-muted-foreground">{currentReview.location}</div>
// //               {currentReview.imageUrl && (
// //                 <img
// //                   src={currentReview.imageUrl}
// //                   alt="Customer"
// //                   className="mx-auto mt-4 w-40 h-40 object-cover rounded-full shadow"
// //                 />
// //               )}
// //             </div>
// //           </CardContent>
// //         </Card>

// //         {/* Dots Indicator */}
// //         <div className="flex justify-center space-x-2">
// //           {displayReviews.map((_, idx) => (
// //             <button
// //               key={idx}
// //               onClick={() => setCurrentIndex(idx)}
// //               className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-primary" : "bg-gray-300"}`}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }




// "use client"

// import { useState, useEffect } from "react"
// import { Star } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent } from "@/components/ui/card"

// // Static fallback testimonials
// const staticTestimonials = [
//   {
//     id: 1,
//     name: "Rajesh Kumar",
//     location: "Mumbai",
//     rating: 5,
//     text: "Krishna Furniture transformed our home with their beautiful dining set. Highly recommended!",
//   },
//   {
//     id: 2,
//     name: "Priya Sharma",
//     location: "Delhi",
//     rating: 4,
//     text: "The ceiling work done by Krishna Furniture is stunning. Completed on time and great quality.",
//   },
// ]

// export function TestimonialsSection() {
//   const [reviews, setReviews] = useState<any[]>([])
//   const [currentIndex, setCurrentIndex] = useState(0)

//   // Form state
//   const [rating, setRating] = useState(0)
//   const [hover, setHover] = useState(0)
//   const [message, setMessage] = useState("")
//   const [name, setName] = useState("")
//   const [image, setImage] = useState<File | null>(null)
//   const [preview, setPreview] = useState<string | null>(null)

//   // Backend URL (replace with your backend host if different)
//   const BACKEND_URL = "http://localhost:5001"

//   // Fetch reviews from backend
//   const fetchReviews = async () => {
//     try {
//       const res = await fetch(`${BACKEND_URL}/api/reviews`)
//       const data = await res.json()
//       setReviews(data)
//     } catch (err) {
//       console.error("Error fetching reviews:", err)
//       setReviews(staticTestimonials)
//     }
//   }

//   useEffect(() => {
//     fetchReviews()
//   }, [])

//   // Auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const length = reviews.length || staticTestimonials.length
//       setCurrentIndex((prev) => (prev + 1) % length)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [reviews])

//   // Image preview
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0]
//       setImage(file)
//       setPreview(URL.createObjectURL(file))
//     }
//   }

//   // Submit review
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!rating || !message || !name) {
//       alert("Please provide name, rating, and message.")
//       return
//     }

//     const formData = new FormData()
//     formData.append("name", name)
//     formData.append("rating", String(rating))
//     formData.append("message", message)
//     if (image) formData.append("image", image)

//     try {
//       const res = await fetch(`${BACKEND_URL}/api/reviews`, {
//         method: "POST",
//         body: formData,
//       })
//       if (!res.ok) throw new Error("Failed to submit review")

//       // Reset form
//       setRating(0)
//       setHover(0)
//       setMessage("")
//       setName("")
//       setImage(null)
//       setPreview(null)

//       // Refresh reviews immediately
//       fetchReviews()
//       alert("Thank you for your review! 🎉")
//     } catch (err) {
//       console.error(err)
//       alert("Failed to submit review, please try again.")
//     }
//   }

//   const displayReviews = reviews.length > 0 ? reviews : staticTestimonials
//   const currentReview = displayReviews[currentIndex]

//   return (
//     <section className="py-16 bg-muted/30">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
//         {/* Review Form */}
//         <Card>
//           <CardContent className="p-8">
//             <h2 className="text-2xl font-bold mb-6 text-center">Share Your Review</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <Input
//                 placeholder="Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <div className="flex justify-center mb-4">
//                 {[...Array(5)].map((_, index) => {
//                   const starValue = index + 1
//                   return (
//                     <Star
//                       key={index}
//                       onClick={() => setRating(starValue)}
//                       onMouseEnter={() => setHover(starValue)}
//                       onMouseLeave={() => setHover(0)}
//                       className={`h-8 w-8 cursor-pointer ${
//                         starValue <= (hover || rating)
//                           ? "text-yellow-400 fill-yellow-400"
//                           : "text-gray-300"
//                       }`}
//                     />
//                   )
//                 })}
//               </div>
//               <Textarea
//                 placeholder="Write your review..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//               />
//               <Input type="file" accept="image/*" onChange={handleImageChange} />
//               {preview && (
//                 <img
//                   src={preview}
//                   alt="Preview"
//                   className="mt-2 w-32 h-32 object-cover rounded-lg border mx-auto"
//                 />
//               )}
//               <Button type="submit" className="w-full">
//                 Submit Review
//               </Button>
//             </form>
//           </CardContent>
//         </Card>

//         {/* Testimonial Slider */}
//         <Card className="shadow-lg">
//           <CardContent className="p-8 transition-all duration-700 ease-in-out">
//             <div className="flex justify-center space-x-1 mb-4">
//               {[...Array(currentReview.rating)].map((_, i) => (
//                 <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//               ))}
//             </div>
//             <p className="text-lg text-muted-foreground italic mb-6 text-center">
//               "{currentReview.text}"
//             </p>
//             <div className="text-center">
//               <div className="font-semibold text-foreground text-lg">{currentReview.name}</div>
//               <div className="text-sm text-muted-foreground">{currentReview.location}</div>
//               {currentReview.imageUrl && (
//                 <img
//                   src={`${BACKEND_URL}${currentReview.imageUrl}`}
//                   alt="Customer"
//                   className="mx-auto mt-4 w-40 h-40 object-cover rounded-full shadow"
//                 />
//               )}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Dots Indicator */}
//         <div className="flex justify-center space-x-2">
//           {displayReviews.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-primary" : "bg-gray-300"}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

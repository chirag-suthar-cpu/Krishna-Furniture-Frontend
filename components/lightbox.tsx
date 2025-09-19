"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LightboxProps {
  images: Array<{
    id: number
    title: string
    image: string
    description: string
  }>
  currentIndex: number
  isOpen: boolean
  onClose: () => void
}

export function Lightbox({ images, currentIndex, isOpen, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(currentIndex)

  useEffect(() => {
    setCurrent(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev > 0 ? prev - 1 : images.length - 1))
      } else if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : 0))
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, images.length, onClose])

  if (!isOpen) return null

  const currentImage = images[current]

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Previous button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
        onClick={() => setCurrent((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      {/* Next button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
        onClick={() => setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Image container */}
      <div className="max-w-4xl max-h-full flex flex-col items-center">
        <img
          src={currentImage.image || "/placeholder.svg"}
          alt={currentImage.title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />

        {/* Image info */}
        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-semibold mb-2">{currentImage.title}</h3>
          <p className="text-white/80">{currentImage.description}</p>
          <p className="text-white/60 text-sm mt-2">
            {current + 1} of {images.length}
          </p>
        </div>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  )
}

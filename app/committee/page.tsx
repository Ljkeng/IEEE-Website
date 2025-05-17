"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CommitteePage() {
  const [rotation, setRotation] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const committeeMembers = [
    {
      id: 1,
      name: "Committee Member 1",
      position: "Chair",
      image: "/images/member-placeholder.jpg",
    },
    {
      id: 2,
      name: "Committee Member 2",
      position: "Vice Chair",
      image: "/images/member-placeholder.jpg",
    },
    {
      id: 3,
      name: "Committee Member 3",
      position: "Secretary",
      image: "/images/member-placeholder.jpg",
    },
    {
      id: 4,
      name: "Committee Member 4",
      position: "Treasurer",
      image: "/images/member-placeholder.jpg",
    },
    {
      id: 5,
      name: "Committee Member 5",
      position: "Event Coordinator",
      image: "/images/member-placeholder.jpg",
    },
  ]

  // Auto-rotate the carousel
  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      rotateRight()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoRotate]) // Only depend on autoRotate to prevent infinite loop

  // Calculate the active index based on rotation
  useEffect(() => {
    const newIndex = Math.round(rotation / (360 / committeeMembers.length)) % committeeMembers.length
    setActiveIndex(newIndex < 0 ? committeeMembers.length + newIndex : newIndex)
  }, [rotation, committeeMembers.length])

  const rotateLeft = () => {
    setAutoRotate(false)
    setRotation((prev) => prev + 360 / committeeMembers.length)
  }

  const rotateRight = () => {
    setAutoRotate(false)
    setRotation((prev) => prev - 360 / committeeMembers.length)
  }

  const handleDotClick = (index: number) => {
    setAutoRotate(false)
    const targetRotation = -index * (360 / committeeMembers.length)
    setRotation(targetRotation)
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Header Section */}
      <div className="yellow-wave py-8 px-4 flex-shrink-0">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">Our Committee</h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            Meet the passionate team driving innovation and community in computer science at University of Malaya.
          </p>
        </div>
      </div>

      {/* Carousel Section - Takes remaining space */}
      <div className="flex-grow flex items-center justify-center py-8 px-4 overflow-hidden">
        <div className="carousel-container">
          <div className="carousel" style={{ transform: `rotateY(${rotation}deg)` }}>
            {committeeMembers.map((member, index) => {
              const theta = (index * 360) / committeeMembers.length
              const radius = 350 // Increased for more space

              return (
                <div
                  key={member.id}
                  className="carousel-card"
                  style={{
                    transform: `rotateY(${theta}deg) translateZ(${radius}px)`,
                    opacity:
                      Math.abs(((rotation % 360) + index * (360 / committeeMembers.length)) % 360) < 90 ||
                      Math.abs(((rotation % 360) + index * (360 / committeeMembers.length)) % 360) > 270
                        ? 1
                        : 0.5,
                  }}
                >
                  <div className="carousel-card-inner">
                    <div className="aspect-square bg-gray-300 w-40 h-40 md:w-48 md:h-48"></div>
                    <div className="p-3">
                      <h3 className="font-semibold text-base md:text-lg">{member.name}</h3>
                      <p className="text-gray-600 text-sm">{member.position}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-8 gap-4">
        <button
          onClick={rotateLeft}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Previous member"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {committeeMembers.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-6 h-1 rounded-full ${i === activeIndex ? "bg-[hsl(var(--ieee-yellow))]" : "bg-gray-300"}`}
              aria-label={`Go to member ${i + 1}`}
            ></button>
          ))}
        </div>

        <button
          onClick={rotateRight}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Next member"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-3 flex-shrink-0">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm">Built by IEEE Team</p>
          <p className="text-xs md:text-sm">© IEEE 2025</p>
          <div className="flex gap-2">
            <div className="h-3 w-3 md:h-4 md:w-4 bg-white rounded-full"></div>
            <div className="h-3 w-3 md:h-4 md:w-4 bg-white rounded-full"></div>
            <div className="h-3 w-3 md:h-4 md:w-4 bg-white rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

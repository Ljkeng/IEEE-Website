"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, Users, Calendar, DollarSign, Camera, Wrench, Code } from "lucide-react"

interface Member {
  id: number
  name: string
  position: string
  image: string
}

interface Department {
  id: number
  name: string
  icon: React.ReactNode
  description: string
  hod: Member
  members: Member[]
}

export default function CommitteePage() {
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null)

  // HICOM Members
  const hicomMembers: Member[] = [
    { id: 1, name: "Alex Chen", position: "Director", image: "/images/member-placeholder.jpg" },
    { id: 2, name: "Sarah Wong", position: "Vice Director", image: "/images/member-placeholder.jpg" },
    { id: 3, name: "Michael Tan", position: "Secretary", image: "/images/member-placeholder.jpg" },
    { id: 4, name: "Emily Lim", position: "Vice Secretary", image: "/images/member-placeholder.jpg" },
    { id: 5, name: "David Lee", position: "Treasurer", image: "/images/member-placeholder.jpg" },
    { id: 6, name: "Jessica Ng", position: "Vice Treasurer", image: "/images/member-placeholder.jpg" },
  ]

  // Departments
  const departments: Department[] = [
    {
      id: 1,
      name: "Event Management",
      icon: <Calendar className="w-12 h-12" />,
      description: "Organizes and coordinates all IEEE events, workshops, and activities throughout the year.",
      hod: { id: 1, name: "Ryan Kumar", position: "HOD", image: "/images/member-placeholder.jpg" },
      members: [
        { id: 2, name: "Lisa Chen", position: "Assistant Manager", image: "/images/member-placeholder.jpg" },
        { id: 3, name: "Mark Johnson", position: "Event Coordinator", image: "/images/member-placeholder.jpg" },
        { id: 4, name: "Amy Tan", position: "Logistics Lead", image: "/images/member-placeholder.jpg" },
        { id: 5, name: "Kevin Wong", position: "Volunteer Manager", image: "/images/member-placeholder.jpg" },
        { id: 6, name: "Sophie Liu", position: "Event Assistant", image: "/images/member-placeholder.jpg" },
        { id: 7, name: "James Park", position: "Event Assistant", image: "/images/member-placeholder.jpg" },
      ],
    },
    {
      id: 2,
      name: "Sponsorship and Partnerships",
      icon: <DollarSign className="w-12 h-12" />,
      description:
        "Manages corporate relationships, sponsorship deals, and strategic partnerships for the organization.",
      hod: { id: 1, name: "Michelle Zhang", position: "HOD", image: "/images/member-placeholder.jpg" },
      members: [
        { id: 2, name: "Daniel Kim", position: "Partnership Manager", image: "/images/member-placeholder.jpg" },
        { id: 3, name: "Rachel Green", position: "Sponsor Relations", image: "/images/member-placeholder.jpg" },
        { id: 4, name: "Tony Lim", position: "Business Development", image: "/images/member-placeholder.jpg" },
        { id: 5, name: "Grace Ho", position: "Account Manager", image: "/images/member-placeholder.jpg" },
        { id: 6, name: "Ben Chow", position: "Partnership Assistant", image: "/images/member-placeholder.jpg" },
      ],
    },
    {
      id: 3,
      name: "Content Creation and Social Media",
      icon: <Camera className="w-12 h-12" />,
      description: "Creates engaging content, manages social media presence, and handles all multimedia requirements.",
      hod: { id: 1, name: "Chloe Wang", position: "HOD", image: "/images/member-placeholder.jpg" },
      members: [
        { id: 2, name: "Alex Rivera", position: "Content Manager", image: "/images/member-placeholder.jpg" },
        { id: 3, name: "Maya Patel", position: "Social Media Lead", image: "/images/member-placeholder.jpg" },
        { id: 4, name: "Jake Thompson", position: "Graphic Designer", image: "/images/member-placeholder.jpg" },
        { id: 5, name: "Zoe Chen", position: "Video Editor", image: "/images/member-placeholder.jpg" },
        { id: 6, name: "Sam Lee", position: "Photographer", image: "/images/member-placeholder.jpg" },
        { id: 7, name: "Nina Kumar", position: "Content Writer", image: "/images/member-placeholder.jpg" },
      ],
    },
    {
      id: 4,
      name: "Logistics",
      icon: <Wrench className="w-12 h-12" />,
      description:
        "Handles venue management, equipment setup, and ensures smooth execution of all physical arrangements.",
      hod: { id: 1, name: "Marcus Tan", position: "HOD", image: "/images/member-placeholder.jpg" },
      members: [
        { id: 2, name: "Oliver Smith", position: "Logistics Manager", image: "/images/member-placeholder.jpg" },
        { id: 3, name: "Emma Wilson", position: "Equipment Lead", image: "/images/member-placeholder.jpg" },
        { id: 4, name: "Lucas Brown", position: "Venue Coordinator", image: "/images/member-placeholder.jpg" },
        { id: 5, name: "Aria Davis", position: "Setup Assistant", image: "/images/member-placeholder.jpg" },
        { id: 6, name: "Noah Garcia", position: "Transport Manager", image: "/images/member-placeholder.jpg" },
      ],
    },
    {
      id: 5,
      name: "Education and Technical Workshops",
      icon: <Users className="w-12 h-12" />,
      description: "Develops educational programs, technical workshops, and skill development initiatives for members.",
      hod: { id: 1, name: "Dr. Jennifer Liu", position: "HOD", image: "/images/member-placeholder.jpg" },
      members: [
        { id: 2, name: "Andrew Chang", position: "Workshop Manager", image: "/images/member-placeholder.jpg" },
        { id: 3, name: "Priya Sharma", position: "Curriculum Lead", image: "/images/member-placeholder.jpg" },
        { id: 4, name: "Chris Martinez", position: "Technical Trainer", image: "/images/member-placeholder.jpg" },
        { id: 5, name: "Hannah Kim", position: "Education Assistant", image: "/images/member-placeholder.jpg" },
        { id: 6, name: "Ryan O'Connor", position: "Workshop Assistant", image: "/images/member-placeholder.jpg" },
        { id: 7, name: "Lily Zhang", position: "Program Coordinator", image: "/images/member-placeholder.jpg" },
      ],
    },
    {
      id: 6,
      name: "IT and Digital Infrastructure",
      icon: <Code className="w-12 h-12" />,
      description:
        "Maintains digital systems, website development, and provides technical support for all digital initiatives.",
      hod: { id: 1, name: "Kevin Chen", position: "HOD", image: "/images/member-placeholder.jpg" },
      members: [
        { id: 2, name: "Tyler Johnson", position: "Lead Developer", image: "/images/member-placeholder.jpg" },
        { id: 3, name: "Sophia Rodriguez", position: "System Admin", image: "/images/member-placeholder.jpg" },
        { id: 4, name: "Ethan Williams", position: "Web Developer", image: "/images/member-placeholder.jpg" },
        { id: 5, name: "Mia Thompson", position: "Database Manager", image: "/images/member-placeholder.jpg" },
        { id: 6, name: "Jacob Anderson", position: "IT Support", image: "/images/member-placeholder.jpg" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* HICOM Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2 font-mono">// Meet Our HICOM</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            {hicomMembers.map((member) => (
              <div key={member.id} className="group relative">
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                  <div className="p-4 text-center bg-slate-800 text-white">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-cyan-400 text-sm">⟹ {member.position} ⟸</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 font-mono">// Meet Our Department Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {departments.map((department) => (
              <div
                key={department.id}
                onClick={() => setSelectedDepartment(department)}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-slate-700/50 hover:border-cyan-400/50 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">{department.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-4">{department.name}</h3>
                <p className="text-cyan-400 text-sm font-mono">→ Click me to learn more</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Modal */}
      {selectedDepartment && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 border border-cyan-500/50 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-cyan-400">{selectedDepartment.name}</h2>
                <button
                  onClick={() => setSelectedDepartment(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* HOD Section */}
                <div className="lg:col-span-1">
                  <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={selectedDepartment.hod.image || "/placeholder.svg"}
                        alt={selectedDepartment.hod.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="bg-cyan-500 text-black px-2 py-1 rounded text-sm font-bold mb-2">
                      {selectedDepartment.hod.position}
                    </div>
                    <h3 className="text-white font-semibold text-lg">{selectedDepartment.hod.name}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mt-4 leading-relaxed">{selectedDepartment.description}</p>
                </div>

                {/* Members Section */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedDepartment.members.map((member) => (
                      <div key={member.id} className="group relative">
                        <div className="relative w-full aspect-square">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-lg flex items-end">
                            <div className="p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="font-semibold text-sm">{member.name}</p>
                              <p className="text-xs text-cyan-400">{member.position}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

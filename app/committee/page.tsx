"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Department {
  name: string
  members: Array<{
    id: number
    name: string
    position: string
    image: string
  }>
}

export default function CommitteePage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const departments: Department[] = [
    {
      name: "Technical",
      members: [
        // Add 8 members
      ]
    },
    {
      name: "Events",
      members: [
        {
          id: 1,
          name: "Event Coordinator",
          position: "Lead",
          image: "/images/member-placeholder.jpg"
        },
        {
          id: 2,
          name: "Event Planner",
          position: "Assistant",
          image: "/images/member-placeholder.jpg"
        },
        {
          id: 3,
          name: "Venue Manager",
          position: "Coordinator",
          image: "/images/member-placeholder.jpg"
        },
        {
          id: 4,
          name: "Logistics Coordinator",
          position: "Specialist",
          image: "/images/member-placeholder.jpg"
        },
        {
          id: 5,
          name: "Sponsorship Manager",
          position: "Lead",
          image: "/images/member-placeholder.jpg"
        },
        {
          id: 6,
          name: "Marketing Specialist",
          position: "Coordinator",
          image: "/images/member-placeholder.jpg"
        },
        {
          id: 7,
          name: "Volunteer Coordinator",
          position: "Manager",
          image: "/images/member-placeholder.jpg"
        },
        {
          id: 8,
          name: "Technical Support",
          position: "Specialist",
          image: "/images/member-placeholder.jpg"
        }
      ]
    },
    {
      name: "Publicity",
      members: [
        // Add 8 members
      ]
    },
    {
      name: "Academics",
      members: [
        // Add 8 members
      ]
    },
    {
      name: "Welfare",
      members: [
        // Add 8 members
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Committee</h1>

        {/* Department Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => setSelectedDepartment(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              !selectedDepartment
                ? 'bg-[hsl(var(--ieee-blue))] text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            All Departments
          </button>
          {departments.map((department) => (
            <button
              key={department.name}
              onClick={() => setSelectedDepartment(department.name)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedDepartment === department.name
                  ? 'bg-[hsl(var(--ieee-blue))] text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {department.name}
            </button>
          ))}
        </div>

        {/* Department Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedDepartment
            ? departments.find((d) => d.name === selectedDepartment)?.members
            : departments.flatMap((d) => d.members)
          )?.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users, X, ArrowRight } from "lucide-react"
import { Event, events } from "../data"

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all")

  const filteredEvents = events.filter((event) => {
    if (filter === "upcoming") return event.isUpcoming
    if (filter === "past") return !event.isUpcoming
    return true
  })

  const upcomingEvents = events.filter((event) => event.isUpcoming)
  const pastEvents = events.filter((event) => !event.isUpcoming)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">IEEE Events</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our latest workshops, seminars, and networking events designed to enhance your technical skills and
            professional growth.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-cyan-500/30">
            {["all", "upcoming", "past"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType as any)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  filter === filterType
                    ? "bg-cyan-500 text-black"
                    : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                {filterType === "upcoming" && ` (${upcomingEvents.length})`}
                {filterType === "past" && ` (${pastEvents.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.isUpcoming ? "bg-green-500 text-black" : "bg-gray-500 text-white"
                      }`}
                    >
                      {event.isUpcoming ? "Upcoming" : "Past Event"}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-cyan-500 text-black px-2 py-1 rounded text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 border border-cyan-500/50 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Modal Header with Image */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedEvent.image || "/placeholder.svg"}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block ${
                      selectedEvent.isUpcoming ? "bg-green-500 text-black" : "bg-gray-500 text-white"
                    }`}
                  >
                    {selectedEvent.isUpcoming ? "Upcoming Event" : "Past Event"}
                  </span>
                  <h2 className="text-3xl font-bold text-white">{selectedEvent.title}</h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Event Details */}
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">Event Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="text-white font-medium">Date</p>
                          <p className="text-gray-300">{new Date(selectedEvent.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="text-white font-medium">Time</p>
                          <p className="text-gray-300">{selectedEvent.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="text-white font-medium">Location</p>
                          <p className="text-gray-300">{selectedEvent.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="text-white font-medium">Attendees</p>
                          <p className="text-gray-300">{selectedEvent.attendees} people</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">About This Event</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedEvent.description}</p>

                    {selectedEvent.isUpcoming && (
                      <div className="mt-6">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium px-6 py-3 rounded-lg transition-colors">
                          Register Now
                        </button>
                      </div>
                    )}
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

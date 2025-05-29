import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, ArrowRight, Code, Lightbulb, Network } from "lucide-react"

export default function Home() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Data Structure Workshop",
      date: "2024-04-15",
      attendees: 120,
      image: "/images/event-placeholder.jpg",
    },
    {
      id: 2,
      title: "IEEE Annual Dinner",
      date: "2024-05-20",
      attendees: 200,
      image: "/images/event-placeholder.jpg",
    },
  ]

  const hicomMembers = [
    { id: 1, name: "Faris Ikhwan", position: "President", image: "/images/member-placeholder.jpg" },
    { id: 2, name: "Ade Aiman", position: "Vice President", image: "/images/member-placeholder.jpg" },
    { id: 3, name: "Haiqal", position: "Secretary", image: "/images/member-placeholder.jpg" },
    { id: 4, name: "Andrian Nazriel", position: "Treasurer", image: "/images/member-placeholder.jpg" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="network-bg w-full min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">

                <Image src="/images/ieee-logo.png" alt="IEEE Logo" width={500} height={500} className="object-contain" />

            </div>


            <p className="text-white/90 max-w-2xl mb-8 text-lg">
              Empowering the next generation of computer scientists and engineers through innovation, collaboration, and
              technical excellence at University of Malaya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/events"
                className="bg-[hsl(var(--ieee-yellow))] hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                Explore Events
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/committee"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We organize workshops, seminars, and networking events to foster learning and professional growth in
              computer science and engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Workshops</h3>
              <p className="text-gray-600">
                Hands-on learning experiences in cutting-edge technologies and programming languages.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Projects</h3>
              <p className="text-gray-600">
                Collaborative projects that solve real-world problems using technology and innovation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Networking</h3>
              <p className="text-gray-600">
                Connect with industry professionals, alumni, and peers in the computer science field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <Link
              href="/events"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
            >
              View All Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex">
                  <div className="w-1/3">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={200}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Our Leadership</h2>
              <p className="text-gray-300">Meet the dedicated team leading our organization</p>
            </div>
            <Link
              href="/committee"
              className="text-[hsl(var(--ieee-yellow))] hover:text-yellow-400 font-medium inline-flex items-center gap-1"
            >
              Meet Full Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {hicomMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-semibold">{member.name}</h3>
                <p className="text-[hsl(var(--ieee-yellow))] text-sm">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

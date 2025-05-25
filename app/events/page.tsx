import EventCard from "@/components/event-card"
import Link from "next/link"

interface Event {
  id: number
  title: string
  image: string
  slug: string
  date: string
  isUpcoming?: boolean
}

export default function EventsPage() {
  const events: Event[] = [
    {
      id: 1,
      title: "UM IEEE Workshop 2024",
      image: "/images/event-placeholder.jpg",
      slug: "workshop-2024",
      date: "2024-03-15",
      isUpcoming: true
    },
    {
      id: 2,
      title: "UM IEEE Event 2",
      image: "/images/event-placeholder.jpg",
      slug: "event-2",
      date: "2024-03-15",
    },
    {
      id: 3,
      title: "UM IEEE Event 3",
      image: "/images/event-placeholder.jpg",
      slug: "event-3",
      date: "2024-03-15",
    },
  ]

  const upcomingEvents = events.filter(event => event.isUpcoming)
  const pastEvents = events.filter(event => !event.isUpcoming)

  return (
    <div className="min-h-screen bg-[hsl(var(--ieee-blue))] py-12">
      <div className="container mx-auto px-4 space-y-12">
        {/* Upcoming Events Section */}
        <section>
          <h2 className="text-white text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Link href={`/events/${event.slug}`} key={event.id}>
                <EventCard event={event} />
              </Link>
            ))}
          </div>
        </section>

        {/* Past Events Section */}
        <section>
          <h2 className="text-white text-2xl font-bold mb-6">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Link href={`/events/${event.slug}`} key={event.id}>
                <EventCard event={event} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

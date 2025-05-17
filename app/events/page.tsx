import EventCard from "@/components/event-card"
import Link from "next/link"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "UM IEEE Event 1",
      image: "/images/event-placeholder.jpg",
      slug: "event-1",
    },
    {
      id: 2,
      title: "UM IEEE Event 2",
      image: "/images/event-placeholder.jpg",
      slug: "event-2",
    },
    {
      id: 3,
      title: "UM IEEE Event 3",
      image: "/images/event-placeholder.jpg",
      slug: "event-3",
    },
  ]

  return (
    <div className="min-h-screen bg-[hsl(var(--ieee-blue))]">
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-white text-sm mb-6">See our previous events</h2>

        <div className="space-y-6">
          {events.map((event) => (
            <Link href={`/events/${event.slug}`} key={event.id}>
              <EventCard event={event} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

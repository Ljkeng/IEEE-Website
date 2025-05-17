import { notFound } from "next/navigation"

interface EventPageProps {
  params: {
    slug: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  // In a real application, you would fetch this data from an API or database
  const events = [
    {
      slug: "event-1",
      title: "UM IEEE Event 1",
      date: "dd/mm/yyyy",
      description:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas. Ut quia consequatur ut illo iure hic numquam minima.\n\nQui volum voluptatem ut duis, architecto natus necessitatibus ad omnis neque. Id consequatur inventore qui omnis Quis non veniam error aut natus illo et laudantium sapiente!",
      image: "/images/event-placeholder.jpg",
    },
    {
      slug: "event-2",
      title: "UM IEEE Event 2",
      date: "dd/mm/yyyy",
      description:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas. Ut quia consequatur ut illo iure hic numquam minima.\n\nQui volum voluptatem ut duis, architecto natus necessitatibus ad omnis neque. Id consequatur inventore qui omnis Quis non veniam error aut natus illo et laudantium sapiente!",
      image: "/images/event-placeholder.jpg",
    },
    {
      slug: "event-3",
      title: "UM IEEE Event 3",
      date: "dd/mm/yyyy",
      description:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas. Ut quia consequatur ut illo iure hic numquam minima.\n\nQui volum voluptatem ut duis, architecto natus necessitatibus ad omnis neque. Id consequatur inventore qui omnis Quis non veniam error aut natus illo et laudantium sapiente!",
      image: "/images/event-placeholder.jpg",
    },
  ]

  const event = events.find((e) => e.slug === params.slug)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--ieee-blue))]">
      <div className="container mx-auto py-12 px-4">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-gray-300 min-h-[300px] flex items-center justify-center">
              <p className="text-gray-600">image</p>
            </div>
            <div className="w-full md:w-1/2 bg-[hsl(var(--ieee-yellow))] p-6">
              <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
              <div className="whitespace-pre-line mb-8">{event.description}</div>
              <p className="text-right">{event.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

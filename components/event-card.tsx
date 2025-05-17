interface EventCardProps {
  event: {
    id: number
    title: string
    image: string
    slug: string
  }
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-gray-300 min-h-[200px] flex items-center justify-center">
          <p className="text-gray-600">image</p>
        </div>
        <div className="w-full md:w-1/2 bg-[hsl(var(--ieee-yellow))] p-6">
          <h2 className="text-xl font-semibold">{event.title}</h2>
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="network-bg w-full min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
                <Image src="/images/ieee-logo.png" alt="IEEE Logo" width={40} height={40} className="object-contain" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              IEEE Computer Society
              <br />
              <span className="text-[hsl(var(--ieee-yellow))]">UM Student Branch</span>
            </h1>

            <p className="text-white/80 max-w-2xl mb-8">
              Lorem ipsum dolor sit amet, Et minus repudiandae sit internos odit est totam error et natus doloremque qui
              ullam voluptas. Ut quia consequatur ut illo iure hic numquam minima. Qui volum voluptatem ut duis,
              architecto natus necessitatibus ad omnis neque. Id consequatur inventore qui omnis Quis non veniam error
              aut natus illo et laudantium sapiente!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

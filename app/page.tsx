import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="network-bg w-full min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">

                <Image src="/images/ieee-logo.png" alt="IEEE Logo" width={800} height={800} className="object-contain" />
              
            </div>
            <p className="text-white/80 max-w-2xl mb-8">
              The IEEE Computer Society UM Student Branch is a dynamic community at the University of Malaya, focused on advancing tech skills and innovation. We offer workshops, tech talks, and coding competitions to help students excel in computer science and connect with industry professionals. Join us to shape the future of technology!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"

interface FAQ {
  id: number
  question: string
  answer: string
}

export default function FAQsPage() {
  // In a real application, you would fetch this data from an API or database
  const faqs: FAQ[] = [
    {
      id: 1,
      question:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
      answer:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
    },
    {
      id: 2,
      question:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
      answer:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
    },
    {
      id: 3,
      question:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
      answer:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
    },
    {
      id: 4,
      question:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
      answer:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
    },
    {
      id: 5,
      question:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
      answer:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
    },
    {
      id: 6,
      question:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
      answer:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
    },
    {
      id: 7,
      question:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
      answer:
        "Lorem ipsum dolor sit amet. Et minus repudiandae sit internos odit est totam error et natus doloremque qui ullam voluptas.",
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="bg-[hsl(var(--ieee-blue))] py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">FAQs</h1>
          <p className="text-white/80 mb-2">
            Frequently asked questions about the IEEE Computer Society awards program. Please{" "}
            <Link href="#" className="text-[hsl(var(--ieee-yellow))] underline">
              contact us
            </Link>{" "}
            if you have additional questions.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="py-4 border-b border-gray-200">
              <p className="text-gray-800">{faq.question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

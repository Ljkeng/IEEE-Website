"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, Search, Mail, MessageCircle, Phone } from "lucide-react"

interface FAQ {
  id: number
  question: string
  answer: string
  category: string
}

export default function FAQsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const faqs: FAQ[] = [
    {
      id: 1,
      category: "membership",
      question: "How do I become a member of IEEE Computer Society UM Student Branch?",
      answer:
        "To become a member, you need to be a student at University of Malaya and have an interest in computer science or engineering. You can register during our recruitment events, visit our booth during orientation week, or contact us directly through our social media channels. Membership is open to all students regardless of their major.",
    },
    {
      id: 2,
      category: "membership",
      question: "What are the benefits of joining IEEE Computer Society?",
      answer:
        "Members enjoy access to exclusive workshops, networking events, industry talks, technical resources, IEEE digital library, career development opportunities, leadership positions, and the chance to work on real-world projects. You'll also receive certificates for participation and can build valuable connections with peers and industry professionals.",
    },
    {
      id: 3,
      category: "membership",
      question: "Is there a membership fee?",
      answer:
        "Yes, there is an annual membership fee that covers event costs, materials, refreshments, and administrative expenses. The fee is kept minimal to ensure accessibility for all students. Payment can be made during registration or at our events. Financial assistance may be available for students in need.",
    },
    {
      id: 4,
      category: "events",
      question: "How often do you organize events and workshops?",
      answer:
        "We organize events regularly throughout the academic year, typically 2-3 events per month. These include technical workshops, industry talks, networking sessions, competitions, and social events. Our calendar is most active during the semester periods, with special events during orientation and graduation seasons.",
    },
    {
      id: 5,
      category: "events",
      question: "Can non-members attend your events?",
      answer:
        "Most of our events are open to all UM students, regardless of membership status. However, members receive priority registration, discounted fees (if applicable), and access to exclusive member-only events. We encourage everyone to attend our public events to learn more about what we do.",
    },
    {
      id: 6,
      category: "events",
      question: "How do I register for events?",
      answer:
        "Event registration is typically done through our website, social media announcements, or QR codes displayed around campus. We also send email notifications to members about upcoming events. Registration usually opens 1-2 weeks before the event date, and some popular events may fill up quickly.",
    },
    {
      id: 7,
      category: "technical",
      question: "What programming languages and technologies do you focus on?",
      answer:
        "We cover a wide range of technologies including Python, Java, JavaScript, C++, web development (React, Node.js), mobile development, machine learning, artificial intelligence, cybersecurity, cloud computing, and emerging technologies. Our workshops are designed for various skill levels from beginner to advanced.",
    },
    {
      id: 8,
      category: "technical",
      question: "Do I need prior programming experience to join?",
      answer:
        "Not at all! We welcome students of all skill levels. We offer beginner-friendly workshops and have mentorship programs where experienced members help newcomers. Many of our most active members started with little to no programming experience and grew their skills through our activities.",
    },
    {
      id: 9,
      category: "opportunities",
      question: "Are there leadership opportunities available?",
      answer:
        "Yes! We have various leadership positions including department heads, event coordinators, project managers, and committee members. We also encourage members to propose and lead their own initiatives. Leadership experience with us looks great on resumes and helps develop valuable management and organizational skills.",
    },
    {
      id: 10,
      category: "opportunities",
      question: "Can I get certificates for participation?",
      answer:
        "Yes, we provide certificates for workshop attendance, project completion, competition participation, and volunteer service. These certificates are recognized by the university and can be valuable for your academic portfolio, scholarship applications, and job interviews.",
    },
    {
      id: 11,
      category: "general",
      question: "How can I stay updated with your activities?",
      answer:
        "Follow us on our social media channels (Instagram, Facebook, LinkedIn), join our WhatsApp/Telegram groups, check our website regularly, and subscribe to our newsletter. We also have notice boards around the Faculty of Computer Science with event announcements.",
    },
    {
      id: 12,
      category: "general",
      question: "Can I propose ideas for events or projects?",
      answer:
        "We encourage member input and are always open to new ideas. You can propose ideas during our monthly meetings, contact any committee member, or submit suggestions through our feedback forms. Many of our most successful events started as member suggestions.",
    },
  ]

  const categories = [
    { id: "all", name: "All Questions", count: faqs.length },
    { id: "membership", name: "Membership", count: faqs.filter((faq) => faq.category === "membership").length },
    { id: "events", name: "Events", count: faqs.filter((faq) => faq.category === "events").length },
    { id: "technical", name: "Technical", count: faqs.filter((faq) => faq.category === "technical").length },
    {
      id: "opportunities",
      name: "Opportunities",
      count: faqs.filter((faq) => faq.category === "opportunities").length,
    },
    { id: "general", name: "General", count: faqs.filter((faq) => faq.category === "general").length },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Find answers to common questions about IEEE Computer Society UM Student Branch. Can't find what you're
            looking for?{" "}
            <Link href="#contact" className="text-[hsl(var(--ieee-yellow))] hover:underline">
              Contact us
            </Link>{" "}
            for more help.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-cyan-500 text-black"
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-cyan-500/30"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-700/30 transition-colors"
                  >
                    <span className="text-white font-medium pr-4">{faq.question}</span>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-cyan-500/20 pt-4">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                  }}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-8">
              Our team is here to help! Reach out to us through any of the following channels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300 text-sm mb-3">Get a response within 24 hours</p>
                <a href="mailto:ieee.cs@um.edu.my" className="text-cyan-400 hover:text-cyan-300 text-sm underline">
                  ieee.cs@um.edu.my
                </a>
              </div>

              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                <MessageCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Join Our Chat</h3>
                <p className="text-gray-300 text-sm mb-3">Connect with our community</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm underline">
                  WhatsApp Group
                </a>
              </div>

              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Visit Our Office</h3>
                <p className="text-gray-300 text-sm mb-3">Faculty of Computer Science</p>
                <p className="text-cyan-400 text-sm">Room CS-201, Level 2</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

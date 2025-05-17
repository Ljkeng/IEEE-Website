import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/ieee-cs-logo.png"
                alt="IEEE CS Logo"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="font-bold">IEEE CS UM</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering the next generation of computer science and technologies at University of Malaya.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={16} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={16} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/committee" className="hover:text-white">
                  Committee
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  IEEE Xplore
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Career Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Research Opportunities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Faculty of Computer Science & IT</li>
              <li>University of Malaya</li>
              <li>50603 Kuala Lumpur, Malaysia</li>
              <li>+603 7967 6300</li>
              <li>ieee-cs@um.edu.my</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 IEEE Computer Society - University of Malaya. All rights reserved.</p>
          <div className="flex gap-2 mt-4 md:mt-0">
            <div className="h-4 w-4 bg-white rounded-full"></div>
            <div className="h-4 w-4 bg-white rounded-full"></div>
            <div className="h-4 w-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

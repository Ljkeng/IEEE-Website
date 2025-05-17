"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[hsl(var(--ieee-blue))] sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
            <Image src="/images/ieee-logo.png" alt="IEEE Logo" width={24} height={24} className="object-contain" />
          </div>
          <div className="text-white text-xs">
            <p className="font-medium">IEEE</p>
            <p>Computer</p>
            <p>Society UM</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/committee" highlight>
            Committee
          </NavLink>
          <NavLink href="/faqs">FAQs</NavLink>
        </nav>

        <div className="h-8 w-8 bg-[hsl(var(--ieee-yellow))] rounded-sm"></div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[hsl(var(--ieee-blue))] py-4 px-4">
          <nav className="flex flex-col gap-4">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/events" onClick={() => setIsMenuOpen(false)}>
              Events
            </MobileNavLink>
            <MobileNavLink href="/committee" onClick={() => setIsMenuOpen(false)} highlight>
              Committee
            </MobileNavLink>
            <MobileNavLink href="/faqs" onClick={() => setIsMenuOpen(false)}>
              FAQs
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  highlight?: boolean
}

function NavLink({ href, children, highlight = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-white hover:text-[hsl(var(--ieee-yellow))] transition-colors",
        highlight && "text-[hsl(var(--ieee-yellow))]",
      )}
    >
      {children}
    </Link>
  )
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void
}

function MobileNavLink({ href, children, highlight = false, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-white hover:text-[hsl(var(--ieee-yellow))] transition-colors py-2",
        highlight && "text-[hsl(var(--ieee-yellow))]",
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

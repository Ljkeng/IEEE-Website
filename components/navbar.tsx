"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/committee", label: "Committee" },
    { href: "/faqs", label: "FAQs" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-[hsl(var(--ieee-blue))] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">

            <Image src="/images/ieee-logo.png" alt="IEEE Logo" width={124} height={124} className="object-contain" />

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} isActive={isActive(item.href)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[hsl(var(--ieee-blue))] border-t border-white/10">
          <nav className="container mx-auto py-4 px-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  isActive={isActive(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </MobileNavLink>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

function NavLink({ href, children, isActive = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md",
        isActive
          ? "text-[hsl(var(--ieee-yellow))] bg-white/10"
          : "text-white hover:text-[hsl(var(--ieee-yellow))] hover:bg-white/5",
      )}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[hsl(var(--ieee-yellow))] rounded-full" />
      )}
    </Link>
  )
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void
}

function MobileNavLink({ href, children, isActive = false, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-md",
        isActive
          ? "text-[hsl(var(--ieee-yellow))] bg-white/10"
          : "text-white hover:text-[hsl(var(--ieee-yellow))] hover:bg-white/5",
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

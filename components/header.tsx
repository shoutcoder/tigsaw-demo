"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingBag, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="md:hidden mr-2">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        <div className="flex items-center flex-1">
          <Link href="/" className="font-bold text-xl">
            StyleShop
          </Link>

          <nav className="hidden md:flex ml-10 space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/collections/all" className="text-sm font-medium hover:text-primary">
              Shop All
            </Link>
            <Link href="/collections/men" className="text-sm font-medium hover:text-primary">
              Men
            </Link>
            <Link href="/collections/women" className="text-sm font-medium hover:text-primary">
              Women
            </Link>
            <Link href="/collections/accessories" className="text-sm font-medium hover:text-primary">
              Accessories
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-6">
            <Link href="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/collections/all" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Shop All
            </Link>
            <Link href="/collections/men" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Men
            </Link>
            <Link href="/collections/women" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Women
            </Link>
            <Link href="/collections/accessories" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Accessories
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}


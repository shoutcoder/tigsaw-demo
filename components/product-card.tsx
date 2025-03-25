"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-md bg-muted">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="mt-3 flex justify-between">
        <div>
          <h3 className="font-medium">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => addToCart(product)}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </div>
    </div>
  )
}


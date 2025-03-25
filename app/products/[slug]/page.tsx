import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"

import { products } from "@/lib/data"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductCard from "@/components/product-card"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} | StyleShop`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params

  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  // Get related products (same collection, excluding current product)
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.collections.some((c) => product.collections.includes(c)))
    .slice(0, 4)

  return (
    <div className="container py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              {product.collections.map((collection) => (
                <Link
                  key={collection}
                  href={`/collections/${collection}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {collection}
                </Link>
              ))}
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>
          </div>

          <div className="mb-8">
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <AddToCartButton product={product} />

          <div className="mt-10 border-t pt-6">
            <h3 className="font-medium mb-2">Product Details</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


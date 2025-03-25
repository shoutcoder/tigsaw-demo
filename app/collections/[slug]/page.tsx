import { notFound } from "next/navigation"
import type { Metadata } from "next"

import ProductCard from "@/components/product-card"
import { collections, products } from "@/lib/data"

interface CollectionPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const collection = collections.find((c) => c.slug === params.slug)

  if (!collection) {
    return {
      title: "Collection Not Found",
    }
  }

  return {
    title: `${collection.name} Collection | StyleShop`,
    description: collection.description,
  }
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = params

  const collection = collections.find((c) => c.slug === slug)

  if (!collection) {
    notFound()
  }

  const collectionProducts =
    slug === "all" ? products : products.filter((product) => product.collections.includes(slug))

  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">{collection.name}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{collection.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collectionProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {collectionProducts.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-medium mb-2">No products found</h2>
          <p className="text-muted-foreground">Check back soon for new arrivals.</p>
        </div>
      )}
    </div>
  )
}


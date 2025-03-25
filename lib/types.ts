export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  image: string
  collections: string[]
  details: string[]
}

export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  image: string
}


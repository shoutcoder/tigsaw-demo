import type { Product, Collection } from "./types"

// Update the collections array to use the new images
export const collections: Collection[] = [
  {
    id: "1",
    name: "All Products",
    slug: "all",
    description: "Browse our complete collection of products",
    image: "/collection-all.jpg",
  },
  {
    id: "2",
    name: "Men",
    slug: "men",
    description: "Shop our men's collection featuring the latest styles and trends",
    image: "/collection-men.jpg",
  },
  {
    id: "3",
    name: "Women",
    slug: "women",
    description: "Discover our women's collection with stylish and comfortable options",
    image: "/collection-women.jpg",
  },
  {
    id: "4",
    name: "Accessories",
    slug: "accessories",
    description: "Complete your look with our range of accessories",
    image: "/collection-accessories.jpg",
  },
  {
    id: "5",
    name: "Summer",
    slug: "summer",
    description: "Stay cool with our summer collection",
    image: "/collection-summer.jpg",
  },
]

// Update the products array to use the new images
export const products: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    slug: "classic-white-t-shirt",
    description: "A timeless white t-shirt made from premium cotton for everyday comfort.",
    price: 29.99,
    image: "/product-tshirt.jpg",
    collections: ["men", "summer"],
    details: ["100% premium cotton", "Regular fit", "Crew neck", "Machine washable"],
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    slug: "slim-fit-jeans",
    description: "Modern slim fit jeans with a comfortable stretch for all-day wear.",
    price: 59.99,
    image: "/product-jeans.jpg",
    collections: ["men"],
    details: ["98% cotton, 2% elastane", "Slim fit", "Five-pocket styling", "Machine washable"],
  },
  {
    id: "3",
    name: "Floral Summer Dress",
    slug: "floral-summer-dress",
    description: "A lightweight floral dress perfect for warm summer days.",
    price: 79.99,
    image: "/product-dress.jpg",
    collections: ["women", "summer"],
    details: ["100% viscose", "Floral pattern", "V-neck", "Midi length", "Machine washable"],
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    slug: "leather-crossbody-bag",
    description: "A stylish and practical leather crossbody bag for everyday use.",
    price: 89.99,
    image: "/product-bag.jpg",
    collections: ["accessories", "women"],
    details: ["Genuine leather", "Adjustable strap", "Multiple compartments", "Gold-tone hardware"],
  },
  {
    id: "5",
    name: "Oversized Sunglasses",
    slug: "oversized-sunglasses",
    description: "Stylish oversized sunglasses with UV protection.",
    price: 39.99,
    image: "/product-sunglasses.jpg",
    collections: ["accessories", "summer"],
    details: ["100% UV protection", "Acetate frame", "Oversized design", "Includes protective case"],
  },
  {
    id: "6",
    name: "Striped Button-Up Shirt",
    slug: "striped-button-up-shirt",
    description: "A classic striped button-up shirt for a smart casual look.",
    price: 49.99,
    image: "/product-shirt.jpg",
    collections: ["men"],
    details: ["100% cotton", "Regular fit", "Button-up front", "Machine washable"],
  },
  {
    id: "7",
    name: "High-Waisted Shorts",
    slug: "high-waisted-shorts",
    description: "Comfortable high-waisted shorts perfect for summer.",
    price: 44.99,
    image: "/product-shorts.jpg",
    collections: ["women", "summer"],
    details: ["98% cotton, 2% elastane", "High-waisted fit", "Five-pocket styling", "Machine washable"],
  },
  {
    id: "8",
    name: "Minimalist Watch",
    slug: "minimalist-watch",
    description: "A sleek minimalist watch with a leather strap.",
    price: 99.99,
    image: "/product-watch.jpg",
    collections: ["accessories"],
    details: ["Stainless steel case", "Genuine leather strap", "Water resistant to 30m", "Japanese quartz movement"],
  },
]

export const featuredProducts = products.slice(0, 4)


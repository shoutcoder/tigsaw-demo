import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CheckoutSuccessPage() {
  return (
    <div className="container py-20 text-center max-w-md mx-auto">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
      <p className="text-muted-foreground mb-8">
        Thank you for your purchase. We've sent a confirmation email with your order details.
      </p>
      <div className="space-y-4">
        <Link href="/collections/all">
          <Button className="w-full">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  )
}


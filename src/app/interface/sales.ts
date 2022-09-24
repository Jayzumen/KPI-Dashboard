export interface Sales {
    monthlyProvisionSalesValue: number
    monthlyOneTimeFee: number
    monthlyBasicFee: number
    checkoutEventList: CheckoutEventList[]
    countCheckoutEvents: number
}
  
export interface CheckoutEventList {
    id: string
    merchantId: string
    transactionId: string
    orderNumber: string
    timestamp: string
    netValue: number
    netShipping: number
    grossValue: number
    grossShipping: number
    items: Item[]
}
  
export interface Item {
    articleNumber: string
    title: string
    quantity: number
    grossValue: number
    netValue: number
}
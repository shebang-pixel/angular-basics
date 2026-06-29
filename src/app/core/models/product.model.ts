export interface ProductResponse {
    products: Product[],
    total: number,
    skip: number,
    limit: number

}

export interface Product {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage?: number,
    rating?: number,
    stock: number,
    tags?: string[],
    brand: string,
    warrantyInformation?: string,
    shippingInformation?: string,
    reviews?: Reviews[],
    returnPolicy?: string,
    minimumOrderQuantity?: number,
    meta?: Meta,
    thumbnail?: string,
    images?: []
}

export interface Meta {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrCode: string,
}

export interface Reviews {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}
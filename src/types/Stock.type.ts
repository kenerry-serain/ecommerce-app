export interface StockEntity {
    id: number;
    product: ProductEntity;
    quantity: number;
}

export interface ProductEntity {
    id: number;
    name: string;
}




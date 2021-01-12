

export type Order = {

    id: number;
    adress: string;
    latitude: number;
    longitude: number;
    moment: string;
    status: string;
    total: number;

    products: Product[];

}

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}
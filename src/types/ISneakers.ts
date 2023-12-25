export interface ISneakers {
    id: number;
    photo?: string;
    brand: string;
    name: string;
    price: number;
    color: string;
    sale?: boolean;
    new?: boolean;
}

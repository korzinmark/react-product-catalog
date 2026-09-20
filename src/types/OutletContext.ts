import type { Product } from './Product';

export interface OutletContext {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    isLoading: boolean;
    error: string | null;
}

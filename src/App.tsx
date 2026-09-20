import type { Product } from './types/Product';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products');

                if (!res.ok) {
                    throw new Error('Request failed');
                }

                const data = await res.json();
                setProducts(data.products);
            } catch {
                setError('Failed to load products');
            } finally {
                setIsLoading(false);
            }
        };

        loadProducts();
    }, []);


    return <Outlet context={{ products, setProducts, isLoading, error }} /> ;
}

export default App;
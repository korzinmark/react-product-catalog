import type { Product } from "../types/Product";
import type { OutletContext } from "../types/OutletContext";
import Card from "../components/Card";
import { useState } from "react";
import { useOutletContext } from "react-router";

function Home() {
    const { products, setProducts, isLoading, error } = useOutletContext<OutletContext>();

    const [newProductName, setNewProductName] = useState<string>('');
    const [newProductPrice, setNewProductPrice] = useState<number>(0);

    const handleDelete = (id: number):void => {
        setProducts(products.filter(item => item.id !== id));
    }

    const handleAddProduct = (e: React.SubmitEvent<HTMLFormElement>):void => {
        e.preventDefault();

        if (!newProductName.trim() || newProductPrice <= 0) return;

        const newProduct: Product = {
            id: Date.now(),
            title: newProductName,
            price: newProductPrice
        };
    
        setProducts(prev => [...prev, newProduct]);
        setNewProductName('');
        setNewProductPrice(0);
    }

    return (
        <div className="page">
            <form className="product-form" onSubmit={handleAddProduct}>
                <div className="form-field">
                    <label htmlFor="productName" className="form-label">Product name:</label>
                    <input id="productName" className="form-input" type="text" value={newProductName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewProductName(e.target.value)} />
                </div>
                <div className="form-field">
                    <label htmlFor="productPrice" className="form-label">Product price:</label>
                    <input id='productPrice' className="form-input" type="number" value={newProductPrice} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewProductPrice(+e.target.value)} />
                </div>
                <button type="submit" className="product-button product-form__submit">Add product</button>
            </form>

            <div className="product-grid">
                {isLoading ? (
                    <p className="loading-text">Loading...</p>
                ) : error ? (
                    <p className="loading-text">{error}</p>
                ) : (
                    products.map(item => <Card key={item.id} product={item} onDelete={handleDelete} />)
                )}
            </div>
        </div>
    );
}

export default Home;
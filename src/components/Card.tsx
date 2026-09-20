import type { Product } from '../types/Product';
import { Link } from 'react-router';

interface CardProps {
    product: Product;
    onDelete: (id: number) => void;
}

function Card({ product, onDelete }: CardProps) {
    return (
        <div className="product-card">
            <div className="product-badge">New</div>
            <h3 className="product-name"><Link to={`/product/${product.id}`}>{product.title}</Link></h3>
            <p className="product-price">${product.price}</p>
            <div className="product-actions">
                <button onClick={() => onDelete(product.id)} className="product-button product-button--delete">Delete</button>
            </div>
        </div>
    );
}

export default Card;
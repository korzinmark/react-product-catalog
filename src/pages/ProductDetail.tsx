import { useParams, useOutletContext, Link } from "react-router";
import type { OutletContext } from "../types/OutletContext";

function ProductDetail() {
    const { id } = useParams();
    const { products } = useOutletContext<OutletContext>();

    const product = products.find(p => p.id === Number(id));

    return (
        <div className="product-detail">
            <Link to="/" className="back-link">Back to products</Link>
            {product ? (
                <>
                    <h1 className="detail-title">{product.title}</h1>
                    <p className="detail-price">${product.price}</p>
                </>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
}

export default ProductDetail;

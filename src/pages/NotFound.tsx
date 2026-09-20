import { Link } from "react-router";

function NotFound() {
    return (
        <div className="not-found">
            <h1 className="not-found__code">404</h1>
            <p className="not-found__text">Page not found</p>
            <Link to="/" className="back-link">Back to home</Link>
        </div>
    );
}

export default NotFound;

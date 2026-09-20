import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import './index.css';

const router = createBrowserRouter([{ 
    path: '/', 
    element: <App />, 
    children: [
        { index: true, element: <Home /> },
        { path: 'product/:id', element: <ProductDetail /> },
        { path: '*', element: <NotFound /> }
    ] 
}]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
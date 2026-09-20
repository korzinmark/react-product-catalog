# Product Catalog

A product catalog single-page application built with React and TypeScript, featuring client-side routing, form validation, and data from a live REST API.

**Live demo:** [react-product-catalog-puce.vercel.app](https://react-product-catalog-puce.vercel.app/)

## Features

- Browse products in a responsive grid, loaded from a live REST API
- Add a new product through a validated form (non-empty name, price greater than 0)
- Delete a product from the catalog
- View a dedicated product detail page via dynamic routing (`/product/:id`)
- Graceful loading and error states for the API request
- Custom 404 page for unmatched routes

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router v8](https://reactrouter.com/) — client-side routing, nested layouts via `Outlet`
- [Vite](https://vite.dev/) — build tool and dev server
- [DummyJSON](https://dummyjson.com/) — REST API used as the data source
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

```bash
git clone https://github.com/korzinmark/react-product-catalog.git
cd react-product-catalog
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Command           | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Type-check and build for production  |
| `npm run lint`    | Run ESLint                           |
| `npm run preview` | Preview the production build locally |

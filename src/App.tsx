import React from "react";
import ProductsView from "./components/ProductsView";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";
import Product from "./components/Product";
import { NavLink, createBrowserRouter, RouterProvider, Outlet } from "react-router";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div>
				<nav>
					<NavLink to="/">Products</NavLink>
					{" | "}
					<NavLink to="/cart">Cart</NavLink>
				</nav>
				<hr />
				<Outlet /> {/* This is where child routes will render */}
			</div>
		),
		children: [
			{
				index: true,
				element: <ProductsView />,
			},
			{
				path: "/products/:id",
				element: <ProductDetailsView />,
			},
			{
				path: "/cart",
				element: <CartView />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;

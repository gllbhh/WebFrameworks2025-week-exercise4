import React from "react";
import ProductsView from "./components/ProductsView";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";
import Product from "./components/Product";
import { Routes, Route, NavLink, Link } from "react-router";

const App = () => {
	return (
		<div>
			<nav>
				{/* Replace anchor elements with router Link */}
				<NavLink to="/">Products</NavLink>
				<NavLink to="/cart">Cart</NavLink>
			</nav>

			{/* Add react router routes here. See Router documentation how to define dynamic route segments:
          https://reactrouter.com/start/declarative/routing#dynamic-segment

          The idea is to have access to the product details with routes such as /products/1, /products/2, etc.where
          the last segment is the product id. 
          The id can then be used to fetch the product details in the ProductDetailsView component.
      */}
      
			<Routes>
				<Route path="/" element={<ProductsView />} />
				<Route path="/products" element={<ProductsView />} />
				<Route path="/products/:id" element={<ProductDetailsView />} />
				<Route path="/cart" element={<CartView />}></Route>
			</Routes>

			{/* <ProductsView />
			<ProductDetailsView />
			<ProductDetailsView />
			<CartView /> */}
		</div>
	);
};

export default App;

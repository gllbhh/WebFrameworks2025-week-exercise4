import React from "react";
import styles from "./Product.module.css";
import { NavLink, Link } from "react-router";

/* This component is used to display a single product in the products view. */

export default function Product({ id, imagePath, name, price }) {
	const link = "/products/" + String(id);
	return (
		<div className={styles.product} key={id} data-testid={`product-${id}`}>
			<img src={imagePath} alt="Placeholder" />
			<div>{name}</div>
			<div>${price}</div>
			<div>
				{/* Replace anchor element with router Link */}
				{/* <a href={link}>View Details</a> */}
				<NavLink to={link}>View Details</NavLink>
			</div>
		</div>
	);
}

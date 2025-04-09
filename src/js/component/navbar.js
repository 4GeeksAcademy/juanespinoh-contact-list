import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black border-bottom mb-3">

			<div className="ml-auto ">
				<Link to="/new-contact" className="align-self-end">
					<button className="btn btn-primary">New Contact</button>
				</Link>
			</div>
		</nav>
	);
};

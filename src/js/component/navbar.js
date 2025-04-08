import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black border-bottom mb-3">

			<div className="ml-auto ">
				<Link to="/demo" className="align-self-end">
					<button className="btn btn-primary">Check theee Context in action</button>
				</Link>
			</div>
		</nav>
	);
};

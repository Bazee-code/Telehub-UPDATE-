import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm py-3 bg-dark navbar-dark">
				<Link to ="/" className="navbar-brand">
				<i className="fa fa-mobile m-2"></i>TELEHUB</Link>

				<button className="navbar-toggler" data-toggle="collapse"
				data-target="#navBarNav">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navBarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/details" className="nav-link">Products</Link>
						</li>
						<li className="nav-item">
							<Link to="/signin" className="nav-link">Sign In</Link>
						</li>
						<li className="nav-item">
							<Link to="/cart" className="nav-link">
							<i className="fa fa-cart-plus"></i>Cart</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;
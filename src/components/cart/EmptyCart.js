import React from 'react';
import {Link} from 'react-router-dom';

export default function EmptyCart() {
	return (
		<div className="container text-center mt-5">
			<h2 ><b>YOUR CART IS CURRENTLY EMPTY!</b></h2>
			<p className="mt-4"><small>Go Back to <Link to ="/">Home</Link></small></p>
		</div>
	)
}
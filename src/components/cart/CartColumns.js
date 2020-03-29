import React from 'react';

export default function CartColumns() {
	return (
		<div className="container-fluid d-none d-lg-block">
		<div className="row mt-4 text-center">
			<div className="col-md-2">
				<p>PRODUCT</p>
			</div>
			<div className="col-md-2">
				<p>NAME OF PRODUCT</p>
			</div> 
			<div className="col-md-2">
				<p>PRICE</p>
			</div>
			<div className="col-md-2">
				<p>QUANTITY</p>
			</div>
			<div className="col-md-2">
				<p>REMOVE</p>
			</div>
			<div className="col-md-2">
				<p>TOTAL</p>
			</div>
		</div>
		</div>
	)
}
import React from 'react';


class CartTotals extends React.Component {
	render() {
		const {cartSubTotal,cartTax,cartTotal,clearCart} = this.props.value;
		return (
			<div className="row text-center">
				<div className="col-md-2"></div>
				<div className="col-md-2"></div>
				<div className="col-md-2"></div>
				<div className="col-md-2"></div>
				<div className="col-md-2"></div>
				<div className="col-md-2 mt-3">
					<button className="btn btn-danger"
					onClick ={()=>clearCart()}>
						CLEAR CART
					</button>
					<h5>Subtotal: Ksh{cartSubTotal}</h5>
					<h5 className="text-muted">Tax: Ksh{cartTax}</h5>
					<h5>TOTAL: Ksh{cartTotal}</h5>
				</div>
			</div>
		)
	}
}

export default CartTotals;
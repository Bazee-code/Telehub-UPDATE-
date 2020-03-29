import React from 'react'

// local
import {ProductConsumer} from './Context/Context.js';
import CartColumns from './cart/CartColumns.js';
import EmptyCart from './cart/EmptyCart.js';
import CartList from './cart/CartList.js';
import CartTotals from './cart/CartTotals.js';

class Cart extends React.Component {
	render() {
		return (
			<ProductConsumer>
				{(value)=>{
					const {cart} = value;
						if(cart.length <= 0){
							return(
								<EmptyCart />
							)
						}
						else{
							return(
								<div className="container mt-3">
								<h3 className="text-center mb-2 form-header">YOUR CART</h3>
									<CartColumns />
									<CartList value={value}/>
									<CartTotals value={value} />
								</div>
								)
						}
				}}
			</ProductConsumer>
		)
	}
}

export default Cart;
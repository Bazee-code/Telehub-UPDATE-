import React from 'react';

// local
import CartItem from './CartItems.js';

class CartList extends React.Component {
	render() {
		const {value} = this.props;
		const {value:{cart}} = this.props;
		console.log(cart); 
		return (
			<React.Fragment>
				{cart.map(item=>(
					<CartItem item={item} key={item.id} value={value}/>))}
			</React.Fragment>
		)
	}
}

export default CartList;
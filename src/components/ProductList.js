import React from 'react';

// local
import {ProductConsumer} from './Context/Context.js';
import Product from './Product.js'; 

class ProductList extends React.Component {
	render() {
		return (
			<div>
			<h3 className="form-header m-4 text-center">OUR PRODUCTS</h3>
				<div className="row">
					<ProductConsumer>
						{(value)=>{
							// console.log(value);
							return value.products.map(product=>{
								return <Product product={product} key={product.id}/>
							})
						}}
					</ProductConsumer>
				</div>
			</div>
		)
	}
}

export default ProductList;
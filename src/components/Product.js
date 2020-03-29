import React from 'react';
import {Link} from 'react-router-dom';

// local
import {ProductConsumer} from './Context/Context.js';

class Product extends React.Component {
	render() {
		const {product:{title,img,price,id,inCart}} = this.props;
		// console.log(title);
		return (
			<ProductConsumer>
				{(value)=>{
					return (
						<div className="col-lg-3">
						<div className="card border-warning m-2">
							<div className="card-body text-center" 
								onClick={()=>{value.handleDetail(id)}}>
								<Link to ='/details'>
								<img src={img} className="img-fluid productImg" alt="product"/>
								<h4 className="text-dark">{title}</h4>
								<h5 className="text-dark">Ksh{price}</h5>
								</Link>
								<button type="button" className="btn btn-warning cartBtn"
								onClick={()=>{value.addToCart(id);
									value.openModal(id)}} data-toggle="modal"
								data-target="#productModal" disabled={inCart ?true:false}>
										{inCart===false?(<i className="fa fa-cart-plus"></i>)
										:(<p className="mb-0"disabled>In Cart</p>)}			
								</button>
							</div>
						</div>
						</div>
					)
				}}
			</ProductConsumer>
		)
	}
}

export default Product;
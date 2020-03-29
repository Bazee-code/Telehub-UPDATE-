import React from 'react';
import {Link} from 'react-router-dom';

// local
import {ProductConsumer} from './Context/Context.js';

class ProductDetails extends React.Component {
	render() {
		return (
			<ProductConsumer>
				{(value)=>{
					const {title,img,company,price,info,inCart,id} = value.detailProduct;
					// console.log(title);
					return(
							<div className="container">
								<div className="row">
									<div className="col-md-6 mx-auto">
										<img src={img} className="img-fluid mt-5" alt="product"/>
									</div>
									<div className="col-md-6 mt-5 mx-auto">
										<h3>{title}</h3>
										<h4 className="text-uppercase">Made By : {company}</h4>
										<h4>Price : Ksh{price}</h4>
										<p>Some Info About Product:</p>
										<p className="text-muted">{info}</p>
										<span>
										<Link to="/">
										<button className="btn btn-secondary">
											<i className="fa fa-arrow-left m-1"></i>Go Back
										</button>
										</Link>
										<Link to="/cart">
										<button className="btn btn-warning m-3"
										disabled ={inCart ? true:false}
										onClick={()=>{value.addToCart(id)}}>
											{inCart===false?(<p className="mb-0">Add To Cart</p>)
										:(<p disabled className="mb-0">In Cart</p>)}
										</button>
										</Link>
										</span>
									</div>
								</div>
							</div>

						)
				}}
			</ProductConsumer>
		)
	}
}

export default ProductDetails;
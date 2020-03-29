import React from 'react';

// local

class CartItems extends React.Component {
	render() {
		const {img,title,price,count,total,id} = this.props.item;
		const {increment,decrement,removeItem}= this.props.value;
		return (
			<div className="row text-center">
				<div className="col-md-2">
					<img src={img} className="img-fluid" alt="product"/>
				</div>
				<div className="col-md-2">
					<p className="text-muted">{title}</p>
				</div>
				<div className="col-md-2">
					<p><span className="d-lg-none">Price:</span>Ksh{price}</p>
				</div>
				<div className="col-md-2">
					<span>
						<button className="btn btn-warning mr-2"
						 onClick={()=>decrement(id)}>
						<i className="fa fa-minus"></i>
						</button>
						<button className="btn btn-warning ">
						{count}</button>
						<button className="btn btn-warning ml-2" 
						onClick={()=>increment(id)}>
						<i className="fa fa-plus"></i>
						</button>
					</span>
				</div>
				<div className="col-md-2">
					<button className="btn btn-warning "
					onClick={()=>removeItem(id)}>
						<i className="fa fa-trash "></i>
					</button>
				</div>
				<div className="col-md-2">
					<span>
					<h5><span className="d-lg-none">Total:</span>Ksh{total}</h5>
					</span>
				</div>
			</div>
		)
	}
}

export default CartItems;
import React from 'react';
import {Link} from 'react-router-dom';

// local
import {ProductConsumer} from './Context/Context.js';

class Modal extends React.Component {
	render() {
		return (
			<ProductConsumer>
				{(value)=>{
					const {img,title,price} = value.modalProduct;
					const {modalOpen} = value;
					// console.log(products);
					if(modalOpen){
						return null;
					}
					else{
						return(
						<div className="modal fade" id="productModal" >
							<div className="modal-dialog" role="document">
					    <div className="modal-content">
				      <div className="modal-header">
				        <h5 >Item added to cart</h5>
				        <Link to="/">
				        <button className="close" data-dismiss="modal"
				        onClick={()=>{value.closeModal()}}>
				          <span aria-hidden="true">&times;</span>
				        </button>
				        </Link>
				      </div>

          		<div className="modal-body text-center">
          			<img className="img-fuid" src={img} alt="product"/>
          			<p>{title}</p>
          			<h4>Price:Ksh{price}</h4>
          		</div>
						</div>
					</div>
				</div>
				)
					}
					
				}}
       </ProductConsumer>
		)	
	}
}

export default Modal
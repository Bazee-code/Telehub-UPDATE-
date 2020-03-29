import React from 'react';

// local
import {storeProducts,detailProduct} from './../../data.js';
// we first create our context
const ProductContext = React.createContext();

class ProductProvider extends React.Component {

	constructor(props){
		super(props);

		this.state ={
			products :storeProducts,
			detailProduct :detailProduct,
			cart :[],
			modalOpen : false,
			modalProduct : detailProduct,
			cartSubTotal : 0,
			cartTotal :0,
			cartTax : 0
		};
	};
	componentDidMount(){
		this.setProducts();
	};

	//func to stop our arrays from been passed as references 
	setProducts = ()=>{
		let tempProducts = [];

		storeProducts.forEach(item=>{
			const singleItem = {...item};
			tempProducts = [...tempProducts,singleItem];
		});

		this.setState(()=>{
			return {products: tempProducts}
		})
	};

	// create a func that will differentiate each item from the rest in array
	getItem = (id)=>{
		const product = this.state.products.find(item=>item.id === id)
		return product;
	};

	handleDetail =(id)=>{
		const product = this.getItem(id);
		this.setState(()=>{
			return {detailProduct : product}
		});
	};

	// add to cart func
	addToCart =(id)=>{
		// console.log("Hello from add to cart");
		let tempProducts = [...this.state.products];
		// we then find the index of our products
		// the index will allow us to change the properties of our products such as amount
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index]; //we now access index of our products

		// we can now change our product properties since we have access to our index
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;

		this.setState(()=>{
			return{products : tempProducts,cart:[...this.state.cart,product]}
		},()=>{
			this.addTotals();
		})
	};

	openModal =(id)=>{
		const product = this.getItem(id);
		this.setState(()=>{
			return {
				modalProduct : product,
				modalOpen : true
			}
		})
		// console.log("Open modal")
	};

	closeModal =()=>{
		// this.setState(()=>{
		// 	return {modalOpen:false}
		// })
		console.log("Close modal!")
	};

	// CART FUNCTIONS
	increment =(id)=>{
		let tempCart = [...this.state.cart];

		let tempProduct = tempCart.find(item=>item.id === id);
		const index = tempCart.indexOf(tempProduct);
		let product = tempCart[index];
		// we can change the properties of items in cart since we have index
		product.count += 1;
		product.total = product.count*product.price;

		// change state
		this.setState(()=>{
			return{
				cart : [...tempCart]
			}
		},()=>{
			this.addTotals();
		})
	};

	decrement=(id)=>{
		let tempCart = [...this.state.cart];

		let tempProducts = tempCart.find(item=>item.id ===id);
		let index = tempCart.indexOf(tempProducts);
		let product = tempCart[index];

		if(product.count > 0){
			product.count -=1;
			product.total = product.count * product.price;
		}
		
		this.setState(()=>{
			return{
				cart : [...tempCart]
			}
		},()=>{
			this.addTotals();
		}) 
	};

	addTotals =()=>{
		let subTotal = 0;
		// loop through cart adding each item total to our subtotal
		this.state.cart.map(item=>(subTotal += item.total));

		let tempTax = subTotal * 0.2;
		let tax = parseFloat(tempTax.toFixed(2));
		let total = subTotal + tax;

		this.setState(()=>{
			return{
				cartSubTotal : subTotal,
				cartTax : tax,
				cartTotal : total
			};
		}) ;
	};

	removeItem =(id)=>{
		let tempProducts = [...this.state.products]
		let tempCart = [...this.state.cart];

		tempCart = tempCart.filter(item=>item.id !== id);
		// when we remove an item we want to return its state to its original
		let index = tempProducts.indexOf(this.getItem(id));
		let removedProduct = tempProducts[index];
		// using index we can now change its properties back to normal
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total =0;
		this.setState(()=>{
			return{
				cart : [...tempCart],
				products : [...tempProducts]
			}
		},()=>{
			this.addTotals();
		})
	};

	clearCart =()=>{
		this.setState(()=>{
			return{
				cart : []
			}
		},()=>{
			this.setProducts();
			this.addTotals()
		})

	};

	render() {
		return (
			<ProductContext.Provider value={{
				// products : this.state.products
				...this.state,
				addToCart:this.addToCart,
				openModal : this.openModal,
				closeModal : this.closeModal,
				handleDetail : this.handleDetail,
				increment : this.increment,
				decrement : this.decrement,
				addTotals : this.addTotals,
				removeItem : this.removeItem,
				clearCart : this.clearCart
			}}>
				{this.props.children}
			</ProductContext.Provider>
		)
	}
}

// create our consumer
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};

// we are using the context api
// the context api enables us to have a global state for our app
// it contains a provider and a consumer
// the provider provides all the data from the context
// we use the consumet to access the data in the provider
// we wrap our parent comp with the provider
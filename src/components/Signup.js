import React from 'react';

// local
// import {Img} from './../../public/phone.png';
function Signup() {
	return (
		<div className="container text-center">
		<div className="row">
			<div className="col-lg-4"></div>
			<div className="col-lg-4">
				<img src="./phone.png" className="img-fluid mt-2" 
				style={{height:"80px",width:"80px"}} alt="logo"/>
				<h3 className="form-header ">TELEHUB</h3>
				<div className="card border-secondary mt-4">
			<div className="card-body">
				<form className="form-content">
				<label>Your name</label>
				<input placeholder="Your name" type="text" className="form-control"/>
				<label>Email</label>
				<input type="email" className="form-control"/>
				<label>Password</label>
				<input type="password" className="form-control"/>
				<p><small>Passwords must be at least 6 characters</small></p>
				<label>Re-enter password</label>
				<input type="password" className="form-control"/>

				<button className="btn btn-warning mt-3">Create your Telehub account</button>

				<p className="mt-2"><small>By creating an account, you agree to Telehub's Conditions
				of Use and Privacy Notice.</small></p>
			</form>

			</div>
			<div className="col-lg-4"></div>
		</div>
		
			</div>
		</div>
		</div>
	)
}

export default Signup;
import React from 'react';
import {Link} from 'react-router-dom';

export default function SignIn() {
	return (
		<div>
			<div className="row">
				<div className="col-lg-4"></div>
				<div className="col-lg-4 text-center">
				<img src="./phone.png" className="img-fluid mt-3" 
				style={{height:"80px",width:"80px"}} alt="logo"/>
				<h3 className="form-header mt-2">TELEHUB</h3>
					<div className="card border-secondary mt-3">
						<div className="card-body">
						<form>
							<h3 >Sign-In</h3>
							<label className="text-center"><b>Email(phone for mobile accounts)</b></label>
							<input type="email" className="form-control"/>
							<label className="text-center"><b>Password</b></label>
							<input type="password" className="form-control"/>
							<button className="btn btn-warning form-control mt-2">Login</button>
							<p className="mt-2"><small>By continuing, you agree to Telehub's Conditions
							of Use and Privacy Notice.</small></p>
							<p><small>New to Telehub?</small><Link to="/signup">Sign up here</Link></p>
						</form>
						</div>
					</div>
				</div>
				<div className="col-lg-4"></div>
			</div>
		</div>
	)
};
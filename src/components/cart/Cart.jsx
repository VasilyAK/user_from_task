import "./Cart.css";
import React, {Component} from "react";
import {Redirect} from "react-router-dom";

import Button from "react-bootstrap/Button";

class Cart extends Component {
	constructor (props) {
		super(props);
		this.state = {
			redirect: false
		};
		this.doRedirect = this.doRedirect.bind(this);
	}

	doRedirect () {
		this.setState({
			redirect: true
		})
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/"/>
		}

		return (
			<>
				<div className="mx-3">Сценарий добавлен в корзину</div>
				<Button
					className="mx-3"
					onClick={this.doRedirect}
				>
					Вернуться
				</Button>
			</>
		)
	}
}

export default Cart;
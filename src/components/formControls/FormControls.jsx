import "./FormControls.css";
import React, {Component} from "react";

import {Redirect} from "react-router-dom";

import Button from "react-bootstrap/Button";

import {copy, destroyConnect} from "../../store/actions/user_action";

class FormControl extends Component {
	constructor (props) {
		super(props);
		this.state = {
			redirect: false
		};
		this.copyData = this.copyData.bind(this);
		this.destroy = this.destroy.bind(this);
		this.doRedirect = this.doRedirect.bind(this);
	}

	copyData () {
		this.props.dispatch(copy(this.props.focus))
	}

	destroy () {
		this.props.dispatch(destroyConnect())
	}

	doRedirect () {
		this.setState({
			redirect: true
		})
	}

	render () {
		if (this.state.redirect) {
			return <Redirect to="/cart"/>
		}

		const disabledCopy = this.props.focus === null ? "disabled" : "";
		return (
			<>
				<Button
					id="CopyBtn"
					className="form-body__controls-button"
					disabled={disabledCopy}
					onClick={this.copyData}
				>
					Копировать
				</Button>

				<Button
					className="form-body__controls-button"
					onClick={this.destroy}
				>
					Прервать
				</Button>

				<Button
					className="form-body__controls-button"
					onClick={this.doRedirect}
				>
					В корзину
				</Button>
			</>
		)
	}
}

export default FormControl;
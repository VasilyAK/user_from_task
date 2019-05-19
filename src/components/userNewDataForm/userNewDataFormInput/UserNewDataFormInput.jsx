import "./UserNewDataFormInput.css";
import React, {Component} from "react";

import {changeUserNewData} from "../../../store/actions/user_action";
import testPattern from "../../../utilities/testPattern";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default class UserNewDataFormInput extends Component {
	constructor (props) {
		super (props);
		this.state = {
			validationError: false
		};
		this.inputValueHandler = this.inputValueHandler.bind(this);
	}



	inputValueHandler = event => {
		if (testPattern(event.target.value, this.props.patternType)){
			this.props.dispatch(changeUserNewData({
				path: this.props.path,
				newData: event.target.value
			}));
		} else {
			this.setState({
				validationError: true
			})
		}
	};


	componentDidUpdate () {
		if(this.state.validationError){
			setTimeout(() => {
				this.setState({
					validationError: false
				})
			}, 200)
		}
	}


	render () {
		const errClass = this.state.validationError ? "input__err" : "input-style";

		return (
			<Form className="my-1">
				<Form.Group as={Row} className="text my-0 align-items-center">
					<Col xs={4} lg={5} xl={4} className="lable_middle px-0">
						<Form.Label className="ml-4 mr-1 my-0 text-style as-input-height">{this.props.name}:</Form.Label>
					</Col>
					<Col xs={8} lg={7} xl={8} className="my-0">
						<Form.Control
							className={`${errClass} text-style`}
							as="input" size="sm"
							onChange={this.inputValueHandler}
							value={this.props.source}
						/>
					</Col>
				</Form.Group>
			</Form>
		)
	}
};
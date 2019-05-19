import "./UserNewDataFormInputMasked.css";
import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import {changeUserNewData} from "../../../store/actions/user_action";
import testPattern from "../../../utilities/testPattern";

export default class UserNewDataFormInputMasked extends Component {
	constructor (props) {
		super(props);
		this.state = {
			validationError: false
		};
		this.onChange = this.onChange.bind(this);
		this.onBlur = this.onBlur.bind(this);
	}

	onChange = (event) => {
		if (testPattern(event.target.value, this.props.patternType[0])) {
			this.props.dispatch(changeUserNewData({
				path: this.props.path,
				newData: event.target.value
			}));
		}
	};

	onBlur = (event) => {
		if (testPattern(event.target.value, this.props.patternType[1])) {
			this.props.dispatch(changeUserNewData({
				path: this.props.path,
				newData: event.target.value
			}));
		} else {
			this.setState({
				validationError: true
			});
		}
	};

	beforeMaskedValueChange = (newState, oldState, userInput) => {
		if (testPattern(newState.value, this.props.patternType[0])) {
			return {
				value: newState.value,
				selection: newState.selection
			}
		} else {
			this.setState({
				validationError: true
			});
			return {
				value: oldState.value,
				selection: oldState.selection
			}
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


	render() {
		const errClass = this.state.validationError ? "input__err" : "input-style";
		return (
			<Form className="my-1">
				<Form.Group as={Row} className="my-0">
					<Col xs={4} lg={5} xl={4} className="lable_middle px-0">
						<Form.Label className="ml-4 mr-1 my-0 text-style as-input-height">{this.props.name}:</Form.Label>
					</Col>
					<Col xs={8} lg={7} xl={8} className="my-0">
						<InputMask
							className={`${errClass} text-style px-2`}
							mask={this.props.mask}
							maskChar={'_'}
							alwaysShowMask={true}
							value={this.props.source}
							onChange={this.onChange}
							onBlur={this.onBlur}
							beforeMaskedValueChange={this.beforeMaskedValueChange}
						/>
					</Col>
				</Form.Group>
			</Form>
		);
	}
}
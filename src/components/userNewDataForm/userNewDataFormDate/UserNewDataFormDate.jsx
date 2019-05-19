import "./UserNewDataFormDate.css";
import React, {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import testPattern from "../../../utilities/testPattern";
import {changeUserNewData} from "../../../store/actions/user_action";

export default class UserNewDataFormDate extends Component{
	constructor(props) {
		super(props);
		this.state = {
			validationError: false
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(date) {
		if (testPattern(date, this.props.patternType)){
			let newDate = date;
			if (date !== null) {
				const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
				const month = date.getMonth() < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`;
				newDate = `${day}.${month}.${date.getFullYear()}`;
			}

			this.props.dispatch(changeUserNewData({
				path: this.props.path,
				newData: newDate
			}));
		} else {
			this.setState({
				validationError: true
			})
		}
	}

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

		let startDate = null;
		if (this.props.source !== null) {
			startDate = new Date(parseInt(this.props.source.substring(6)), parseInt(this.props.source.substring(0,2)-1), parseInt(this.props.source.substring(3,5)));
		}
		return (
			<Form className="my-1">
				<Form.Group as={Row} className="my-0">
					<Col xs={4} lg={5} xl={4} className="lable_middle px-0">
						<Form.Label className="ml-4 mr-1 my-0 text-style as-input-height">{this.props.name}:</Form.Label>
					</Col>
					<Col xs={8} lg={7} xl={8} className="my-0">
						<DatePicker
							className={`${errClass} text-style px-2`}
							selected={startDate}
							onChange={this.handleChange}
							minDate={new Date(1991, 0, 1)}
							dateFormat="dd.MM.yyyy"
							placeholderText="__.__.____"
							disabledKeyboardNavigation
							isClearable={true}
							showMonthDropdown
							showYearDropdown
							dropdownMode="select"
						/>
					</Col>
				</Form.Group>
			</Form>
		)
	}
};

/*
*
* */
import "./UserNewDataFormSelect.css";
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import {changeUserNewData} from "../../../store/actions/user_action";

const UserNewDataFormSelect = (props) => {

	const changeSelect = (event) => {
		props.dispatch(changeUserNewData({
			path: props.path,
			newData: event.target.value
		}))
	};

	return (
		<Form className="my-1">
			<Form.Group as={Row} className="my-0 align-items-center">
				<Col xs={4} lg={5} xl={4} className="lable_middle px-0">
					<Form.Label className="ml-4 mr-1 my-0 text-style as-input-height">{props.name}:</Form.Label>
				</Col>
				<Col xs={8} lg={7} xl={8} className="my-0">
					<Form.Control
						as="select"
						onChange={changeSelect}
						value={props.source}
						className="input-style text-style px-2 py-0"
					>
						<option className="text-style" disabled hidden></option>
						{
							props.sels.map((item, index) => {
								return (
									<option
										key={index}
										value={item}
										className="text-style"
									>
										{item}
									</option>
								)
							})
						}
					</Form.Control>
				</Col>
			</Form.Group>
		</Form>
	)
};

export default UserNewDataFormSelect;
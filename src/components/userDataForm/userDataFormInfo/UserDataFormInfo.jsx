import "./UserDataFormInfo.css";
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserDataFormInfo = (props) => {
	const focus = props.focus  ? "form-data-row_focused" : "form-data-row";

	return (
		<Container className="my-1">
			<Row
				id={props.id}
				className={`${focus}`}
				onClick={props.onClick}
			>
				<Col xs={4} className="text-style lable_middle px-0">
					{props.name}:
				</Col>
				<Col xs={8} className="text-style my-0 as-input-height">
					{props.source}
				</Col>
			</Row>
		</Container>
	);
};

export default UserDataFormInfo;
import "./MainForm.css";
import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UserDataForm from "../../components/userDataForm/UserDataForm";
import FormControls from "../../components/formControls/FormControls";
import UserNewDataForm from "../../components/userNewDataForm/UserNewDataForm";
import ModalMessage from "../../components/modalMessage/ModalMessage";

import {fetchUser, resetAttentionComment} from "../../store/actions/user_action";

class MainForm extends (Component) {
	render () {
		let modalMessageBlock = null;
		if (this.props.attention) {
			modalMessageBlock =
				<ModalMessage
					message={{
						title:`Вы нажали кнопку "Прервать"`,
						body: "Соединение прервано"
					}}
					dispatch={this.props.dispatch}
					action={resetAttentionComment}
				/>
			;
		}

		const MainFormBlock =
			<>
				{modalMessageBlock}
				<Container className="main-form">
					<Row className="main-form__head justify-content-center align-items-center my-1">
						<p className="main-form__head-text my-1">Пользователь № 1</p>
					</Row>
					<Row className="my-1 px-1">
						<Col lg={5} className="main-form-body__user-data my-1 px-3 py-2">
							<UserDataForm
								{...this.props.userData}
								focus={this.props.focus}
								dispatch={this.props.dispatch}
							/>
						</Col>
						<Col lg={2} className="main-form-body__controls my-1">
							<FormControls
								focus={this.props.focus}
								dispatch={this.props.dispatch}
							/>
						</Col>
						<Col lg={5} className="main-form-body__user-new-data my-1 px-3 py-2">
							<UserNewDataForm
								{...this.props.userNewData}
								dispatch={this.props.dispatch}
							/>
						</Col>
					</Row>
				</Container>
			</>
		;

		if (this.props.userData !== null) {
			return MainFormBlock;
		}
		return null;
	}

	componentDidMount () {
		this.props.dispatch(fetchUser(1));
	}
}

MainForm.propTypes = {
	userData: PropTypes.object,
	userNewData: PropTypes.object,
	focus: PropTypes.string,
	fetching: PropTypes.bool,
	error: PropTypes.string,
	attention: PropTypes.bool
};

function mapStateToProps(state) {
	return {
		userData: state.user.userData,
		userNewData: state.user.userNewData,
		focus: state.user.focus,
		fetching: state.user.fetching,
		error: state.user.error,
		attention: state.user.attention
	};
}


export default connect(mapStateToProps)(MainForm);
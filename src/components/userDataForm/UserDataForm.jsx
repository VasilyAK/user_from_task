import "./UserDataForm.css";
import React, {Component} from "react";

import UserDataFormInfo from "./userDataFormInfo/UserDataFormInfo";
import {setFocus} from "../../store/actions/user_action";

class UserDataForm extends Component {
	constructor (props) {
		super (props);
		this.dataClick = this.dataClick.bind(this);
	}


	dataClick (event) {
		this.props.dispatch(setFocus(event.target.parentNode.getAttribute("id")));
	}

	render () {
		const data = [
			{name: "Фамилия", source: this.props.surname, id: "surname"},
			{name: "Тип документа", source: this.props.documentType, id: "documentType"},
			{name: "Страна выдачи", source: this.props.country, id: "country"},
			{name: "Дата выдачи", source: this.props.dateOfGetDocument, id: "dateOfGetDocument"},
			{name: "Серия и номер", source: this.props.documentNumber, id: "documentNumber"},
			{name: "Код подразделения", source: this.props.unitCode, id: "unitCode"},
			{name: "Орган, выдавший документ", source: this.props.issuingAuthority, id: "issuingAuthority"},
			{name: "Адрес регистрации", source: this.props.registrationAddress, id: "registrationAddress"}
		];

		return (
			<div id="UserDataForm">
				{data.map((item, index) => {
					return (
						<UserDataFormInfo
							id={item.id}
							key={index}
							name={item.name}
							source={item.source}
							focus={this.props.focus === item.id}
							onClick={this.dataClick}
						/>
					 )
				})}
			</div>
		)
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside.bind(this), false);
	}

	componentWillMount() {
		document.addEventListener('click', this.handleClickOutside.bind(this), false);
	}

	handleClickOutside(event) {
		const domNode = document.querySelector("#UserDataForm");
		if (!event.path.includes(domNode)) {
			const copyBtn = document.querySelector("#CopyBtn");
			if (!event.path.includes(copyBtn)) {
				this.props.dispatch(setFocus(null));
			}
		}
	}
}

export default UserDataForm;
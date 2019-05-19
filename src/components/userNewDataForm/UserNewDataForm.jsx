import "./UserNewDataForm.css";
import React from "react";

import UserNewDataFormInput from "./userNewDataFormInput/UserNewDataFormInput";
import UserNewDataFormInputMasked from "./userNewDataFormInputMasked/UserNewDataFormInputMasked";
import UserNewDataFormInputDate from "./userNewDataFormDate/UserNewDataFormDate";
import UserNewDataFormSelect from "./userNewDataFormSelect/UserNewDataFormSelect";

function UserDataForm (props) {
	return (
		<>
			<UserNewDataFormInput
				name="Фамилия"
				source={props.surname}
				patternType="check-surname"
				path="surname"
				dispatch={props.dispatch}
			/>

			<UserNewDataFormSelect
				name="Тип документа"
				source={props.documentType}
				sels={["Паспорт", "Загран паспорт", "Паспорт моряка"]}
				path="documentType"
				dispatch={props.dispatch}

			/>

			<UserNewDataFormInput
				name="Страна выдачи"
				source={props.country}
				patternType="check-country"
				path="country"
				dispatch={props.dispatch}
			/>

			<UserNewDataFormInputDate
				name="Дата выдачи"
				source={props.dateOfGetDocument}
				patternType="check-dateOfGetDocument"
				path="dateOfGetDocument"
				dispatch={props.dispatch}
			/>

			<UserNewDataFormInputMasked
				name="Серия и номер"
				mask="9999-999999"
				source={props.documentNumber}
				patternType={["check-documentNumber", "check-documentNumber-blur"]}
				path="documentNumber"
				dispatch={props.dispatch}
			/>

			<UserNewDataFormInput
				name="Код подразделения"
				source={props.unitCode}
				patternType="check-unitCode"
				path="unitCode"
				dispatch={props.dispatch}
			/>

			<UserNewDataFormInput
				name="Орган, выдавший документ"
				source={props.issuingAuthority}
				patternType="check-issuingAuthority"
				path="issuingAuthority"
				dispatch={props.dispatch}
			/>

			<UserNewDataFormInput
				name="Адрес регистрации"
				source={props.registrationAddress}
				patternType="check-registrationAddress"
				path="registrationAddress"
				dispatch={props.dispatch}
			/>
		</>
	)
}

export default UserDataForm;
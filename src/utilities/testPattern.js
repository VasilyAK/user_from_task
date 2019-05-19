function testPattern (value, id) {
	switch (id) {
		case 'check-surname':
			return /^[А-ЯЁа-яё]*$/.test(value);

		case 'check-country':
			return /^[А-ЯЁа-яё\s]*$/.test(value);


		case 'check-dateOfGetDocument':
			const minDate = new Date(1991, 0, 1);
			return value - minDate >= 0 || value === null;

		case 'check-documentNumber':
			return !(/_\d/.test(value));

		case 'check-documentNumber-blur':
			return /\d\d\d\d-\d\d\d\d\d\d/.test(value) || /____-______/.test(value);

		case 'check-unitCode':
		return /^[0-9]*$/.test(value);


		case 'check-issuingAuthority':
			return /^[-_'"\?\!;:\.,\s\(\)А-ЯЁа-яё]*$/.test(value);


		case 'check-registrationAddress':
			return /^[-_'"\?\!;:\.,\s\d\(\)А-ЯЁа-яё]*$/.test(value);

		default:
			console.error("Function 'testPattern' got unknown id")
	}
}

export default testPattern;
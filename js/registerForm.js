class RegisterForm extends Form {
	loginProps = {
		type: 'text',
		name: 'user-login',
		required: true,
		className: 'form-control',
		placeholder: 'Введите login',
		errorText: 'Enter login!',
	};

	emailProps = {
		type: 'email',
		name: 'user-email',
		required: true,
		className: 'form-control',
		placeholder: 'Введите email',
		errorText: 'Enter email!',
	};

	passwordProps = {
		type: 'password',
		name: 'user-password',
		required: true,
		className: 'form-control',
		placeholder: 'Введите password',
		errorText: 'Enter password!',
	};

	passwordRepeatProps = {
		type: 'password',
		name: 'user-password-repeat',
		required: true,
		className: 'form-control',
		placeholder: 'Please repeate your passworrd',
		errorText: 'Enter same password',
	};

	render() {
		const { loginProps, emailProps, passwordProps, passwordRepeatProps } = this;
		const loginInput = new Input(loginProps);
		const emailInput = new Input(emailProps);
		const passwordInput = new Input(passwordProps);
		const passwordrepeatInput = new Input(passwordRepeatProps);
		const form = super.render(this.props);
		form.append(
			loginInput.render(),
			emailInput.render(),
			passwordInput.render(),
			passwordrepeatInput.render(),
		);
		return form;
	}
}

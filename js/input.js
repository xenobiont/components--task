class Input extends Component {
	handleFocus = () => {
		if (this.error) {
			this.error.remove();
		}
	};

	handleBlur = () => {
		if (!this.elem.value) {
			const error = this.createElement(
				'p',
				{ style: 'color: red' },
				this.props.errorText,
			);
			this.elem.after(error);
			this.error = error;
		}
	};

	render() {
		const { errorText, ...attr } = this.props;
		const element = this.createElement('input', attr);
		if (attr.required) {
			element.addEventListener('focus', this.handleFocus);
			element.addEventListener('blur', this.handleBlur);
		}
		this.elem = element;
		return element;
	}
}

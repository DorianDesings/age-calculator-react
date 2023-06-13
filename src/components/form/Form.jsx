import { useState } from 'react';
import { StyledImage } from './styles';

const Form = ({ date, setDate }) => {
	const [errors, setErrors] = useState({
		day: '',
		month: '',
		year: ''
	});
	return (
		<div>
			<form>
				<div>
					<label htmlFor='day'>Day</label>
					<input
						type='text'
						name='day'
						onChange={e =>
							handleChangeDay(e.target.value, date, setDate, errors, setErrors)
						}
					/>
					<span>{errors.day}</span>
				</div>
				<div>
					<label htmlFor='month'>Month</label>
					<input type='text' name='month' />
					<span>{errors.month}</span>
				</div>
				<div>
					<label htmlFor='year'>Year</label>
					<input type='text' name='year' />
					<span>{errors.year}</span>
				</div>
			</form>
			<StyledImage src='/public/icon-arrow.svg' alt='' />
		</div>
	);
};

const handleChangeDay = (value, date, setDate, errors, setErrors) => {
	const regexDigits = /\d+/g;
	if (!value) {
		setErrors({ ...errors, day: "Can't be blank" });
		return;
	} else if (!regexDigits.test(value)) {
		setErrors({ ...errors, day: 'Only digits' });
	}
	if (value > 0 && value <= 31) {
		setDate({ ...date, day: value });
		setErrors({
			day: '',
			month: '',
			year: ''
		});
	}
};

export default Form;

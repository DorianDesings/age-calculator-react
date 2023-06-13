import { useState } from 'react';
import Form from './components/form/Form';

const App = () => {
	const [date, setDate] = useState({
		day: 0,
		month: 0,
		year: 0
	});

	const [dateToPrint, setDateToPrint] = useState({
		years: '--',
		months: '--',
		days: '--'
	});
	return (
		<>
			<Form date={date} setDate={setDate} />
			<h2>{date.year} years</h2>
			<h2>{date.month} months</h2>
			<h2>{date.day} days</h2>
			<p>RESULT</p>
			<h2>{dateToPrint.years} years</h2>
			<h2>{dateToPrint.months} months</h2>
			<h2>{dateToPrint.days} days</h2>
		</>
	);
};

export default App;

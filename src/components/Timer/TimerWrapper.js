import { Timer } from './Timer';
import { useState } from 'react';

const TimerWrapper = () => {
	const [showTimer, setShowTimer] = useState(false);

	const toggleShow = () => setShowTimer(!showTimer);
	return (
		<div>
			<button onClick={toggleShow}>{showTimer ? 'Скрыть' : 'Показать'}</button>
			{showTimer && <Timer />}
		</div>
	);
};

export { TimerWrapper };

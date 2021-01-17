import { useState } from 'react';
import styles from './Square.module.css';
import { Square } from './Square';

const SquareContainer = () => {
	const [top, setTop] = useState(10);
	const [left, setLeft] = useState(10);
	const [isCapture, setIsCapture] = useState(false);
	function handleMouseMove(e) {
		if (!isCapture) {
			return;
		}
		const { movementX, movementY } = e;
		const nextLeft = movementX + left;
		const nextTop = movementY + top;
		if (nextLeft >= 0 && nextLeft <= 420) setLeft(movementX + left);
		if (nextTop >= 0 && nextTop <= 420) setTop(movementY + top);
	}

	return (
		<div className={styles.container} onMouseMove={handleMouseMove}>
			<Square
				top={top}
				left={left}
				onStartCapture={() => setIsCapture(true)}
				onEndCapture={() => setIsCapture(false)}
			/>
		</div>
	);
};

export { SquareContainer };

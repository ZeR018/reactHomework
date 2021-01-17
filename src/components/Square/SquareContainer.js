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
		setTop(movementY + top);
		setLeft(movementX + left);
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

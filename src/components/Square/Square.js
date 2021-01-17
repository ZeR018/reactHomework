import styles from './Square.module.css';
import propTypes from 'prop-types';
import { useEffect } from 'react';

const Square = (props) => {
	const { top, left, onStartCapture, onEndCapture } = props;
	let style = {
		left: left,
		top: top,
	};

	useEffect(() => {
		function handleMouseUp() {
			onEndCapture();
		}

		document.addEventListener('mouseup', handleMouseUp);

		return () => {
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, []);
	return (
		<div>
			<div style={style} className={styles.Square} onMouseDown={onStartCapture}></div>
		</div>
	);
};

Square.propTypes = {
	top: propTypes.number,
	left: propTypes.number,
	onStartCapture: propTypes.func.isRequired,
	onEndCapture: propTypes.func.isRequired,
};

export { Square };

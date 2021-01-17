import styles from './Square.module.css';
import propTypes from 'prop-types';

const Square = (props) => {
	const { top, left, onStartCapture, onEndCapture } = props;
	let style = {
		left: left,
		top: top,
	};
	return (
		<div>
			<div
				style={style}
				className={styles.Square}
				onMouseDown={onStartCapture}
				onMouseUp={onEndCapture}></div>
		</div>
	);
};

Square.propTypes = {
	top: propTypes.number,
	left: propTypes.number,
	onStartCapture: propTypes.func,
	onEndCapture: propTypes.func,
};

export { Square };

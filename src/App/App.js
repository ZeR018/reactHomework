import { Calc } from '../components/Calc';
import styles from './App.module.css';
import { Route } from 'react-router-dom';
import { SquareContainer } from '../components/Square';
import { TimerWrapper } from '../components/Timer';

const App = () => {
	return (
		<div className={styles.App}>
			{/*
      <Calc />
      */}
			{/*
				<SquareContainer />
			*/}
			<TimerWrapper />
		</div>
	);
};

export default App;

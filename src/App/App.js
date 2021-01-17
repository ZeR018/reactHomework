import { Calc } from '../components/Calc';
import styles from './App.module.css';
import { Route } from 'react-router-dom';
import { SquareContainer } from '../components/Square';

const App = () => {
	return (
		<div className={styles.App}>
			{/*
      <Calc />
      */}
			<SquareContainer />
		</div>
	);
};

export default App;

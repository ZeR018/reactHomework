import { Calc } from '../components/Calc'
import styles from './App.module.css'
import {Route} from 'react-router-dom';


const App = () => {
  
  return (
    <div className={styles.App}>
      <Calc />
    </div>
  )
}

export default App;

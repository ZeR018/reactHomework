import { useState } from 'react'
import styles from './Calc.module.css'

const Calc = () => {

  //state
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [res, setRes] = useState(0);

  //functions
  const getSum = () => setRes(+first + +second);
  const getSub = () => setRes(+first - +second);
  const getMulti = () => setRes(+first * +second);
  const getDev = () => setRes(+first / +second);
  const clear = () => {
    setRes(0);
    setFirst("");
    setSecond("");
  }

  return (
    <div className={styles.Calc}>
      <div className={styles.container}>

        <p className={styles.result}>
          <b className={styles.b}>
            {res}
          </b>
        </p>

        <div className={styles.inputs}>
          <input type="number" value={first} className={styles.input} onChange={(e) => setFirst(e.target.value)}/>
          <input type="number" value={second} className={styles.input} onChange={(e) => setSecond(e.target.value)} />
        </div>

        <div>
          <button className={styles.button} onClick={getSum}>Sum</button>
          <button className={styles.button} onClick={getSub}>Sub</button>
          <button className={styles.button} onClick={getMulti}>Multiply</button>
          <button className={styles.button} onClick={getDev}>Divide</button>
        </div>

        <div>
          <button className={styles.clear} onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export { Calc }
import { useState } from 'react'

const Calc = () => {

  //state
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [sum, setSum] = useState("");

  //functions
  const getSum = () => setSum(+first + +second);
  const clear = () => {
    setSum("");
    setFirst("");
    setSecond("");
  }

  return (
    <div>
      
      <div>
        <input type="number" value={first} onChange={(e) => setFirst(e.target.value)}/>
        <input type="number" value={second} onChange={(e) => setSecond(e.target.value)} />
      </div>
      <div>
        <button onClick={getSum}>Sum</button>
        <button onClick={clear}>Clear</button>
      </div>
      <p>
        Result: {sum}
      </p>
    </div>
  );
}

export { Calc }
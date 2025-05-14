import React, {  useState } from "react";

function GuessNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1

  const [inputValue, setInputValue] = useState(null);
//   const [reset, setReset] = useState(false);
  const [desiredNumber, setDesiredNumber] = useState(randomNumber);
  const [result, setResult] = useState("")


  const resetValues = ( ) => {
    setInputValue("")
    setDesiredNumber(randomNumber)
    setResult("")
  }
  
  const handleGuessedValue = () => {
    if(!inputValue  || parseInt(inputValue > 10 ) || parseInt(inputValue < 1)) return
    let num = parseInt(inputValue)
    if(num > desiredNumber ) setResult('Guessed High value')
    else if( num < desiredNumber) setResult('Guessed Low value')
    else setResult('Hurray! You guessed Correct')
    setInputValue("")
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
        {desiredNumber}
      <input
        type="number"
        value={inputValue}
        min={1}
        max={10}
        onChange={e => setInputValue(e.target.value)}
        style={{width:'200px', height:'20px'}}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleGuessedValue} >Check Guess</button>{" "}
        <button onClick={resetValues}>Reset Game</button>{" "}
      </div>
      <p>
        {result}
      </p>
    </div>  
  );
}

export default GuessNumber;

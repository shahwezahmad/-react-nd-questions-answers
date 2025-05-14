import React, { useState } from 'react'

function PasswordStrength() {
    const [inputValue, setInputValue] = useState("")
    const [result, setResult] = useState("")

    const checkStrength = () => {
        if(!inputValue || inputValue.trim() === '')  return 'Weak Password'

        // @Password Rules
        const firstCheck = inputValue.length >= 8
        const secondCheck = /[a-z]/.test(inputValue)
        const thirdCheck = /[A-Z]/.test(inputValue)
        const forthCheck = /\d/.test(inputValue)
        const fifthCheck = /[@#$%]/.test(inputValue)

        // check password level
        let rulesArray = [fifthCheck, secondCheck, thirdCheck, forthCheck, firstCheck]
        // let passwordLevel = 0
        // rulesArray.forEach((item) => {
        //     if(item) passwordLevel++
        // }) 

        // or 

        let passwordLevel = rulesArray.filter(Boolean).length

        if(passwordLevel === 0) return 'Weak Password' 
        else if( passwordLevel <= 3) return 'Level 1'
        return 'Level 2'    
    }

    // setResult(checkStrength())


  return (
    <div>
        <div>
            <h1>Password Strength</h1>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => setResult(checkStrength())} >Password Strength</button>
        </div>
        <div> {result ? (<div> <strong>Strength</strong> <span>{result}</span> </div>) : null }</div>
    </div>
  )
}

export default PasswordStrength

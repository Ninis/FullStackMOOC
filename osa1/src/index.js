import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
	const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => {
	return(
	  <button onClick={handleClick}>
	    {text}
	  </button>
	)
}

const App = (props) => {
	const nimi = 'Pekka'
	const ika = 10
	const [ counter, setCounter ] = useState(0)

	const setToValue = (value) => () => setCounter(value)

	return (
		<div>
			<h1>Greetings</h1>
			<Hello name="Arto" age={26 + 10} />
			<Hello name={nimi} age={ika}/>

			<h1>CounterStrike!</h1>
			<Display counter={counter}/>
			<Button
		        handleClick={() => setToValue(counter + 1)}
		        text='plus'
		    />
		    <Button
		        handleClick={() => setToValue(counter - 1)}
		        text='minus'
		    />
		    <Button
		        handleClick={() => setToValue(0)}
		        text='zero'
		    />

		    
		</div>
	)
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
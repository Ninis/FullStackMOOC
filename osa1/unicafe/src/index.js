import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ( {name, value} ) => {
	return (
		<tr>
			<td>{name}</td>
			<td>{value}</td>
		</tr>
	)
}

const Statistics = ({ good, neutral, bad }) => {
	const total = ( good + neutral + bad )
	const average = ((good*1) + (neutral*0) + (bad*-1))/total
	const positives = (good/total)*100

	if (total === 0) {
	    return (
	      <div>
	        <h1>Statistiikka</h1>
		    <p>
		    	Ei yhtään palautetta annettu
		    </p>
	      </div>
	    )
	}

	return (

		<div>
		  	<h1>Statistiikka</h1>
	    	<table>
	    		<tbody>
	    			<Statistic name = 'Hyvä' value = {good} />
	    			<Statistic name = 'Neutraali' value = {neutral} />
	    			<Statistic name = 'Huono' value = {bad} />
	    			<Statistic name = 'Yhteensä' value = {total} />
	    			<Statistic name = 'Keskiarvo' value = {average} />
	    			<Statistic name = 'Positiivisia' value = {positives} />
    			</tbody>
			</table>
	    </div>
	)
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addToGood = (good) => () => setGood(good)
  const addToNeutral = (neutral) => () => setNeutral(neutral)
  const addToBad = (bad) => () => setBad(bad)

  return (
    <div>
    	<h1>Anna palautetta!</h1>
    	<button onClick={addToGood(good + 1)}>
		        Hyvä
	    </button>
    	<button onClick={addToNeutral(neutral + 1)}>
		        Neutraali
	    </button>
    	<button onClick={addToBad(bad + 1)}>
		        Huono
	    </button>
    	<Statistics good = {good} neutral = {neutral} bad = {bad} />
	</div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
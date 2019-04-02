import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return (
		<>
			<h1>{props.course}</h1>
		</>
	)
}

const Part = (props) => {
	return (
		<>
			<p>
			  {props.course} {props.exercises}
			</p>
	    </>
	  )
}

const Total = (props) => {
	return (
		<>
			<p>yhteensä {props.total} tehtävää</p>
		</>
	)
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Part course={part1} exercises={exercises1}/>
      <Part course={part2} exercises={exercises2}/>
      <Part course={part3} exercises={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
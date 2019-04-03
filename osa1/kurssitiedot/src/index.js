import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return <h1>{props.course.name}</h1>
}

const Part = (props) => {
	return (
		  props.course.parts.map((part) => <p>{part.name} {part.exercises}</p>)
	  )
}

const Total = (props) => {
	let total = 0

	props.course.parts.forEach(part => {
	  total += part.exercises
	})

	return (
			<p>yhteensä {total} tehtävää</p>
	)
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
	  <Part course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
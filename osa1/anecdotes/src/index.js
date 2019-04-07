import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {
	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(new Array(7).join('0').split('').map(parseFloat))
	const [maxVotes, setMaxVotes] = useState(0)

	const max = anecdotes.length - 1
	const nextAnecdote = (anecdote) => () => setSelected(anecdote)

	const random = Math.floor(Math.random() * (max-0))

	const updateMaxVotes = () => {
		const mostIndex = Object.keys(points).reduce((best, index) => (
	      points[index] > best.value
	        ? { index, value: points[index] }
	        : best
	    ), { index: 0, value: -Infinity })
	    .index
		setMaxVotes(mostIndex)

	}

	const mostVotes = () => () => {

		return points.findIndex(Math.max(...points))
	}
	console.log(mostVotes())

	const vote = (selected) => () => {
		let newVotes = [...points]
		newVotes[selected] += 1
	    setPoints(newVotes)
	    console.log('Vote set, moving on to update max')
	    updateMaxVotes()
	}

	return (
		<div>
			<h1>Anecdote of the day</h1>
			{anecdotes[selected]} <br/>
			Has {points[selected]} votes <br/>
			<button onClick={vote(selected)}>vote</button>
			<button onClick={nextAnecdote(random)}>next anecdote</button>

			<h1>Anecdote with most votes</h1>
			{anecdotes[maxVotes]} <br/>
			Has {points[maxVotes]} votes <br/>
		</div>
	)
}

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
	<App anecdotes={anecdotes} />,
	document.getElementById('root')
)
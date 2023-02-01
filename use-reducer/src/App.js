import React, {useReducer} from "react"

export default function App() {

	const [placar, dispatcher] = useReducer(reducer, {
		score1: 0,
		score2: 0
	})

	function reducer(placar, action) {
		switch (action.type) {
			case "SCORE1":
				return {
					score1: placar.score1 + 1,
					score2: placar.score2
				}
			case "SCORE2":
				return {
					score1: placar.score1,
					score2: placar.score2 + 1
				}
		}
	}

	return (
		<>
			<h1>React Hooks - useReducer</h1>
			<hr />
			<h2>Placar:</h2>
			
			<p>Player 1: {placar.score1}</p>
			<p>Player 2: {placar.score2}</p>
			<hr />
			<p>
				<button onClick={()=> dispatcher({type: "SCORE1"})}>Score 1</button>
				<button onClick={()=> dispatcher({type: "SCORE2"})}>Score 2</button>
			</p>
			
		</>
	)
}
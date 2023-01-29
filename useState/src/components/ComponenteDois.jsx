import React, { useState } from 'react'

// Usando useState corretamente com strings

export default (props) => {

	const [playerName, setPlayerName] = useState(()=> {
		return 'joão'
	})

	const [playerScore, setPlayerScore] = useState(()=> {
		return 0
	})


	function alteraNome() {
		setPlayerName(()=> 'Joaquim')
	}

	function alteraScore() {
		setPlayerScore(() => playerScore + 1)
	}


	return (
		<div className="componente">
			<p className="titulo">{props.titulo}</p>
			<p>Nome: {playerName}</p>
			<p>Score: {playerScore}</p>
			<button onClick={alteraNome}>Alterar Nome</button>
			<button onClick={alteraScore}>Alterar Score</button>
		</div>
	)
}
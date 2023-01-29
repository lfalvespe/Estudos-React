import React, {useState} from 'react'

// Usando useState da forma correta com números

export default function ComponenteUm(props) {
	const [valor, setValor] = useState(() => 0)

	function decrement() {
		setValor(() => valor - 1)
	}

	function increment() {
		setValor(() => valor + 1)
	}

	return(
		<div className='componente'>
			<p className="titulo">{props.titulo}</p>
			<p>Valor: {valor}</p>
			<button onClick={decrement}>Decrementar</button>
			<button onClick={increment}>Incrementar</button>
		</div>
	)
}
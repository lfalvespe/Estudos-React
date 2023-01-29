import React, {useState} from 'react'

export default function App() {

	const [valor, setValor] = useState(0)

	function increment() {
		setValor(valor + 1)
	}

	return (
		<>
			<p>valor: {valor}</p>
			<button onClick={increment}>Incrementar</button>
		</>
	)
}
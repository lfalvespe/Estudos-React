import React, {useState, useEffect} from 'react'
import './App.css'

export default function App() {

	const [valor, setValor] = useState(()=> 0)
	const [valor2, setValor2]= useState(()=> 100)

	function increment() {
		return setValor(() => valor + 1)
	}

	function increment2() {
		return setValor2(()=> valor2 + 10)
	}

	useEffect(()=> {
		return console.log('Alterou o valor')
	},[valor])

	useEffect(()=> {
		return console.log('Alterou o valor 2')
	},[valor2])

	return (
		<div>

			<div className="valor">
				<p>Valor: {valor}</p>
				<button onClick={increment}>Incrementar</button>
			</div>

			<div className='valor'>
				<p>Valor 2: {valor2}</p>
				<button onClick={increment2}>Incrementar</button>
			</div>
		
		</div>
	)
}
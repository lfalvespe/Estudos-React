import React, {useState, useRef} from "react"

export default function App() {

	const [numero, setNumero] = useState('')
	const [tabuada, setTabuada] = useState([])

	const inputRef = useRef()

	function criarTabuada() {
		const temp = []

		for (let i = 0; i<=10; i++) {
			temp.push(`${numero} x ${i} = ${numero*i}`)
		}

		setTabuada(()=> temp)
		setNumero('')
		inputRef.current.focus()
	}

	return (
		<>
			<h1> Tabuada React</h1>
			<hr />
			<input ref={inputRef} type="number" value={numero} onChange={(e) => setNumero(()=> e.target.value)} placeholder="Digite um número"/>
			<button onClick={criarTabuada}>Ver Tabuada</button>

			{tabuada.map(linha=> <p>{linha}</p>)}

			
			
		</>
	)
}
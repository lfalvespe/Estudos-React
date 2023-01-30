import React, {useState, useEffect, useRef} from "react"

export default function App() {

	const [texto, setTexto] = useState('')	

	const total = useRef(0)

	useEffect(()=> {
		total.current++
	})

	return (
		<>
		<h1>React Hooks - useRef</h1>
		<hr />
		<p>Escreva aqui: <input onChange={(event)=> setTexto(event.target.value)} /></p>
		<hr /> 

		<p>Veja aqui: <strong>{texto}</strong></p>
		<hr />

		<p><strong>Total renders:</strong> {total.current}</p>


		</>
	)
}
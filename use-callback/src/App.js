import React, { useCallback, useState } from "react"
import Lista from './components/Lista'

export default function App() {

	const [numero, setNumero] = useState(0)

	const [dark, setDark] = useState(false)

	const tema = {
		backgroundColor: dark ? "#000" : "#fff",
		color: dark ? "#fff" : "#000"
	}

	// const resultado = ()=> {
	// 	return [numero*2, numero*3, numero*4]
	// }


	// Com useCallback a função só é executada quando necessário
	const resultado = useCallback(()=> {
		return [numero*2, numero*3, numero*4]
	}, [numero])

	return(
		<div style={tema}>
			<h1>React Hooks - useCallback</h1>
			<hr />
			<button onClick={()=> setDark(old=> !old)}>Alterar Tema</button>
			<p>Numero: {numero}</p>
			<button onClick={()=> setNumero(numero + 1)}>Incrementar</button>
			<hr />
			<Lista resultado={resultado} />
		</div>
	)
}

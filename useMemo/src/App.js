import React, {useState, useEffect, useMemo} from "react"

export default function App() {

	const [valor, setValor] = useState(0)
	const [numero, setNumero] = useState(0)
	
	//const valorCalculado = funcaoDemorada(valor)

	const valorCalculado = useMemo(()=> {
		funcaoDemorada(valor)
	}, [valor])

	function aumentarValor() {
		setValor(()=> valor + 1)
	}
	function aumentarNumero() {
		setNumero(()=> numero + 1)
	}
	function funcaoDemorada(num) {
		for(let i = 0; i < 1000000000; i++) {}
		return num * 2
	}


	return (
		<>
		<h1>React Hooks - useMemo</h1>
		<hr />
		<p>Valor: {valor}</p>
		<p>Número: {numero}</p>
		<p>Valor Calculado {valorCalculado}</p>
		<hr />
		<button onClick={aumentarValor}>Aumentar Valor</button>
		<button onClick={aumentarNumero}>Aumentar Número</button>
		
		</>
	 )
	
}
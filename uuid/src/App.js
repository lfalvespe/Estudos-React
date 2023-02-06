import React, {useState} from "react"
import {v4 as uuid} from 'uuid'

export default function App() {

	const [nome, setNome] = useState('')
	const [pessoas, setPessoas] = useState([])

	function adicionarPessoa() {
		setPessoas(()=> [...pessoas, nome])
		console.log(pessoas)
	}

	return (
		<>
			<h1>React Unique ID</h1>
			<hr />
			<input type="text" value={nome} onChange={(event)=> setNome(()=> event.target.value)} placeholder="Digite um nome"/>
			<button onClick={adicionarPessoa}>Adicionar</button>
			<hr />

			<h2>Lista de Pessoas</h2>
			{pessoas.map(pessoa => <p key={uuid()}>{pessoa}</p>)}

			
		</>
	)
}
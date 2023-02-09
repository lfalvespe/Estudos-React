import React, {useState, useEffect, useRef, useId} from "react"

import ListaContatos from "./Components/ListaContatos"
import {v4 as uuid} from 'uuid'

export default function App() {

	// States

	const [contato, setContato] = useState({id: '', nome: '', telefone: ''})

	const [listaContatos, setListaContatos] = useState([])

	const inputNomeRef = useRef()
	const inputTelefoneRef = useRef()
	const idNome = useId()
	const idTelefone = useId()

	// Métodos:

	function cadastrar() {

		if (!contato.nome || !contato.telefone) { return }
			
		let duplicado = listaContatos.find((c)=> c.nome === contato.nome && c.telefone === contato.telefone)

		if (typeof duplicado !== 'undefined') { 
			inputTelefoneRef.current.focus()
			alert('Contato já cadastrado')
			return 
		} 

		setListaContatos((old)=> [...old,{...contato, id: uuid()}])
		inputNomeRef.current.focus()
		setContato({nome: '', telefone: ''})
	
	}

	function enterAdicionar(event) {
		if (event.key === "Enter") {
			cadastrar()
		}
	}

	// Persistência no localStorage

	// Pegar os dados do localStrorage no início
	useEffect(()=> {
		setListaContatos(JSON.parse(localStorage.getItem("meus_contatos")))
	}, [])

	// Escutar as alterações na lista e salvar no localStorage
	useEffect(()=> {
		localStorage.setItem("meus_contatos", JSON.stringify(listaContatos))
	}, [listaContatos])

	// Limpar a lista de contatos

	function limparLocalStorage(){
		setListaContatos([])
	}

	// Remover contato por ID
	function removerContato(id) {
		let tmp = listaContatos.filter(ct=> ct.id !== id)

		setListaContatos(tmp)
	}

	return(
		<>
			<h1>Minha Lista de Contatos</h1>
			<hr />
			<div>
				<label htmlFor={idNome}>Nome: </label>
				<input ref={inputNomeRef} type="text" value={contato.nome} placeholder="Digite o nome" onChange={e=> setContato({...contato, nome: e.target.value})} />
			</div>
			<div>
				<label htmlFor={idTelefone}>Telefone: </label>
				<input ref={inputTelefoneRef} type="number" value={contato.telefone} placeholder="Digite o telefone" onChange={e=> setContato({...contato, telefone: e.target.value})} onKeyUp={enterAdicionar} />
			</div>
			<button onClick={cadastrar} id="btnCadastrar">Cadastrar</button>
			<button onClick={limparLocalStorage}>Limpar Lista</button>

			<hr />
			<h2>Contatos:</h2>

			{listaContatos.map(ct=> {
				return(
					<ListaContatos key={ct.id} contato = {ct} remover={removerContato}/>
				)
			})}
		</>
	)
}
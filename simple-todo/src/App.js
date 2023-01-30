import React, {useState, useEffect, useRef} from "react"

export default function App() {

	const [tituloTarefa, setTituloTarefa] = useState('')
	const [listaTarefas, setListaTarefas] = useState(()=> [])
	const idTarefa = useRef(0)

	const inputRef = useRef()


	function adicionarTarefa() {
		setListaTarefas((old)=> {
			return [...old, {id: idTarefa.current, titulo: tituloTarefa}]
		})
		idTarefa.current++
		inputRef.current.focus()
		setTituloTarefa(()=> '')
	}

	function limparTudo() {
		setListaTarefas(()=> [])
	}

	function excluirTarefa(id) {
		const tmp = listaTarefas.filter((tarefa)=> tarefa.id !== id)
		setListaTarefas(()=> tmp)
	}

	return (
		<>
			<h1>To do List</h1>
			<hr />
			<input ref={inputRef} type="text" value={tituloTarefa} placeholder="Digite uma nova tarefa" onChange={(event)=> setTituloTarefa(()=> event.target.value)}/>
			<button onClick={adicionarTarefa}>Adicionar</button>
			<button onClick={limparTudo}>Limpar Tudo</button>

			<p>Tarefas:</p>
			{listaTarefas.map((tarefa)=> {
				return (
					<p key={tarefa.id}>{tarefa.id} - {tarefa.titulo} <span onClick={()=> excluirTarefa(tarefa.id)}>[ Excluir ]</span></p>
				)
			})}
			
		</>
	)
}
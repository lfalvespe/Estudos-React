import React from "react"

export default function ListaContatos({contato, remover}) {
	return(
		<div>
			{contato.nome} - {contato.telefone}
			<button onClick={()=> remover(contato.id)}>Remover</button>
		</div>
	)
}
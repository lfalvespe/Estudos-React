import React from 'react'

import clientes from '../dados_clientes/dados_clientes'


function lista() {
	return (
		clientes.map(cliente => {
			return (
				<li>Nome: {cliente.nome} | Sexo: {cliente.sexo} | Idade: {cliente.idade} | Telefone: {cliente.telefone} | Email: {cliente.email}</li>
			)
		}
		)	)
}

const ComponenteUm = () =>

	<div className="componente">
		{lista()}
	</div>

export default ComponenteUm
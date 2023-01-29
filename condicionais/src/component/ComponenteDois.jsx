import React from 'react'

// Utilizando Ooperador ternário

const ComponenteDois = (props) => {
	return (
		props.idade < 18 ?
		<div className="componente">
			<p className="titulo">{props.titulo}</p>
			<p>Você é menor de idade. Tem apenas {props.idade} anos.</p>
		</div>
	:
		<div className="componente">
			<p className="titulo">{props.titulo}</p>
			<p>Você é maior de idade. Já tem {props.idade} anos.</p>
		</div>

	)
	
}

export default ComponenteDois
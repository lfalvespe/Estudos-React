import React from 'react'

// Utilizando condicionais:

const ComponenteUm = (props) => {
	if (props.nome === 'luiz') {
		return (
			<div className="componente">
				<p className='titulo'>{props.titulo}</p>
				<p>Correto, Meu nome é {props.nome}</p>
			</div>
		)
	} else {
		return (
			<div className="componente">
				<p className="titulo">{props.titulo}.</p>
				<p>Não, Meu nome não é {props.nome}.</p>
			</div>
		)
	}

}	

export default ComponenteUm
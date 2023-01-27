import React from 'react'

const ComponenteFilho = (props) => {
	return (
		<div className="componente">
			<p className="titulo">{props.titulo}</p>
			<p className='texto'>{props.children}</p>
			<p className='texto'>Cargo: {props.cargo}</p>
		</div>
	)
}

export default ComponenteFilho
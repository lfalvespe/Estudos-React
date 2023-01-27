import React from 'react'

const ComponenteFilho = (props) => {
	return (
		<div className="componente">
			<p className="titulo">{props.titulo}</p>
			<p className="texto">
				<button onClick={props.click}>Clique</button>
			</p>
		</div>
	)
}

export default ComponenteFilho
import React from 'react'

// Condicionais com boolean

const ComponenteTres = (props) => {
	
	if (props.estudante) {
		return (
			<div className="componente">
				<p className="titulo">{props.titulo}</p>
				<p>É estudante.</p>
			</div>
		)
	} else {
		return (
			<div className="componente">
			<p className="titulo">{props.titulo}</p>
			<p>Não é estudante.</p>
		</div>
		)
	}
	
}

export default ComponenteTres

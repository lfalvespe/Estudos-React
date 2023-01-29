import React from 'react'

const ComponenteCinco = (props) => {
	if (props.time === 'sport') {
		return (
			<div className="componente">
				<p className="titulo">{props.titulo}</p>
				{props.children}
			</div>
		)
	}
}  

export default ComponenteCinco
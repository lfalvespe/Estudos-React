import React from 'react'

export default props =>
	<div className="componentes">
		<p>Título {props.titulo}</p>
		<p>{props.texto}</p>
		{props.children}
	</div>
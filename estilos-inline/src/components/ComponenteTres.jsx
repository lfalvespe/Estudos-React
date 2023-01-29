import React from 'react'

const ComponenteTres = (props) => {
	return (
		<div className="componente">
			<p className='titulo'>{props.titulo}</p>
			<p style = {{color: props.color}}>Texto do componente três aqui.</p>
		</div>
	)
}

export default ComponenteTres
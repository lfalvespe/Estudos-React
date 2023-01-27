import React from 'react'
import './Comment.css'

function Comment(props) {
	return (
		<div className="comentario">
			<p className="titulo">{props.titulo}</p>
			<p className="texto">{props.texto}</p>
			<p className="author">{props.author}</p>
		</div>
	)
}

export default Comment
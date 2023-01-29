import React from 'react'

// Criando uma variável com os estilos

const ComponenteDois = (props) => {

	const estilo = {
		textAlign:"center", 
		backgroundColor:"beige", 
		color:"navy", 
		padding:"20px", 
		borderRadius:"10px",
		boxShadow: "0px 0px 8px rgba(0,0,0,0.3)"
	}

	return (
		<div className="componente">
			<p className="titulo">{props.titulo}</p>
			<p className="texto" style={estilo}>
				Texto do componente dois aqui.
			</p>
		</div>
	)
	}

	export default ComponenteDois
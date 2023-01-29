import React from 'react'

//Inserindo Estilos inline

const ComponenteUm = (props) => {
	return (
		<div className="componente">
			<p className='titulo'>{props.titulo}</p>
			<p className="texto" style={{textAlign:"center", color:"purple",fontWeight:"bold", backgroundColor:"yellow", borderRadius:"10px", padding:"10px"}}>
				Texto do componente aqui.
			</p>
		</div>
	)
}


export default ComponenteUm
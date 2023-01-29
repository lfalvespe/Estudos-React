import React from 'react'

const ComponenteQuatro = (props) => {
	switch (props.sexo) {
		case 'm':
			return (
				<div className="componente">
					<p className="titulo">{props.titulo}</p>
					<p>Pessoa do sexo masculino.</p>
				</div>
			)
		
		case 'f': 
			return (
				<div className="componente">
					<p className="titulo">{props.titulo}</p>
					<p>Pessoa do sexo feminino.</p>
				</div>
			)
		   
		default:
			return (
				<div className="componente">
					<p className="titulo">{props.titulo}</p>
					<p>Pessoa prefere não infoprmar o sexo.</p>
				</div>
			)
		
	}

}

export default ComponenteQuatro
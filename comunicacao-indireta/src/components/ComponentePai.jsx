import React from 'react'

import ComponenteFilho from './ComponenteFilho'

function clicar() {
	console.log('Botão do Componente filho CLICADO!')
}

const ComponentePai = (props) => {
	return (
		<div className="componente">
			<p className="titulo">{props.titulo}</p>
			<ComponenteFilho titulo="Componente Filho" click={clicar}/>
		</div>
	)
}

export default ComponentePai
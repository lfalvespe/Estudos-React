import React from 'react'

import ComponenteFilho from './ComponenteFilho'

const ComponentePai = (props) => {
	return (
		<div className="componente">
			<p className="titulo">{props.titulo}</p>
			<p className='texto'>Texto do Componente Pai</p>

			<ComponenteFilho titulo="Componente Filho" cargo="Professor">
				Maria
			</ComponenteFilho>
				
			<ComponenteFilho titulo="Componente Filho" cargo="Engenheiro">
				Antônio
			</ComponenteFilho>

			<ComponenteFilho titulo="ComponenteFilho" cargo="Piloto">
				Ana
			</ComponenteFilho>
		</div>
	)
}

export default ComponentePai
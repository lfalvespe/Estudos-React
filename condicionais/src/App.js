import React from 'react'
import './App.css'

import ComponenteUm from './component/ComponenteUm'
import ComponenteDois from './component/ComponenteDois'
import ComponenteTres from './component/ComponenteTres'
import ComponenteQuatro from './component/ComponenteQuatro'
import ComponenteCinco from './component/ComponenteCinco'

function App() {
	return (
		<div className='box'>
			<ComponenteUm titulo="Componente Um" nome = "luiz"/>
			<ComponenteUm titulo="Outro ComponenteUm" nome="ana" />

			<ComponenteDois titulo="Componente Dois" idade={21}/>
			<ComponenteDois titulo="Outro Componente Dois" idade={16} />

			<ComponenteTres titulo="Componente Tres" estudante = {true} />
			<ComponenteTres titulo="Outro Componente Três" estudante = {false} />

			<ComponenteQuatro titulo="Componente Quatro" sexo='m' />
			<ComponenteQuatro titulo="Outro Componente Quatro" sexo='f' />
			<ComponenteQuatro titulo="Mais um Componente Quatro" sexo="o" />

			<ComponenteCinco titulo="Componente Cinco" time='sport'> 
				<p>O Sport é campeão.</p>
			</ComponenteCinco>

		</div>
	)
}

export default App


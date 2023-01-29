import React from 'react'

import ComponenteUm from './components/ComponenteUm'
import ComponenteDois from './components/ComponenteDois'
import ComponenteTres from './components/ComponenteTres'

function App() {
	return (
		<>
			<ComponenteUm titulo="Componente Um"/>
			<ComponenteDois titulo="Componente Dois" />
			<ComponenteTres titulo="Componente Três" color="red"/>
			
		</>
	)
}

export default App
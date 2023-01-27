import React from 'react'

import ComponenteUm from './components/ComponenteUm'

function App() {
	return (
		<>
			<ComponenteUm titulo="Título do componente" texto="texto do componente aqui.">
				<ul>
					<li>item 1</li>
					<li>item 2</li>
					<li>item 3</li>
				</ul>
			</ComponenteUm>
		</>
	)
}

export default App
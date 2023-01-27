import React from 'react'
import './App.css'

import Comment from './components/Comment'

function App() {
	return (
		<>
			<h1>Comentários</h1>
			<Comment titulo="Comentário 1" texto="Texto do comentário 1 aqui." author="Maria Joaquina" />
			<Comment titulo="Comantário 2" texto="Aqui vai o texto do segundo comentário" author="José Luiz" />
			<Comment titulo="Comantário 3" texto="e Aqui o texto do terceiro comentário" author="Ana Maria" />
		</>
	)
}

export default App
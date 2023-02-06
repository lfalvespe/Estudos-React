import React from "react"

import { Componente1, Componente2, Componente3 } from "./Components"

export default function App() {
	return(
		<>
			<h1>React - Vários componentes em um só arquivo</h1>
			<hr />
			<p>Não é a melhor prática e deve ser evitado.</p>
			<hr />
			<Componente1 />
			<Componente2 />
			<Componente3 />

		</>
	)
}
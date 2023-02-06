import React, {useId} from "react"

export default function App() {

	const id1 = useId()
	const id2 = useId()

	return (
		<>
			<h1>React Hooks - userID</h1>
			<hr />
			<div>
				<input type="checkbox" id={id1} />
				<label htmlFor={id1}>Opção 1</label>
			</div>

			<div>
				<input type="checkbox" id={id2} />
				<label htmlFor={id2}>Opção 2</label>
			</div>

		</>
	)
}
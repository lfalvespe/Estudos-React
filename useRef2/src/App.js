import React, {useState, useEffect, useRef} from 'react'

export default function App() {

	const input1Ref = useRef()
	const input2Ref = useRef()

	function alterar1() {
		input1Ref.current.focus()
		input1Ref.current.value = 'Valor do input 1 alterado'
	}

	function alterar2() {
		input2Ref.current.focus()
		input2Ref.current.value = 'Valor do input 2 alterado'
	}

	return (
		<>
		<h1>React Hooks - useRef</h1>
		<hr />
		<p>Input 1: <input ref={input1Ref} type="text"/></p>
		<p>Input 2: <input ref={input2Ref} type="text"/></p>
		<hr />

		<button onClick={alterar1}>Alterar 1</button>
		<button onClick={alterar2}>Alterar 2</button>
		</>
	)
}
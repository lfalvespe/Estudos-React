import React, {useState, useEffect} from "react"
import {v4 as uuid} from 'uuid'

export default function Lista({resultado}) {

	const [lista, setLista] = useState([])

	useEffect(()=> {
		setLista(resultado())
		console.log("RENDER")
	}, [resultado])

	return(
		lista.map(item=> <p key={uuid()}>{item}</p>)
	)
}
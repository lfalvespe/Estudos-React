import React, {useState, useEffect} from 'react'
import './App.css'


export default function App() {

	const [usuarios, setUsuarios] = useState(()=> [])

	useEffect(()=> {

		fetch('https://dummyjson.com/users')
		.then(resp => resp.json())
		.then(dados => {
			
			setUsuarios(()=> dados.users)
			console.log(dados.users)
		})

	}, [])


	return (
		<>
		<header>
			<h1>React Hooks - APIs</h1>
		</header>

		<table>
			<caption>Cadastro de Clientes</caption>
			<thead>
				<tr>
					<th>ID</th>
					<th>Foto</th>
					<th>Nome</th>
					<th>Sobrenome</th>
					<th>Data de Nasc</th>
					<th>Tefone</th>
					<th>Email</th>
				</tr>
			</thead>

			<tbody>
				{usuarios.map(usuario => {
					return (
						<tr key={usuario.id}>
							
							<td>{usuario.id}</td>
							<td><img src={usuario.image} height="30" alt='' /></td>
							<td>{usuario.firstName}</td>
							<td>{usuario.lastName}</td>
							<td>{usuario.birthDate}</td>
							<td>{usuario.phone}</td>
							<td>{usuario.email}</td>
							
						</tr>
					)
				})}
				
			</tbody>
	
		</table>

		</>
	)
}
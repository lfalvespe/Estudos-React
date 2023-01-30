import React, {useState, useEffect, useRef} from 'react'

export default function App() {

	const clientes = ['maria', 'josé', 'ana', 'luiz']
	const produtos = ['pão', 'leite', 'bolo', 'café']
	const vendas = ['2x bolo - Ana', '12x pão - josé', '1x leite - maria', '3x café - luiz']

	const [info, setInfo] = useState('Clientes')
	const [lista, setLista] = useState([])
	const [total, setTotal] = useState(0)

	useEffect(()=> {
		console.clear()
		switch (info) {
			case 'Clientes':
				setLista(()=> clientes.join(' | '))
				console.table(clientes)
				break
			case 'Produtos':
				setLista(()=> produtos.join(' | '))
				console.table(produtos)
				break
			case 'Vendas':
				setLista(()=> vendas.join(' | '))
				console.table(vendas)
		}
	}, [info])

	useEffect(()=> {
		console.log('Total alterado')
	}, [total])

	return (
		<>
		<h1>React Hooks - useEffect</h1>
		<hr />
		<p><strong>{info}</strong></p>
		<p>Resultado: {lista}</p>
		<hr />
		<button onClick={()=> setInfo(()=> 'Clientes')}>Clientes</button>
		<button onClick={()=> setInfo(()=> 'Produtos')}>Produtos</button>
		<button onClick={()=> setInfo(()=> 'Vendas')}>Vendas</button>

		<p><strong>Total: </strong> {total}</p>
		<p><button onClick={()=> setTotal(()=> total + 1)}>Aumentar</button></p>
		
		</>

	)
}
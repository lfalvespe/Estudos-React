import React, { useState } from "react"
import './App.css'

export default function App() {

	const [escuro, setEscuro] = useState(()=> false)

	const tema = {
		backgroundColor: escuro ? "rgb(24, 24, 24)" : "#fff",
		color: escuro ? "#fff" : "rgb(24, 24, 24)"
	}


	return (
		<div style={tema}>
			<h1>React - Tema Claro/Escuro</h1>
			<button onClick={()=> setEscuro(old => !old)}>Dark Mode On/Off</button>
			<hr />
			<h2>Criando alternador de Dark Mode</h2>

			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque expedita nam adipisci asperiores corporis ratione quaerat eos odit, dolore non dolor cupiditate ullam corrupti consequatur deserunt soluta dolores atque in!
				Voluptatum, et in. Sint dolorem quos voluptatem sequi ullam sit, libero quis ipsa quidem facere temporibus earum fugiat at consequatur a eius est provident modi. Consectetur nulla deserunt cum voluptas!
				Voluptas eius molestiae magni quis provident nesciunt ad saepe harum expedita debitis laudantium facere aut, atque tempore laborum, doloremque sapiente impedit error. Consequatur veniam temporibus ab soluta. Fugit, a ad!
				Deleniti totam dignissimos odit beatae id magni veritatis possimus hic, sequi quod nesciunt ut voluptate, itaque cupiditate voluptates ducimus obcaecati repudiandae quis. Temporibus vitae, quo cumque consequatur fuga esse at.
				Dolores quia hic saepe laboriosam facere ad ex, delectus aperiam error est? Ratione illum ipsum repellat alias, veritatis corrupti officiis repudiandae odio sunt? Maxime beatae aspernatur libero ratione consequatur nemo!
				Dolorum, quos illum quam quod similique ab! Hic similique reiciendis voluptates deserunt maxime, non, accusamus repellendus minima alias odio vitae voluptatem debitis vero repudiandae temporibus tempora, fuga dolor quis rem!
				Voluptatum distinctio eum quo laudantium dolore illum omnis autem iste laborum, necessitatibus quibusdam temporibus pariatur minima architecto quisquam veritatis harum. Obcaecati ex, porro illo molestiae doloremque ratione! Quod, voluptatum deserunt.
				Obcaecati fugiat illo, ipsa dolor rem quis voluptates debitis ullam, itaque, odio molestias? Cum, natus quaerat tenetur obcaecati magni tempora quisquam hic omnis exercitationem recusandae in nemo, velit sed officia.
				Corporis molestias incidunt labore enim quidem quas minima quam excepturi ex assumenda iusto sed consequuntur necessitatibus repellat mollitia rerum eveniet, modi et cumque! Hic ullam delectus, aperiam at placeat libero.
				Totam esse sapiente adipisci ducimus animi, sunt blanditiis tempore dignissimos voluptatibus beatae molestiae vitae ad? Culpa aut facilis adipisci, atque corporis quasi illum aliquam aliquid ullam. Commodi omnis rerum tenetur?
			</p>
		</div>
	)
}
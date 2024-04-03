import "./App.css";
import quoteBook from "../media/quoteBook.png"
import { useEffect, useState } from "react";

function App() {
	const [quotes, setQuotes] = useState([])
	async function getQuotes(){
		const response = await fetch('api/quotes')
		const dbQuotes = await response.json()
		setQuotes(dbQuotes.quotes)
	}

	useEffect(() => {
		getQuotes();
	}, [])

	return (
		<div className="App">
			<img src="./media/quotebook.png"></img>
			<h1>Hack at UCI Tech Deliverable</h1>

			<h2>Submit a quote</h2>
			{/* TODO: implement custom form submission logic to not refresh the page */}
			<form action="/api/quote" method="post">
				<label htmlFor="input-name">Name</label>
				<input type="text" name="name" id="input-name" required />
				<label htmlFor="input-message">Quote</label>
				<input type="text" name="message" id="input-message" required />
				<button type="submit">Submit</button>
			</form>

			<h2>Previous Quotes</h2>
			{quotes.length && quotes.map((quote, index) =>
				<div key={index} >
					<p>{quote.name}</p>
					<p>{quote.message}</p>
					<p>{quote.time}</p>
				</div>
			)}
			{/* TODO: Display the actual quotes from the database */}
			{/* <div className="messages">
				<p>Peter Anteater</p>
				<p>Zot Zot Zot!</p>
				<p>Every day</p>
			</div> */}
		</div>
	);
}

export default App;

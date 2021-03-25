import React from "react";
import Row from "./components/Row/Row.js";
import "./App.css";
import requests from "./request";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Banner />
			<Row
				title="Netflix Originals"
				fetchURL={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Tv" fetchURL={requests.fetchTrendingTv} />
			{/* <Row title="Animation Movie" fetchURL={requests.fetchAnimation} /> */}
			<Row title="Top Rated" fetchURL={requests.fetchTopRated} />
			<Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
			<Row title="Sci-Fi Movies" fetchURL={requests.fetchSciFi} />
			<Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
			<Row
				title="Romance Movies"
				fetchURL={requests.fetchRomanceMovies}
			/>
			<Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;

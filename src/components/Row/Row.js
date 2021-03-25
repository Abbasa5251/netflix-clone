import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_img_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(fetchURL);
			// console.log(response.data.results);
			setMovies(response.data.results);
			return response;
		}
		fetchData();
	}, [fetchURL]);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoPlay: 1,
		},
	};

	const handleClick = (movie) => {
		// console.log(movie);
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(
				movie?.name ||
					movie?.original_name ||
					movie?.title ||
					movie?.original_title ||
					""
			)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					// console.log(url);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => {
					// console.log(error);
				});
		}
		console.log(trailerUrl);
	};

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map(
					(movie) =>
						movie.poster_path && (
							<img
								onClick={() => handleClick(movie)}
								key={movie.id}
								className={`row__poster ${
									isLargeRow && "row__posterLarge"
								}`}
								src={`${base_img_url}${
									isLargeRow
										? movie.poster_path
										: movie.backdrop_path
								}`}
								alt={movie.name}
							/>
						)
				)}
			</div>
			{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
		</div>
	);
}

export default Row;

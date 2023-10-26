import React, { useEffect, useState } from 'react';
import SongCard from './SongCard';
import '../styles/Results.css';

const Results = ({ query }) => {
	const [songs, setSongs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (query) {
			setLoading(true);
			fetch(
				`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song`
			)
				.then((response) => response.json())
				.then((data) => {
					setSongs(data.results);
					setLoading(false);
				})
				.catch((error) => {
					console.error('Error fetching data:', error);
					setLoading(false);
				});
		}
	}, [query]);

	return (
		<div className='results'>
			{loading && <div>Loading...</div>}
			{!loading && songs.map((song) => <SongCard key={song.trackId} song={song} />)}
		</div>
	);
};

export default Results;

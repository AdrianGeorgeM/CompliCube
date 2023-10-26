import React from 'react';
import '../styles/SongCard.css';

const SongCard = ({ song }) => {
	return (
		<div className='song-card'>
			<img src={song.artworkUrl100} alt={`${song.trackName} album cover`} />
			<div className='song-info'>
				<h3>{song.trackName}</h3>
				<p>{song.artistName}</p>
				<p>{song.collectionName}</p>
			</div>
		</div>
	);
};

export default SongCard;

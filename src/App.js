import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import './App.css';

const App = () => {
	const [query, setQuery] = useState('');
	const [showResults, setShowResults] = useState(false);

	const handleSearch = (searchQuery) => {
		setQuery(searchQuery);
		setShowResults(true);
	};

	const handleBackToSearch = () => {
		setShowResults(false);
	};

	return (
		<div className='app'>
			{showResults ? (
				<Results query={query} onBack={handleBackToSearch} />
			) : (
				<SearchBar onSearch={handleSearch} />
			)}
		</div>
	);
};

export default App;

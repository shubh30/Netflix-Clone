import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
      <Row title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchScienceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

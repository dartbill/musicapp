import React from 'react';
import ArtistCard from './components/TrainerCard';
import Artists from './components/PokemonCards';
import LikeBtn from './components/Like';

function App() {
  return (
    <main>
      <h1>Music Artists</h1>
      <ArtistCard />
      <Artists />
      <LikeBtn />
    </main>
  );
}

export default App;

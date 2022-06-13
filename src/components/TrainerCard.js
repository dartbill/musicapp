import React, { useState } from 'react';
import Artists from './PokemonCards';

const TrainerCard = () => {
  const [ artistName, setArtistName ] = useState('Frank Turner');
  const [ pokemonCaught, setPokemonCaught ] = useState(2)


  const increasePokemonCount = () => setPokemonCaught(pokemonCaught + 1)

  return (
    <div>
      <h2>{artistName}</h2>
      <h3>Genre: folk punk</h3>
      <h3>Francis Edward Turner is an English punk and folk singer-songwriter from Meonstoke, Hampshire. He began his career as the vocalist of post-hardcore band Million Dead, then embarked upon a primarily acoustic-based solo career following the band's split in 2005.</h3>
    </div>
  );
}

export default TrainerCard;

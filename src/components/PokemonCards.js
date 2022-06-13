import React, { useState } from 'react';

const Artists = () => {
  const [artists, setArtists] = useState([
    { album: 'Sleep is for the week', songs: "The Real Damage, Vital Signs, Romantic Fatigue, A Decent Cup Of Tea, Fathers Day, Worse Things Happen At Sea, My Kingdom For A Horse, Back In The Day Once We Were Anarchists, Wisdom Teeth, The Ladies Of London Town, Must Try Harder, The Ballad Of Me And My Friends",releaseDate:"15.01.07", coverArt:"https://cdn1.umg3.net/269/files/2013/03/Frank_Turner_Sleep_is_for_the_Week-318x313.jpg" },
    { album: 'Love Ire and Song', songs: "I Knew Prufrock Before He Got Famous, Reasons Not To Be An Idiot, Photosynthesis, Substitute, Better Half, Love Ire and Song, Imperfect Tense, To Take You Home, Long Live The Queen, A Love Worth Keeping, St Christopher Is Coming Home, Jet Lag",releaseDate:"31.03.08", coverArt:"https://cdn1.umg3.net/269/files/2013/03/FrankturnerLoveIreSong.jpg" }
  ])

  const renderRows = () => {
    return artists.map(p => <tr><td>{p.album}</td><td>{p.songs}</td><td>{p.releaseDate}</td><td><img src={p.coverArt} /></td></tr>)
  }

  return (
    <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Album</th>
          <th>Songs</th>
          <th>Release Date</th>
          <th>Cover Art</th>
        </tr>
      </thead>
      <tbody>
        { renderRows() }
      </tbody>
    </table>
  );
};

export default Artists;

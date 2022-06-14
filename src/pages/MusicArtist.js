import React from 'react';
import { ArtistCard, Artists, LikeBtn} from '../components';


function MusicArtist() {
  return (
    <main>
      <h1>Music Artists</h1>
      <ArtistCard />
      <Artists />
      <LikeBtn />
    </main>
  );
}

export default MusicArtist;
import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavouriteContext from '../store/favorites-context';

function FavouritePage() {
  const favoritesCtx = useContext(FavouriteContext);

  let content;

  if (favoritesCtx.totalFavourites === 0) {
    content = <p>You got not favorite yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourite</h1>
      {content}
    </section>
  );
}

export default FavouritePage;

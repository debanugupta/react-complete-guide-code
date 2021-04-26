import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavouriteContext from '../../store/favorites-context';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  const favoriteCtx = useContext(FavouriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorite
              <span className={classes.badge}>
                {favoriteCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

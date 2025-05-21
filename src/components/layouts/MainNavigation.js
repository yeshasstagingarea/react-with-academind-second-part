import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import FavouriteContext from "../../store/favourite-context";
import { useContext } from "react";
function MainNavigation(){
    const favouriteCtx = useContext(FavouriteContext);
    return(
            <header className={classes.header}>
                <div className={classes.logo}> React Meetups </div>
                <nav>
                    <ul>
                        <li>
                            <Link className={classes.a} to="/">All Meetups</Link>
                        </li>
                        <li>
                            <Link to="/new-meetup">New Meetups</Link>
                        </li>
                        <li>
                            <Link to="/favourites">
                                My Favourites
                                <span className={classes.badge}>
                                    {favouriteCtx.totalFavourites}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}

export default MainNavigation;
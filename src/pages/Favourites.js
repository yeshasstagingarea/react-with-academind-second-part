import { useContext } from "react";
import FavouriteContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage(){
    const favouriteCtx = useContext(FavouriteContext);
    let content;
    if(favouriteCtx.totalFavourites ===0){
        content = <p>You have got no favourites. Start adding some?</p>
    }
    else{
        content = <MeetupList meetUps={favouriteCtx.favourites} />
    }
    return <section>
        <h1>My Favourites</h1>
        {content}
    </section>
}

export default FavouritesPage;
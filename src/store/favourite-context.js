import { createContext, useState } from "react";

const FavouriteContext = createContext({
    favourites : [],
    totalFavourites :0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}
});

export function FavouriteContextProvider(props){
    const [userFavourites,setUserFavourite] = useState([]);
    
    

    function addFavouriteHandler(favouriteMeetup){
        debugger
        setUserFavourite((prevUserFavourites)=>{
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId){
        setUserFavourite((prevUserFavourites)=>{
            return prevUserFavourites.filter(meetup=>meetup.id !== meetupId)
        });
    }

    function ItemIsFavouriteHandler(meetupId){
         return userFavourites.some(meetup=>meetup.id === meetupId);
    }

    const context = {
        favourites : userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: ItemIsFavouriteHandler
    };

    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
}

export default FavouriteContext;
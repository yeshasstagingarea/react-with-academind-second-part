import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavouriteContext from '../../store/favourite-context';

function MeetupItem(props){
    debugger
    const favouriteCtx = useContext(FavouriteContext);
    const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);
    function toggleFavouriteMeetupHandler(){
        if(itemIsFavourite){
            favouriteCtx.removeFavourite(props.id);
        }else{
            favouriteCtx.addFavourite({
                id:props.id,
                title:props.title,
                description: props.description,
                image:props.image,
                address: props.address
            })
        }
    }
    return (
    <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavouriteMeetupHandler}>
                {itemIsFavourite ? "Remove from Favourites" : "To Favourites"}
            </button>
        </div>
        </Card>
    </li>
    );
}

export default MeetupItem;
import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupPage(){
    const [isLoading,setIsLoading] = useState(false);
    const [loadedMeetups,setLoadedMeetups] = useState([]);

    fetch('https://react-with-academind-8d7c6-default-rtdb.firebaseio.com/meetups.json').
    then((response)=> {return (response.json)}).
    then((data)=>{
        setIsLoading(true);
        setLoadedMeetups(data);
    });

    if(isLoading){
        return (
            <p>Loading ...</p>
        )
    }

    return(<section>
        <h1>All Meetups Page</h1>
        <ul>
            <MeetupList meetUps={loadedMeetups} />
        </ul>
        </section>);
}


export default AllMeetupPage;
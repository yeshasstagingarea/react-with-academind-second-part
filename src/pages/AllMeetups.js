import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupPage(){
    const [isLoading,setIsLoading] = useState(false);
    const [loadedMeetups,setLoadedMeetups] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        fetch('https://react-with-academind-8d7c6-default-rtdb.firebaseio.com/meetups.json').
        then((response)=> {return response.json();}).
        then((data)=>{
            const meetups = [];
            for(var key in data){
                const meetup = {
                    id:key,
                    ...data[key]
                }
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
        },[]);


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
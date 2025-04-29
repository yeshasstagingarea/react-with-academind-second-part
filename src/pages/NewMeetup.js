import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from 'react-router-dom';

function NewMeetupPage(){
    const history = useNavigate();
    function AddMeetupHandler(meetupData){
        fetch(
          "https://react-with-academind-8d7c6-default-rtdb.firebaseio.com/meetups.json",
          {
            method:"POST",
            body:JSON.stringify(meetupData),
            headers:{
                'Content-type':'application/json'
            }
          }
        ).then(()=>{
            history("/");
        });
    }
    return (<NewMeetupForm onAddMeetup={AddMeetupHandler} />);
}

export default NewMeetupPage;
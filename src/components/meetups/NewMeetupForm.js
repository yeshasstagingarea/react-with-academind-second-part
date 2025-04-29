import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';
import { useRef } from 'react';

function NewMeetupForm(props){
    const titleRef = useRef();
    const addressRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    function submitHandler(event){
        event.preventDefault();
        const titleValue = titleRef.current.value;
        const addressValue = addressRef.current.value;
        const imageValue = imageRef.current.value;
        const descriptionValue = descriptionRef.current.value;

        const meetupData = {
            title:titleValue,
            address:addressValue,
            image:imageValue,
            description:descriptionValue,
        };

        props.onAddMeetup(meetupData);
    }
    return (
        <Card>
            <h3>Add New Meetup</h3>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type='text' id='title' ref={titleRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type='text' id='address' ref={addressRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input type='url' id='image' ref={imageRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows="5" ref={descriptionRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}


export default NewMeetupForm;
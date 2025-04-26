const DUMMY_DATA = [
    {
        id:'m1',
        title:'This is a first meetup',
        image: 'https://assets.vogue.com/photos/58efe7b395a2fe5824075380/master/w_1600%2Cc_limit/02-new-cornelia-street-apartment.jpg',
        address: 'Cornelia street',
        description:'First meetup'
    },
    {
        id:'m2',
        title:'This is a second meetup',
        image: 'https://hips.hearstapps.com/hmg-prod/images/taylor-swift-rhode-island-house-1595612001.jpg?crop=0.563xw:1.00xh;0.224xw,0&resize=640:*',
        address: 'Holiday house',
        description:'second meetup'
    }
];

function AllMeetupPage(){
    return(<section>
        <h1>All Meetups Page</h1>
        <ul>
            {DUMMY_DATA.map((meetup)=><li key={meetup.id}>{meetup.title}</li>)}
        </ul>
        </section>);
}


export default AllMeetupPage;
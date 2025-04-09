import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layouts/MainNavigation";

function App() {
    return (
        <div>
            <MainNavigation />
            <Routes>
                <Route path='/' element={<AllMeetupPage />} />
                <Route path='/favourites' element={<FavouritesPage/>} />
                <Route path='/new-meetup' element={<NewMeetupPage />} />
            </Routes>
        </div>
    );
}

export default App;
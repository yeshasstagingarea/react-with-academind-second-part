import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layouts/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<AllMeetupPage />} />
                <Route path='/favourites' element={<FavouritesPage/>} />
                <Route path='/new-meetup' element={<NewMeetupPage />} />
            </Routes>
            </Layout>
    );
}

export default App;
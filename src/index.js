
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from './App';
import { FavouriteContextProvider } from "./store/favourite-context";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <FavouriteContextProvider>
    <BrowserRouter><App/></BrowserRouter>
    </FavouriteContextProvider>
);
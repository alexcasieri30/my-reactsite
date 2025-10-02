import {Route} from "react-router-dom";
import Games from './App';
import ChooseGameType from "./Components/Utilities/Dropdown/Dropdown";
import FullScreenGames from "./Components/Games/FullScreenGames";

import ML from './Components/ML/App';

import Memory from './Components/Games/memory/App';
import CVLetter from './Components/Games/cv_project/App';
import Sketch from './Components/Games/etchasketch_react/App';
import TictactoeBoard from './Components/Games/tictactoe/App';
import Battleship from "./Components/Games/battleship/App";
import WheresWaldo from "./Components/Games/wheres_waldo/App";

import Home from './StaticPages/Home/Home';
import React from "react";

import BlogUsers from "./Components/Blog/components/UsersPage";
import Blog from "./Components/Blog/App";
import About from "./StaticPages/About/About";
import Settings from "./StaticPages/Settings/Settings";

import Shop from "./Components/Shop/components/Shop/Shop";
import ShopAll from "./Components/Shop/components/Shop/ShopAll";
import ShopLatest from "./Components/Shop/components/Shop/ShopLatest";
import ShopPopular from "./Components/Shop/components/Shop/ShopPopular";
import AboutPage from "./Components/Shop/components/About";
import Cart from "./Components/Shop/components/Cart/MyCart";
import Checkout from "./Components/Shop/components/Cart/Checkout";
import Item from "./Components/Shop/components/Items/Item";
import Plane from './Components/Travel/Travel';
import PhotoGallery from "./Components/PhotoGallery/PhotoGallery";
import HawaiiTrip from "./Components/Travel/trips/HawaiiTripPage";
import PragueTrip from "./Components/Travel/trips/PragueTripPage";
import SouthAmericaTrip from "./Components/Travel/trips/SouthAmericaTripPage";
import GalleryPage from "./Components/PhotoGallery/pages/GalleryPage";

export default function getRoutes(setBackground) {
    return (
        <>
     
            <Route path="/" element={<Home setBackground={setBackground}/>}/>
            <Route path="/about" element={<About setBackground={setBackground}/>}/>
            <Route path="/blog" element={<Blog setBackground={setBackground}/>}/>
            <Route path="/blog/users" element={<BlogUsers setBackground={setBackground}/>}/>
            <Route path="/settings" element={<Settings setBackground={setBackground}/>}/>
            <Route path="/travel" element={<Plane setBackground={setBackground}/>}/>
            <Route path="/ml" element={<ML setBackground={setBackground}/>}/>
            <Route path="/fullscreengames" element={<FullScreenGames setBackground={setBackground}/>}/>
            <Route path="/fullscreengames/where" element={<WheresWaldo/>}/>
            <Route path="/games" element={<Games setBackground={setBackground}/>}/>
            <Route path="/games/memory" element={<Memory />}/>
            <Route path="/games/cv_letter" element={<CVLetter/>}/>
            <Route path="/games/sketch" element={<Sketch/>}/>
            <Route path="/games/tictactoe" element={<TictactoeBoard/>}/>
            <Route path="/games/battleship" element={<Battleship/>}/>
            <Route path="/photo-gallery" element={<PhotoGallery/>}/>
            <Route path="/travel/hawaii" element={<HawaiiTrip setBackground={setBackground}/>}/>
            <Route path="/travel/prague" element={<PragueTrip setBackground={setBackground}/>}/>
            <Route path="/travel/southamerica" element={<SouthAmericaTrip setBackground={setBackground}/>}/>
            <Route path="/photo-gallery/gallery" element={<GalleryPage/>}/>
        </>
    );
}


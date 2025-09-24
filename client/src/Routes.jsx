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
            <Route path="/fullscreengames" element={<FullScreenGames/>}/>
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
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/shop/all" element={<ShopAll/>}/>
            <Route path="/shop/latest" element={<ShopLatest/>}/>
            <Route path="/shop/popular" element={<ShopPopular/>}/>
            <Route path="/shop/about" element={<AboutPage/>}/>
            <Route path="/shop/cart" element={<Cart/>}/>
            <Route path="/shop/checkout" element={<Checkout/>}/>
            <Route path="/shop/item/1" element={<Item name="Tote Bag 1" price="19.99" imageSource="images/totebag1"/>}/>
            <Route path="/shop/item/2" element={<Item name="Tote Bag 2" price="22.99" imageSource="images/totebag2"/>}/>
            <Route path="/shop/item/3" element={<Item name="Tote Bag 3" price="10.99" imageSource="images/totebag3"/>}/>
            <Route path="/shop/item/4" element={<Item name="Tote Bag 4" price="34.00" imageSource="images/totebag4"/>}/>
            <Route path="/shop/item/5" element={<Item name="Tote Bag 5" price="20.50" imageSource="images/totebag5"/>}/>
            <Route path="/shop/item/6" element={<Item name="Tote Bag 6" price="32.89" imageSource="images/totebag6"/>}/>
            <Route path="/shop/item/7" element={<Item name="Print 1" price="19.99" imageSource="images/print1"/>}/>
            <Route path="/shop/item/8" element={<Item name="Print 2" price="22.99" imageSource="images/print2"/>}/>
            <Route path="/shop/item/9" element={<Item name="Print 3" price="10.99" imageSource="images/print3"/>}/>
            <Route path="/shop/item/10" element={<Item name="Print 4" price="34.00" imageSource="images/print4"/>}/>
            <Route path="/shop/item/11" element={<Item name="Print 5" price="20.50" imageSource="images/print5"/>}/>
            <Route path="/shop/item/12" element={<Item name="Print 6" price="32.89" imageSource="images/print6"/>}/>
            <Route path="/shop/item/13" element={<Item name="Sticker 1" price="19.99" imageSource="images/sticker1"/>}/>
            <Route path="/shop/item/14" element={<Item name="Sticker 2" price="22.99" imageSource="images/sticker2"/>}/>
            <Route path="/shop/item/15" element={<Item name="Sticker 3" price="10.99" imageSource="images/sticker3"/>}/>
            <Route path="/shop/item/16" element={<Item name="Sticker 4" price="34.00" imageSource="images/sticker4"/>}/>
            <Route path="/shop/item/17" element={<Item name="Sticker 5" price="20.50" imageSource="images/sticker5"/>}/>
            <Route path="/shop/item/18" element={<Item name="Sticker 6" price="32.89" imageSource="images/sticker6"/>}/>
            <Route path="/shop/item/19" element={<Item name="Clothing item 1" price="19.99" imageSource="images/clothes1"/>}/>
            <Route path="/shop/item/20" element={<Item name="Clothing item 2" price="22.99" imageSource="images/clothes2"/>}/>
            <Route path="/shop/item/21" element={<Item name="Clothing item 3" price="10.99" imageSource="images/clothes3"/>}/>
            <Route path="/shop/item/22" element={<Item name="Clothing item 4" price="34.00" imageSource="images/clothes4"/>}/>
            <Route path="/shop/item/23" element={<Item name="Clothing item 5" price="20.50" imageSource="images/clothes5"/>}/>
            <Route path="/shop/item/24" element={<Item name="Clothing item 6" price="32.89" imageSource="images/clothes6"/>}/>
        </>
    );
}


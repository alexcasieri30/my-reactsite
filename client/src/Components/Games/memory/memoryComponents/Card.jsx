import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import "./styles/cards.scss";
import Andrew from "../../../../Assets/Images/andrew_glouberman.jpg";
import Bart from "../../../../Assets/Images/bart_simpson.png";
import Bob from "../../../../Assets/Images/bob.jpg";
import Brian from "../../../../Assets/Images/brian_griffin.png";
import Eric from "../../../../Assets/Images/eric_cartman.jpg";
import Homer from "../../../../Assets/Images/homer_simpson.png";
import Jessi from "../../../../Assets/Images/jessi_glaser.jpg";
import Lois from "../../../../Assets/Images/lois_griffin.png";
import Meg from "../../../../Assets/Images/meg_griffin.png";
import Krabs from "../../../../Assets/Images/mr_krabs.png";
import Nick from "../../../../Assets/Images/nick_birch.jpg";
import Patrick from "../../../../Assets/Images/patrick.png";
import Peter from "../../../../Assets/Images/peter_griffin.jpg";
import Spongebob from "../../../../Assets/Images/spongebob.png";
import Squidward from "../../../../Assets/Images/squidward.png";
import Stewie from "../../../../Assets/Images/stewie_griffin.png";
import Tina from "../../../../Assets/Images/tina.png";

import Stan from "../../../../Assets/Images/stan_smith.jpg";
import Francine from "../../../../Assets/Images/francine_smith.jpg";
import Alien from "../../../../Assets/Images/alien.jpg"
import Gene from "../../../../Assets/Images/gene_belcher.png";
import Lisa from "../../../../Assets/Images/lisa_simpson.png";
import Marge from "../../../../Assets/Images/marge_simpson.png";
import Maggie from "../../../../Assets/Images/maggie_simpson.jpg";
import AdamWest from "../../../../Assets/Images/adam_west.jpg";
import Chris from "../../../../Assets/Images/chris_griffin.png";
import { findAllByRole } from "@testing-library/dom";

const sources = [Andrew, Bart, Bob, Brian, Eric, Homer, Jessi, Lois, 
                Meg, Krabs, Nick, Patrick, Peter, Spongebob, Squidward, Stewie, Tina,
                Stan, Francine, Alien, Gene, Lisa, Marge, Maggie, AdamWest, Chris]
const names = ["Andrew", "Bart", "Bob", "Brian", "Eric", "Homer", "Jessi", "Lois", 
    "Meg", "Krabs", "Nick", "Patrick", "Peter", "Spongebob", "Squidward", "Stewie", "Tina",
    "Stan", "Francine", "Alien", "Gene", "Lisa", "Marge", "Maggie", "AdamWest", "Chris"]

const Card = ({fn, index}) => {
    return (
        <div key={uniqid()} id={names[index]} className="card" onClick={(e) => fn(e)}>
            <div>
                <img className="memory-image" src={sources[index]}/>
            </div>
        </div>
    )
}

export default Card
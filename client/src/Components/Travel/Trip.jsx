
import HawaiiTrip from "./trips/HawaiiTripPage";
import PragueTrip from "./trips/PragueTripPage";
import SouthAmericaTrip from "./trips/SouthAmericaTripPage";
import { Link } from "react-router-dom";
import "./travel.scss";



export default function Trip({ type }){

    return (
        <div className="">
            { (type === "hawaii") && 
                <Link to="/travel/hawaii" className="">
                    <div id="hawaii-trip-icon" className="trip">
                        Hawaii
                    </div>
                </Link>
            }
            { (type === "prague") && 
                <Link to="/travel/prague" className="">
                    <div id="prague-trip-icon" className="trip">
                        Prague
                    </div>
                </Link>
            }
            { (type === "southamerica") && 
                <Link to="/travel/southamerica" className="">
                    <div id="southamerica-trip-icon" className="trip">
                        South America
                    </div>
                </Link>
            }
        </div>
    )
}

import HawaiiTrip from "./trips/HawaiiTripPage";
import PragueTrip from "./trips/PragueTripPage";
import SouthAmericaTrip from "./trips/SouthAmericaTripPage";
import { Link } from "react-router-dom";
import "./travel.scss";



export default function Trip({ type }) {
    if (type === "hawaii") {
        return (
            <Link to="/travel/hawaii" className="trip-icon" style={{ textDecoration: 'none' }}>
                <div id="hawaii-trip-icon" className="trip">
                    Hawaii
                </div>
            </Link>
        );
    }
    if (type === "prague") {
        return (
            <Link to="/travel/prague" className="trip-icon" style={{ textDecoration: 'none' }}>
                <div id="prague-trip-icon" className="trip">
                    Prague
                </div>
            </Link>
        );
    }
    if (type === "southamerica") {
        return (
            <Link to="/travel/southamerica" className="trip-icon" style={{ textDecoration: 'none' }}>
                <div id="southamerica-trip-icon" className="trip">
                    South America
                </div>
            </Link>
        );
    }
    return null;
}
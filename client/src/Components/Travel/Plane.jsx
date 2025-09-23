import { useState, useEffect } from "react";
import Trip from "./Trip";

export default function Plane(){
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        if (trips.length === 0) {
            let allTrips = ["southamerica", "hawaii", "prague"];
            console.log("setting trips")
            setTrips(allTrips);
        }
    });

    return (
        <div className="travel-container" style={{'padding':'2em', 'textAlign':'center'}}>
            <h1>Travel Page</h1>
            <p>This is where travel-related content will go.</p>
            <div className="trip-icon-grid" style={{'marginTop':'2em'}}>
                {trips.length === 0 ? (
                    <p>No trips available.</p>
                ) : (
                    trips.map((trip) => (
                        <div className="trip-icon"><Trip type={trip} /></div>
                    ))
                )}
            </div>
        </div>
    )
}
import { useState, useEffect } from "react";
import Trip from "./Trip";
import TypewriterTitle from "../PhotoGallery/features/TypewriterTitle";

export default function Travel({ setBackground }){
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        setBackground("white");
        if (trips.length === 0) {
            let allTrips = ["southamerica", "hawaii", "prague"];
            console.log("setting trips")
            setTrips(allTrips);
        }
    }, []);

    return (
        <div className="travel-container" style={{ marginTop: '80px', padding: '20px', textAlign: 'center' }}>
            <TypewriterTitle text="> cd ./travel" />
            <h1 style={{ fontWeight: 700, fontSize: '2.5rem', letterSpacing: '0.02em', color: '#22223b', marginBottom: '0.5em' }}>
                Travels
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: 600, margin: '0 auto 2em auto', lineHeight: 1.6 }}>
                Explore highlights from my travels around the world. Click on a destination below to see stories, photos, and experiences from each trip.
            </p>
            <div className="trip-icon-grid" style={{'marginTop':'2em'}}>
                {trips.length === 0 ? (
                    <p>No trips available.</p>
                ) : (
                    trips.map((trip) => (
                        <div className="" key={trip}>
                            <Trip type={trip} />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
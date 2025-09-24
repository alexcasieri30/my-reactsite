
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./hawaii.scss";

const timelineEntries = [
    {
        label: "Day 1: Arrival in Hawaii",
        photo: null, // Add photo URL if available
        entry: `Arriving in Hawaii, I was immediately struck by the lush landscapes and the vibrant energy of the islands. The beaches were stunning, with golden sands stretching into crystal-clear waters, and the sound of the waves provided an instant sense of calm. I spent my mornings exploring the coastlines and soaking up the sun, while also taking time to wander through local towns, discovering small cafés, markets, and art galleries that captured the unique island culture. The mix of natural beauty and laid-back lifestyle made every moment feel immersive and unforgettable.`
    },
    {
        label: "Day 2: Sunrise at Diamond Head",
        photo: null,
        entry: `Woke up before dawn to hike up Diamond Head and catch the sunrise over Honolulu. The sky shifted from deep purple to brilliant orange as the city slowly came alive below. I shared the summit with a handful of early risers, all quietly taking in the breathtaking view. After the descent, I treated myself to a fresh acai bowl from a local food truck. The rest of the day was spent lounging on Waikiki Beach, letting the waves wash away any lingering jet lag.`
    },
    {
        label: "Day 3: Exploring the North Shore",
        photo: null,
        entry: `Today I rented a car and drove up to Oahu’s legendary North Shore, famous for its massive winter waves. I watched surfers tackle the rolling swells at Banzai Pipeline, their skill and courage on full display. Lunch was a plate of garlic shrimp from a roadside stand, eaten under the shade of palm trees. In the afternoon, I wandered through the laid-back town of Haleiwa, browsing surf shops and art galleries. The day ended with a sunset walk along a nearly empty stretch of sand, feeling completely at peace.`
    },
    {
        label: "Day 4: Waterfalls and Rainforest",
        photo: null,
        entry: `A morning rain shower made the island feel even more lush and alive. I hiked through a rainforest trail, the air thick with the scent of flowers and earth, until I reached a hidden waterfall. The cool water was refreshing after the humid trek, and I lingered there, listening to the sounds of birds and rushing water. Later, I visited a botanical garden filled with vibrant tropical plants. Dinner was a bowl of saimin noodles at a cozy local spot, the perfect comfort food after a day of adventure.`
    },
];


export default function HawaiiTrip({ setBackground }) {
    useEffect(() => {
        setBackground && setBackground("white");
        return () => setBackground && setBackground("white");
    }, [setBackground]);

    return (
        <div className="trip-details-container">
            {/* Back to All Trips button at the top */}
            <div className="sa-back-link-wrapper">
                <Link to="/travel" className="sa-back-link">
                    <span className="sa-back-icon">&#8592;</span>
                    <span className="sa-back-text">Back to All Trips</span>
                </Link>
            </div>
            <h1 className="hawaii-header">Hawaii + Japan Trip 2025</h1>
            <div className="hawaii-timeline">
                {timelineEntries.map((item, idx) => (
                    <div className="hawaii-timeline-item" key={idx}>
                        <div className="hawaii-timeline-dot" />
                        <div className="hawaii-timeline-label">{item.label}</div>
                        <div className="hawaii-timeline-popup">
                            <div className="hawaii-timeline-journal-header">
                                <span className="hawaii-timeline-journal-icon" role="img" aria-label="journal">📓</span>
                                <span>{item.label}</span>
                            </div>
                            {item.photo && <img src={item.photo} alt={item.label} className="hawaii-timeline-photo" />}
                            <div className="hawaii-timeline-entry">{item.entry}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

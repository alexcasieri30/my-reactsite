
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./hawaii.scss";


export default function HawaiiTrip({ setBackground }) {
    const [timelineEntries, setTimelineEntries] = useState([]);

    useEffect(() => {
        setBackground && setBackground("white");
        fetch("http://localhost:3001/journal-entries/hawaii")
            .then(res => res.json())
            .then(data => {
                // Dynamically create timeline entries from backend data
                const entries = Object.keys(data)
                    .sort((a, b) => {
                        // Sort by day number
                        const numA = parseInt(a.replace('day', ''));
                        const numB = parseInt(b.replace('day', ''));
                        return numA - numB;
                    })
                    .map(dayKey => ({
                        label: `Day ${dayKey.replace('day', '')}`,
                        photo: null,
                        entry: data[dayKey]
                    }));
                console.log(entries);
                setTimelineEntries(entries);
            })
            .catch(err => {
                // Optionally handle error
            });
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

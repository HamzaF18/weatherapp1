import "./Dashboard.css"
import { useState, useEffect } from "react";






const Dashboard = () => {
    const [airPollutionData, setAirPollutionData] = useState(null);

    const API_KEY = "6e72276da3ae32e13ffc7c3da885e77f"
    // const CITY = "London"
    const AIR_POLLUTION_ENDPOINT = `https://api.openweathermap.org/data/2.5/air_pollution?lat=3&lon=55&appid=${API_KEY}`;

    useEffect(() => {
        fetch(AIR_POLLUTION_ENDPOINT).then(response => response.json())
            .then(data => {
                setAirPollutionData(data);
            })
            .catch(error =>
                console.error('Error fetching air pollution data:', error));
    }, []);


    return (
        <div className="dashboard">
            <h1>London</h1>
            <div className="box">
                <div className="boxes"><span>Carbon monoxide</span></div>
                <div className="boxes"><span>Nitrogen monoxide</span></div>
                <div className="boxes"><span>Nitrogen dioxide</span></div>
                <div className="boxes"><span>Ozone</span></div>
                <div className="boxes"><span>Sulphur dioxide</span></div>
                <div className="boxes"><span>Ammonia</span></div>
                <div className="boxes"><span>particulates</span></div>
                <div className="boxes"><span>particulates</span></div>
            </div>
        </div>
    )

}
export default Dashboard;

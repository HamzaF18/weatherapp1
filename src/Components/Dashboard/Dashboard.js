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
        <div>

            {typeof airPollutionData?.list[0].main === 'undefined'? (
                <div></div>
            ) : (
                <div className="dashboard">
                <h1>Air Pollution in London</h1>
                <div className="box">
                    <div className="boxes"><span>Carbon monoxide {airPollutionData.list[0].components.co}</span></div>
                    <div className="boxes"><span>Nitrogen monoxide {airPollutionData.list[0].components.no}</span></div>
                    <div className="boxes"><span>Nitrogen dioxide {airPollutionData.list[0].components.no2}</span></div>
                    <div className="boxes"><span>Ozone {airPollutionData.list[0].components.o3}</span></div>
                    <div className="boxes"><span>Sulphur dioxide {airPollutionData.list[0].components.so2}</span></div>
                    <div className="boxes"><span>Ammonia {airPollutionData.list[0].components.nh3}</span></div>
                    <div className="boxes"><span>Pm2.5 {airPollutionData.list[0].components.pm2_5}</span></div>
                    <div className="boxes"><span>Pm10 {airPollutionData.list[0].components.pm10}</span></div>
                </div>
            </div>
            )
            }
        </div>
    )
}
export default Dashboard;

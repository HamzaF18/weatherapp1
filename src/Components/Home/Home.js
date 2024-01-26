import "./Home.css"
import { useState } from "react";


//make a component called day card
//make it accept props for the things you want to display



const Home = () => {

    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState();

    const api_key = "1585b602fad78a768ac1f449afa04da6";

    const getWeather = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`).then(response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                }
            )
        }
    }


    // function makeWeatherDay(day) {
    // <span>average temp {day.average}</span>
    // }

    // const API_KEY = fetch("https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=c60a15bb68edd82da3a14067a230b570")




    return (
        <div className="home-container">
            <div className="top">
                <div className="search">
                    <input className="location"
                        name="text"
                        placeholder="Search Location..."
                        onChange={e => setCity(e.target.value)}
                        value={city}
                        onKeyPress={getWeather}></input>
                </div>


                {typeof weatherData?.main === 'undefined' ? (
                    <div></div>
                ) : (


                    <div className="cards">
                        

                        <div className="card">
                            {/* <span>{Date(weatherData.main.dt*1000)}</span> */}
                            <span>Average Temp {weatherData.main.temp}</span>
                        </div>

                        <div className="card">
                            <span>Monday</span>
                            <span>Average Temp 20C</span>
                            <span>L</span>
                            <span>H</span>
                        </div>
                        <div className="card">
                            <span>Tuesday</span>
                            <span>Average Temp 10C</span>
                            <span>H</span>
                            <span>H</span>
                        </div>
                        <div className="card">
                            <span>Wednesday</span>
                            <span>Average Temp 18C</span>
                            <span>L</span>
                            <span>H</span>
                        </div>
                        <div className="card">
                            <span>Thurseday</span>
                            <span>Average Temp 14C</span>
                            <span>L</span>
                            <span>L</span>
                        </div>
                        <div className="card">
                            <span>Friday</span>
                            <span>Average Temp 15C</span>
                            <span>H</span>
                            <span>L</span>
                        </div>
                    </div>
                )}
            </div>
            <div className="bottom">
                <div className="map"></div>
            </div>
        </div>
    )
}
export default Home;
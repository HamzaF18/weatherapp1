import "./Home.css"
import { useState } from "react";






const Home = () => {

    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState();

    const api_key = "1585b602fad78a768ac1f449afa04da6";

    const getWeather = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`).then(response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                }
            )
        }
    }






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


                {typeof weatherData?.list[0].main === 'undefined' ? (
                    <div></div>
                ) : (


                    <div className="cards">


                        <div className="card">

                            <span>{weatherData.list[0].dt_txt}</span>
                            {/* Average Temperature below this line */}
                            <span>{Math.round(weatherData.list[0].main.temp)}°C</span>
                            {/* What the weather feels like/description of the weather */}
                            <span><strong>{weatherData.list[0].weather[0].description}</strong></span>
                            {/* Wind speed in km/h */}
                            <span>{weatherData.list[0].wind.speed}km/h</span>
                        </div>

                        <div className="card">

                            <span>{weatherData.list[8].dt_txt}</span>
                            {/* Average Temperature below this line */}
                            <span>{Math.round(weatherData.list[8].main.temp)}°C</span>
                            {/* What the weather feels like/description of the weather */}
                            <span><strong>{weatherData.list[8].weather[0].description}</strong></span>
                            {/* Wind speed in km/h */}
                            <span>{weatherData.list[8].wind.speed}km/h</span>
                        </div>

                        <div className="card">

                            <span>{weatherData.list[16].dt_txt}</span>
                            {/* Average Temperature below this line */}
                            <span>{Math.round(weatherData.list[16].main.temp)}°C</span>
                            {/* What the weather feels like/description of the weather */}
                            <span><strong>{weatherData.list[16].weather[0].description}</strong></span>
                            {/* Wind speed in km/h */}
                            <span>{weatherData.list[16].wind.speed}km/h</span>
                        </div>

                        <div className="card">

                            <span>{weatherData.list[24].dt_txt}</span>
                            {/* Average Temperature below this line */}
                            <span>{Math.round(weatherData.list[24].main.temp)}°C</span>
                            {/* What the weather feels like/description of the weather */}
                            <span><strong>{weatherData.list[24].weather[0].description}</strong></span>
                            {/* Wind speed in km/h */}
                            <span>{weatherData.list[24].wind.speed}km/h</span>
                        </div>

                        <div className="card">

                            <span>{weatherData.list[32].dt_txt}</span>
                            {/* Average Temperature below this line */}
                            <span>{Math.round(weatherData.list[32].main.temp)}°C</span>
                            {/* What the weather feels like/description of the weather */}
                            <span><strong>{weatherData.list[32].weather[0].description}</strong></span>
                            {/* Wind speed in km/h */}
                            <span>{weatherData.list[32].wind.speed}km/h</span>
                        </div>

                        <div className="card">

                            <span>{weatherData.list[39].dt_txt}</span>
                            {/* Average Temperature below this line */}
                            <span>{Math.round(weatherData.list[39].main.temp)}°C</span>
                            {/* What the weather feels like/description of the weather */}
                            <span><strong>{weatherData.list[39].weather[0].description}</strong></span>
                            {/* Wind speed in km/h */}
                            <span>{weatherData.list[39].wind.speed}km/h</span>
                        </div>

                    </div>
                )}
            </div>
            <div className="content">
                {/* <img src="https://cdn.24.co.za/files/Cms/General/d/8758/bb7d84c1162045e5ac62b0b7389d12d6.jpg"/> */}
                <div className="text">
                    <h1>Welcome to the Health Advice Group</h1>
                    <h2>Our wesbite offers free information and support for environmental health issues to everyone!</h2>
                    <ul><strong>Our services include</strong>:
                        <li>A 5-day Weather Forecast</li>
                        <li>An advice page with FAQ's and Health advice</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home;
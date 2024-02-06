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
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`).then(response => response.json()
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


                {typeof weatherData?.list[0].main === 'undefined' ? (
                    <div></div>
                ) : (


                    <div className="cards">


                        <div className="card">
                            {/* <span>{Date(weatherData.main.dt*1000)}</span> */}
                            <span>Average Temp {Math.round(weatherData.list[0].main.temp)}</span>
                            <span>Feels like {weatherData.list[0].weather[0].description}</span>
                        </div>

                        <div className="card">
                            {/* <span>{Date(weatherData.main.dt*1000)}</span> */}
                            <span>Temp {Math.round(weatherData.list[8].main.temp)}</span>
                            <span>Feels like {weatherData.list[8].weather[0].description}</span>
                        </div>

                        <div className="card">
                            {/* <span>{Date(weatherData.main.dt*1000)}</span> */}
                            <span>Average Temp {Math.round(weatherData.list[16].main.temp)}</span>
                            <span>Feels like {weatherData.list[16].weather[0].description}</span>
                        </div>

                        <div className="card">
                            {/* <span>{Date(weatherData.main.dt*1000)}</span> */}
                            <span>Average Temp {Math.round(weatherData.list[24].main.temp)}</span>
                            <span>Feels like {weatherData.list[24].weather[0].description}</span>
                        </div>

                        <div className="card">
                            {/* <span>{Date(weatherData.main.dt*1000)}</span> */}
                            <span>Average Temp {Math.round(weatherData.list[32].main.temp)}</span>
                            <span>Feels like {weatherData.list[32].weather[0].description}</span>
                        </div>

                        <div className="card">
                            {/* <span>{Date(weatherData.main.dt*1000)}</span> */}
                            <span>Average Temp {Math.round(weatherData.list[39].main.temp)}</span>
                            <span>Feels like {weatherData.list[39].weather[0].description}</span>
                        </div>

                    </div>
                )}
            </div>
            <div className="content">
                <img src="https://cdn.24.co.za/files/Cms/General/d/8758/bb7d84c1162045e5ac62b0b7389d12d6.jpg"/>
                <div className="text"><h1>Welcome to the Health Advice Group</h1></div>
            </div>
        </div>
    )
}
export default Home;
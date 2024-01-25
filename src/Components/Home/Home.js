import "./Home.css"

//make a component called day card
//make it accept props for the things you want to display

const Home = () => {

    function makeWeatherDay(day) {
        <span>average temp {day.average}</span>
    }

    return (
        <div className="home-container">
            <div className="top">
                <div className="search">
                    <input className="location" name="text" placeholder="Search Location..."></input>
                </div>
                <div className="cards">

                    {/* 
                        once you have the data
                        map over it and generate the cards one by one by giving them the data

                        TheListOfDaysYouGotFromAPI.map(makeWeatherDay)
                    */}
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
            </div>
            <div className="bottom">
                <div className="map"></div>
            </div>
        </div>
    )
}
export default Home;
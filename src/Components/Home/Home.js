import "./Home.css"

//make a component called day card
//make it accept props for the things you want to display

const Home = ()=>{
    
    function makeWeatherDay(day){
        <span>average temp {day.average}</span>
    }
    
    return(
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
                    <div className="card"><p>Tuesday 19 C</p></div>
                    <div className="card"><p>Wednesday 16 C</p></div>
                    <div className="card"><p>Thurseday 12 C</p></div>
                    <div className="card"><p>Friday 11 C</p></div>
                </div>
            </div>
            <div className="bottom">
                <div className="map"></div>
            </div>
        </div>
    )
}
export default Home;
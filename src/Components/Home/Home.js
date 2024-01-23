import "./Home.css"

const Home = ()=>{
    return(
        <div className="home-container">
            <div className="top">
                <div className="search">
                    <input className="location" name="text" placeholder="Search Location..."></input>
                </div>
                <div className="cards">
                    <div className="card"><p>Monday 20 C</p></div>
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
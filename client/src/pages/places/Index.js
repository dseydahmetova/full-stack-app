import {  useState, useEffect } from "react"
import { Link } from "react-router-dom"
import StarRating from "../../components/StarRating"
import { getAllPlaces } from "../../services/placeService";
import Pagination from '../../components/Pagination'
import {Paper} from '@material-ui/core'

function Index({ user }) {

    const [places, setPlaces] = useState([])

    useEffect(() => {
        async function loadData() {
            const data = await getAllPlaces()
            setPlaces(data)
        }
        loadData()
    }, [])
    console.log(places)

    return (

        <div id="main">
        <div className="card-title"> 
        {/* <div className="container">
        <div className="left-container"> */}
           <h1 className="welcome-msg">Discover story-worthy travel moments</h1>
         <div className="searchbar"> 
         <input type="text" /></div>
         <div className="clip"></div>
        </div>
        {/* <div className="right-container"> */}
        {/* <img src="https://assets.thedyrt.com/next/public/assets/images/homepage/home_hero.png" alt="homeimg" /> */}
        
        {/* </div> */}
        {/* </div> */}

 {/* </div> */}

<div className = "places">
            {places.map((place, index) =>
                <Link to={`/places/${place._id}`} key={index}> 

                    <div className="card" >
                    <div className="card-top">
                        <img src={place.image} className="card-img-top" alt="place-img" />
                        <h2 className="placeName">{place.fullName}</h2>

</div>
                    <div className="card-body">
                        <div className="card-text">
                       
                             <p>{place.address}, {place.city}, {place.stateCode}</p>
                            <p>{place.description}</p>


                            <StarRating /> 

                           
        
                        </div>
                    </div>
                    </div>
                    </Link>
                
            )}
            <Paper  elevation = {6}>
            <Pagination/>

            </Paper>
            </div>
           

        </div>



    )
}

export default Index
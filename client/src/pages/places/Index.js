import {  useState, useEffect } from "react"
import { Link } from "react-router-dom"
import StarRating from "../../components/StarRating"
import { getAllPlaces } from "../../services/placeService";


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

        <div id="places">
            {places.map((place, index) =>
                    <div className="card" >
                        <img src={place.image} className="card-img-top" alt="place-img" />
                    
                    <div className="card-body">
                        <div className="card-text">
                        <Link to={`/places/${place._id}`} key={index}> 
                        <h2>{place.fullName}</h2>
                        </Link>
                             <p>{place.address}, {place.city}, {place.stateCode}</p>
                            <p>{place.description}</p>


                            <StarRating /> 

                           
        
                        </div>
                    </div>
                    </div>
                
            )}



        </div>



    )
}

export default Index
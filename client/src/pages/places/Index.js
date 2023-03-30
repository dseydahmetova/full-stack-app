import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { MyContext } from "../../services/context";
import StarRating from "../../components/StarRating"

function Index({ user }) {
    let { places } = useContext(MyContext)
   

    return (

        <div id="places">

            {places.map((place, index) =>
                    <div className="card" >
                        <img src={place.images[0].url} className="card-img-top" alt="place-img" />
                    
                    <div className="card-body">
                        <div className="card-text">
                        <Link to={`/places/${place.id}`} key={index}> 
                        <h2>{place.fullName}</h2>
                        </Link>
                             <p>{place.addresses[0].line1}, {place.addresses[0].city}, {place.addresses[0].stateCode}</p>
                            <p>{place.description}</p>


                            <StarRating />

                           {/* <p>{place.weatherInfo}</p>
{place.activities.map((activity, index) => 
    <div key ={index}>
    <ul> Activities:
    <li>{activity.name}</li>
    </ul>
    </div>  
)}         */}
                        </div>
                    </div>
                    </div>
                
            )}





        </div>









    )
}

export default Index
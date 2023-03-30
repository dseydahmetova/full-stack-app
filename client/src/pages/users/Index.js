import {  useState, useEffect } from "react"
import { Link } from "react-router-dom"
import StarRating from "../../components/StarRating"
import {userInfo } from "../../services/userService";


function Index({ user }) {

    // const [places, setPlaces] = useState([])

    useEffect(() => {
        async function loadData() {
            const data = await userInfo()
            // setPlaces(data)
        }
        loadData()
    }, [])
 

    return (

        <div id="places">

        <h1>{user.username}</h1>
        <h1>{user.email}</h1>
        <h1>this is id {user.id}</h1>
            {/* {places.map((place, index) =>
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
 */}




        </div>

    )
}

export default Index
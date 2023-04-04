import { useEffect, useState, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import StarRating from "../../components/StarRating";
import { getSavedPlaces, deleteSavedPlace } from "../../services/placeService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Save({ user }) {
    const [savedPlaces, setSavedPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()
   

    function goBack() {
        navigate(-1)
    }

    useEffect(() => {

        const handleSavedPlaces = async () => {
            try {
                const response = await getSavedPlaces(user.id)
                setSavedPlaces(response.savedPlaces)
            } catch (err) {
                console.log(err)
            }
        }

        handleSavedPlaces()

    }, [])

    async function handleDeleteSavedPlace(userId, placeId){
        await deleteSavedPlace(userId, placeId)
        setIsLoading(false)
        // const data = await getAllPlaces()
        // setPlaces(data)
    }

    
    return (

        <div id="saved-places">
        <form>
        <ul>
        {!savedPlaces.length && !isLoading ? 
        <h1 className = "save-msg">Sorry, there are no places to show..</h1>: (
                <div className="places">
              
                    {savedPlaces.map((place, index) =>

                        <div className="card" key={index}>

                                <div className="card-top">
                                    <div image={place.image}></div>
                                    <img src={place.image} className="card-img-top" alt="place-img" />
                                    <button className="delete-btn"
                                            onClick={(e) => handleDeleteSavedPlace(user.id, place._id)}
                                        >
                                   <FontAwesomeIcon icon="fa-solid fa-xmark" size="xl" /> 
                                        </button>
                                   <h2 className="placeName">{place.fullName}</h2>

                                </div>
                           

                            <div className="card-body">
                                <div className="card-text">
                                <i className="bi bi-x-circle"></i>
                                    <p>{place.address}, {place.city}, {place.stateCode}</p>
                                    <p>{place.description}</p>
                                    <div>
                                        <StarRating />
                                       
                                    </div> 
                                </div>
                            </div>
                        </div>

                    )}

                </div>
            )}
                    </ul>
            </form>
        </div>
    )
}

export default Save


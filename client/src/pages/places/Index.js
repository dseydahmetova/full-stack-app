import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllPlaces, getSavedPlacesId, deletePlace, likePlace, savePlace } from "../../services/placeService";
import StarRating from "../../components/StarRating"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Index({ user, currentId, setCurrentId, page }) {
    const [places, setPlaces] = useState({})
    const [savedPlaces, setSavedPlaces] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await getAllPlaces(page)
            console.log("index page",data)
            setPlaces(data.places)
        }

async function loadSavedPlaces() {
const data = await getSavedPlacesId(user.id)
setSavedPlaces(data.savedPlaces)
}

        loadData()
        loadSavedPlaces()
    }, [currentId])


    async function handleDeletePlace(id) {
        const data = await deletePlace(id)
        setPlaces(data.places.filter(place => place._id !==id))
        // const data = await getAllPlaces()
        // setPlaces(data)
    }

    async function handleLikePlace(id) {
        await likePlace(id)
        // const data = await getAllPlaces()
        // setPlaces(data)
    }

    async function addToFavorite(userId, placeId) {
        const savedPlace = await savePlace(userId, placeId)
        console.log("addtofav", savedPlace)
        setSavedPlaces(savedPlace.data)
    }
// console.log("save", savedPlaces)
    // function isPlaceSaved(id) {
        const isPlaceSaved = (id) => savedPlaces.includes(id);
    // }



  return (
    <div className="home-left">
        {!places.length ? "No places found": (
                <div className="places">
              
                    {places.map((place, index) =>

                        <div className="card" key={index}>
                            <Link to={`/places/${place._id}`} >

                                <div className="card-top">
                                    <div image={place.image}></div>
                                    <img src={place.image} className="card-img-top" alt="place-img" />
                                    <h2 className="placeName">{place.fullName}</h2>

                                </div>
                            </Link>

                            <div className="card-body">

                                    <h5 >{place.address}, {place.city}, {place.stateCode}</h5>
                                    <p className="text-overflow">{place.description}</p>
                                    <StarRating /> 
                                    <div className="card-btm">
                                    <div className="btn-group">
                                        
                                        <button className="icon-btn"
                                            onClick={(e) => handleLikePlace(place._id)}
                                        >
                                            <FontAwesomeIcon icon="fa-solid fa-thumbs-up" /> &nbsp; Like &nbsp; {place.likeCount}
                                        </button>
                                        <button className="icon-btn"
                                            onClick={(e) => handleDeletePlace(place._id)}
                                        >
                                           <FontAwesomeIcon icon="fa-solid fa-trash" /> &nbsp; Delete &nbsp;
                                        </button>
                                        <button className="icon-btn"
                                            onClick={(e) => setCurrentId(place._id)}
                                        >
                                            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />&nbsp; Edit &nbsp;
                                        </button>
                                        <button className="icon-btn"
                                        onClick={() => { addToFavorite(user.id, place._id) }}
                                    disabled={isPlaceSaved(place._id)}
                                    > 
                                    <FontAwesomeIcon icon="fa-solid fa-heart" /> &nbsp;&nbsp;
                                        {isPlaceSaved(place._id) ? 'Saved' : 'Save'}
                                        &nbsp;
                                       
                                    </button>
                                    </div> 
                                    </div>
                                </div>
                            </div>
                      

                    )}

                </div>
            )}
  
    </div>
  )
}
    


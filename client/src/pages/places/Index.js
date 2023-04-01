import { useState, useEffect } from "react"
import { Link} from "react-router-dom"
import StarRating from "../../components/StarRating"
import { getAllPlaces, deletePlace, likePlace } from "../../services/placeService";
import Pagination from '../../components/Pagination'
import { Paper } from '@material-ui/core'
import New from './New'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Index({ user }) {

    const [places, setPlaces] = useState([])
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        async function loadData() {
            const data = await getAllPlaces()
            setPlaces(data)
        }
        loadData()
    }, [currentId])
    // console.log(places)
 console.log('id', currentId)
   
 
 async function handleDeletePlace(id) {
    await deletePlace(id)
    const data = await getAllPlaces()
    setPlaces(data)
}

async function handleLikePlace(id){
   await likePlace(id)
   const data = await getAllPlaces()
   setPlaces(data)
}
  



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
            <div className="Home">
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
                                <div className="card-text">

                                    <p>{place.address}, {place.city}, {place.stateCode}</p>
                                    <p>{place.description}</p>
                                    <div>
                                    <StarRating />
                                    <button className="icon" 
                                     onClick={(e) => handleLikePlace(place._id)}
                                
                                    >
                                        <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />  Like {place.likeCount}                        
                                    </button>
                                    <button className="icon"
                                     onClick={(e) => handleDeletePlace(place._id)}
                                    >
                                    <FontAwesomeIcon icon="fa-solid fa-trash" /> Delete                      
                                    </button>
                                    <button className="icon" 
                                    onClick={(e) => setCurrentId(place._id)}
                                    >
                                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> Edit                     
                                    </button>
</div>
                                </div>
                            </div>
                        </div>

                    )}

                </div>
                <div className="form">
                    <New currentId={currentId} setCurrentId={setCurrentId} user={user} setPlaces={setPlaces} />
                    <Paper elevation={6}>
                        <Pagination />
                    </Paper>
                </div>
            </div>

        </div>

    )
}

export default Index
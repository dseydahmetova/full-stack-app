import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import StarRating from "../../components/StarRating"
import { getAllPlaces, deletePlace, likePlace } from "../../services/placeService";
import Pagination from '../../components/Pagination'
import New from './New'
import { savePlace, getSearchPlace, getSavedPlacesIds } from "../../services/placeService"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}


function Index({ user }) {
    //before [] -> now {places:[]}
    const [places, setPlaces] = useState({})
    const [currentId, setCurrentId] = useState(null);
    const [savedPlaces, setSavedPlaces] = useState([]);
    const [search, setSearch] = useState('')
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery')


    useEffect(() => {
        async function loadData() {
            const data = await getAllPlaces(page)
            setPlaces(data.places)
        }

        async function loadSavedPlaces() {
            if (user.username) {
                const data = await getSavedPlacesIds(user.id)
                setSavedPlaces(data.savedPlaces)
            }
        }

        loadSavedPlaces()
        loadData()
    }, [page])


    async function handleDeletePlace(id) {
        await deletePlace(id)
        let oldData = [...places]
        let updatedData = oldData.filter(place => place._id !== id)
        setPlaces(updatedData)
    }

    async function handleLikePlace(id) {
        await likePlace(id)
        const index = places.findIndex((place) => place._id === id);
        // check if the place is found
        if (index !== -1) {
            const newPlaces = [...places];
            newPlaces[index].likeCount += 1;
            setPlaces(newPlaces);
        }
    }

    async function addToFavorite(userId, placeId) {
        const savedPlace = await savePlace(userId, placeId)
        setSavedPlaces(savedPlace)
        setSavedPlaces([...savedPlaces, placeId]);

    }


    // async function addToFavorite(placeId) {

    // if (favorite.some((favItem) => favItem.fullName === place.fullName)) {
    //   setFavorite((item) =>
    //   favorite.map((favItem) =>
    //       favItem.fullName === item.fullName
    //         ? 
    //          "You already added"

    //         : favItem
    //     )
    //   );
    //   return;
    // }
    // setFavorite((fav) => [
    //   ...favorite,
    //   { ...place }
    // ]);


    // };

    function isPlaceSaved(placeId) {
        return savedPlaces && savedPlaces.includes(placeId);
    }

    // function isPlaceSaved(id) {
    //     return savedPlaces && savedPlaces.includes(id)
    // }


    function handleKeyPressed(e) {
        if (e.key === 'Enter') {
            searchPlace()
        }
    }

    async function searchPlace() {
        //trim removes white spaces
        if (search.trim()) {
            const searchPlace = await getSearchPlace(search)
            navigate(`/places/search?searchQuery=${search || 'none'}`);
            if (searchPlace) {
                setPlaces(searchPlace.places)
            }
        } else {
            navigate('/')
        }

    }
    return (

        <div id="main">

            <div className="card-title">

                <h1 className="welcome-msg">Discover story-worthy travel moments</h1>
                <div className="searchbar">
                    <input
                        name="search"
                        placeholder="search"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyPressed}
                    />
                    <button onClick={searchPlace}>Search</button>
                </div>
                <div className="clip"></div>
            </div>

            <div className="Home">
                {!places.length ?
                    <h1 className="save-msg">Sorry, there are no places to show..</h1>

                    : (
                        <div className="places">

                            {places.map((place, index) =>

                                <div className="card" key={place._id}>
                                    <Link to={`/places/${place._id}`} >

                                        <div className="card-top">
                                            <div image={place.image}></div>
                                            <img src={place.image} className="card-img-top" alt="place-img" />
                                            <h2 className="placeName">{place.fullName}</h2>

                                        </div>
                                    </Link>

                                    <div className="card-body">
                                        <div className="card-text">

                                            <p className="address">{place.address}, {place.city}, {place.stateCode}</p>
                                            <p className="text-overflow">{place.description}</p>

                                            <StarRating />
                                            <div className="icon-btn-group">
                                                <button className="icon-btn"
                                                    onClick={(e) => handleLikePlace(place._id)}

                                                >
                                                    <FontAwesomeIcon icon="fa-solid fa-thumbs-up" /> &nbsp; Like &nbsp; {place.likeCount}
                                                </button>

                                                <button className="icon-btn"
                                                    disabled={user.username !== place.user}
                                                    onClick={(e) => handleDeletePlace(place._id)}
                                                >
                                                    <FontAwesomeIcon icon="fa-solid fa-trash" /> Delete
                                                </button>
                                                <button className="icon-btn"
                                                    disabled={user.username !== place.user}
                                                    onClick={(e) => setCurrentId(place._id)}
                                                >
                                                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> Edit
                                                </button>

                                                <button className="icon-btn"
                                                    onClick={() => { addToFavorite(user.id, place._id) }}
                                                    disabled={isPlaceSaved(place._id) || !user.username}
                                                >
                                                    {isPlaceSaved(place._id) ? "Saved" : "Save"}
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )}

                        </div>
                    )}

                <New currentId={currentId} setCurrentId={setCurrentId} user={user} places={places} setPlaces={setPlaces} />

                <div className="pagination">
                    {(!searchQuery) && (
                        <div className="pagination">
                            <Pagination page={page} />
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Index
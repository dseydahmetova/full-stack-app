import { useEffect, useState, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import StarRating from "../../components/StarRating";
import { getPlace } from "../../services/placeService";
import { createFavForUser } from "../../services/userService"
import axios from 'axios'


function Show({ user }) {
    const userId = user.id
    const [places, setPlaces] = useState({})
    const [savedPlaces, setSavedPlaces] = useState([]);
    // const [ setUser] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const imgRef = useRef()
    const descRef = useRef()
    const nameRef = useRef()
    const addressRef = useRef()
    const cityRef = useRef()
    const stateRef = useRef()
    const weatherRef = useRef()
    const detailsRef = useRef()
    const bodyRef = useRef()

    function goBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function loadData() {
            const data = await getPlace(params.id)
            if (!data) navigate('/places')
            setPlaces(data)
        }


        const getSavedPlaces = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/places/savedPlaces/ids/${user.id}`
                )
                setSavedPlaces(response.data.savedPlaces)
            } catch (err) {
                console.log(err)
            }
        }

        loadData()
        getSavedPlaces()

    }, [params.id])

    async function handleDeleteComment(comment){

    }

    async function handleSubmit(){

    }


    async function handleDeletePost(){

    }


    async function addToFavorite(placeId) {
        try {
            const response = await axios.put(
                `http://localhost:8080/places}`, {
                placeId,
                userId
            })
            setSavedPlaces(response.data.savedPlaces)
        } catch (err) {
            console.log(err)
        }

        //         e.preventDefault()

        //         let favoritePlace = {
        //             image: imgRef.current.value,
        //    fullName: nameRef.current.value,
        //    address: addressRef.current.value,
        //    city: cityRef.current.value,
        //    stateCode: stateRef.current.value,
        //    description: descRef.current.value,
        //    weatherInfo: weatherRef.current.value,
        //         }

        //         const newFav = await createFavForUser(favoritePlace, user.id)
        //         let updatedUser = { ...user }
        //         updatedUser.favoritePlaces.push(newFav)
        //         setUser(updatedUser)



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


    };


    const isPlaceSaved = (id) => savedPlaces.includes(id)
    return (

        <div id="place-details">
            <form >

                <div className="card card-detail" >
                    <div className="card-top">
                        <img ref={imgRef} name="image" src={places.image} className="card-img-top" alt="item-img" />
                        <h2 className="placeName" ref={nameRef} name="fullName">{places.fullName}</h2>
                        <div className="delete-btn">
                            <div className="dot-btn">
                                <button></button>
                            </div>
                        </div>

                    </div>

                    <div className="card-body">
                        <div className="card-text">
                            <p ref={addressRef} name="address">{places.address},
                                <span ref={cityRef} name="city">{places.city}</span>,
                                <span ref={stateRef} name="stateCode">{places.stateCode}</span>
                            </p>
                            <p ref={descRef} name="description">{places.description}</p>
                            <p ref={weatherRef}>{places.weatherInfo}</p>


                            <StarRating />



                            {
                                places.comments?.length ?
                                    <>
                                        <div>Comments:</div>
                                        <div>{places.comments.map((comment, i) =>
                                            <div key={i} className="comment">
                                                <div>{comment.user}</div>
                                                <div>{comment.body}</div>
                                                {comment.user.name === user.name &&
                                                    <>
                                                        <button onClick={() => handleDeleteComment(comment)}>Delete</button>
                                                        <Link to={`/posts/${places._id}/comments/${comment._id}`}><span>Add</span></Link>
                                                    </>
                                                }
                                            </div>
                                        )}</div>
                                        <br /><br />
                                    </>
                                    : ''
                            }
                            {user &&
                                <details ref={detailsRef}>
                                    <summary style={{ opacity: '.5' }}>Leave a comment:</summary>
                                    <form onSubmit={handleSubmit}>
                                        <textarea ref={bodyRef} id="lc" cols="1" rows="1" />
                                        <button>Comment</button>
                                    </form>
                                </details>
                            }

                            <div className="buttons">
                                {places.user === user.username &&
                                    <>
                                        <button onClick={handleDeletePost}>Delete</button>
                                        <Link to={`/places/${places._id}/edit`}>
                                            <button>Edit</button>
                                        </Link>
                                    </>
                                }

                                <div>

                                    <button
                                        onClick={() => { addToFavorite(places._id) }}
                                        disabled={isPlaceSaved(places._id)}
                                    >
                                        {isPlaceSaved(places._id) ? "Saved" : "Save"}
                                    </button>



                                    <button type="button" onClick={goBack}>Back</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </form>
        </div>
    )
}

export default Show
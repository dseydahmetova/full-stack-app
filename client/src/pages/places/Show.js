import { useEffect, useState, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import StarRating from "../../components/StarRating";
import { getPlace } from "../../services/placeService";
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
    const userRef = useRef()
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


        loadData()

    }, [params.id])

    async function handleDeleteComment(comment){

    }

    async function handleSubmit(){

    }


    return (
        <div id="place-details">
                <div className="place-show" >
                        <div className="card-text-show">
                        <h1 ref={nameRef} name="fullName">{places.fullName}</h1>
                            <p className="address-show" ref={addressRef} name="address">{places.address},
                                <span ref={cityRef} name="city">{places.city}</span>,
                                <span ref={stateRef} name="stateCode">{places.stateCode}</span>
                            </p>
                            <p className="desc-show" ref={descRef} name="description">{places.description}</p>
                            <p ref={weatherRef}>{places.weatherInfo}</p>
                            <p className="post-user" ref={userRef}>Posted by {places.user} on {new Date(places.createdAt).toLocaleDateString()} at {new Date(places.createdAt).toLocaleTimeString()}</p>

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
                                                        <Link to={`/places/${places._id}/comments/${comment._id}`}><span>Add</span></Link>
                                                    </>
                                                }
                                            </div>
                                        )}</div>
                                        <br /><br />
                                    </>
                                    : ''
                            }
                            {/* {user &&
                                <details ref={detailsRef}>
                                    <summary style={{ opacity: '.5' }}>Leave a comment:</summary>
                                    <form onSubmit={handleSubmit}>
                                        <textarea ref={bodyRef} id="lc" cols="1" rows="1" />
                                        <button>Comment</button>
                                    </form>
                                </details>
                            } */}

                                {/* {places.user === user.username &&
                                    <>
                                        <button onClick={handleDeletePost}>Delete</button>
                                        <Link to={`/places/${places._id}/edit`}>
                                            <button>Edit</button>
                                        </Link>
                                       
                                    </>
                                } */}

        
                           
                        </div>
                    <div className="img-show">
                        <img ref={imgRef} name="image" src={places.image} alt="item-img" />
                        <div className="delete-btn">
                            {/* <div className="dot-btn">
                                <button></button> 
                            </div> */}
                            <button type="button" onClick={goBack}><FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" size="2xl" /></button>
                        </div>

                    </div>
                    </div>
         </div>
    )
}

export default Show
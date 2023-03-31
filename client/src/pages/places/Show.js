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
            try{
                const response = await axios.get(
                `http://localhost:8080/places/savedPlaces/ids/${user.id}`
            )
            setSavedPlaces(response.data.savedPlaces)
            }catch(err) {
                console.log(err)
            }
        }

        loadData()
        getSavedPlaces()

    }, [params.id])

    

   async function addToFavorite(placeId){
    try{
        const response = await axios.put(
        `http://localhost:8080/places}`,{
 placeId,
userId           
        })
            setSavedPlaces(response.data.savedPlaces)
    }catch(err){
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

        <div id="place--details">
<form >
            <div className="card" >
                <img ref={imgRef} name = "image" src={places.image} className="card-img-top" alt="item-img" />

                <div className="card-body">
                    <div className="card-text">
                        <h2 ref={nameRef} name="fullName">{places.fullName}</h2>
                        <p ref={addressRef} name="address">{places.address}, 
                        <span ref={cityRef} name="city">{places.city}</span>, 
                        <span ref={stateRef} name="stateCode">{places.stateCode}</span>
                        </p>
                        <p ref={descRef} name = "description">{places.description}</p>


                        <StarRating />

                        <p ref={weatherRef}>{places.weatherInfo}</p>

                        <div>
                        
                        <button 
                        onClick = {() =>{addToFavorite(places._id)}}
                        disabled = {isPlaceSaved(places._id)}
                         > 
                         {isPlaceSaved(places._id) ? "Saved" : "Save"}
                        </button>
                        
                            
                        
                            <button type="button"  onClick={goBack}>Back</button>

                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Show
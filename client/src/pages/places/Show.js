import {  useContext } from "react"
import {  useNavigate, useParams } from "react-router-dom"
// import { createCommentForPost, deleteCommentFromPost } from "../../services/commentService"
// import { deletePost, getPost } from "../../services/postService"
// import { getAllPlaces } from "../../services/travelApi"
import { MyContext } from "../../services/context";
import StarRating from "../../components/StarRating";


function Show({ user }) {

    // const [places, setPlaces] = useState([])
    // const navigate = useNavigate()
    // const params = useParams()
    // const bodyRef = useRef()
    // const detailsRef = useRef()
    let { id } = useParams();
    let { places } = useContext(MyContext)
    let navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }

    // useEffect(() => {
    //     async function loadData() {
    //         const data = await getAllPlaces(params.id)
    //         const allEvents = data.data
    //         if (!data) navigate('/places')
    //         setPlaces(allEvents)
    //     }
            
    //     loadData()
    // }, [params.id])

    return (

        <div id="place--details">

            {places.filter(placeItem => placeItem.id === id)
            .map((item, i) =>(
                    <div className="card" >
                        <img src={item.images[0].url} className="card-img-top" alt="item-img" />
                    
                    <div className="card-body">
                        <div className="card-text">
                        <h2>{item.fullName}</h2>
                             <p>{item.addresses[0].line1}, {item.addresses[0].city}, {item.addresses[0].stateCode}</p>
                            <p>{item.description}</p>


                            <StarRating />

                           <p>{item.weatherInfo}</p>
{item.activities.map((activity, index) => 
    <div key ={index}>
    <ul> Activities:
    <li>{activity.name}</li>
    </ul>
    </div> 
    
   
)}  
<div>
    <button name="Add to cart" className="btn btn-outline-secondary buyButton evtBtn"
      > Save </button>
                <button type="button" className="btn btn-outline-secondary viewButton evtBtn" onClick={goBack}>Back</button>
              
    </div>       
                        </div>
                    </div>
                    </div>
                
            ))



}

        </div>









    )
}

export default Show
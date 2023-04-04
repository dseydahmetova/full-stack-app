import { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { createPlace, getPlace, updatePlace, getAllPlaces} from '../../services/placeService'


function New({ user, currentId, setCurrentId, setPlaces, places}) {
    
    const [placeData, setPlaceData] = useState({ fullName: '', address: '', city: '', stateCode: '', image: '', description: '', weatherInfo: '' });
    const place = currentId ? places.places.find((place) => place._id === currentId) : null;
  const navigate = useNavigate();

  console.log('places', {places})
    useEffect(() => {
        if (!place?.fullName) {
            clear()
        }if (place){
                setPlaceData(place)
            }
    }, [place]);

    function clear() {
        setCurrentId(0);
        setPlaceData({ fullName: '', address: '', city: '', stateCode: '', image: '', description: '', weatherInfo: '' });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (currentId === 0) {
                await createPlace({
                    ...placeData
                }, navigate);
                clear()            
            } else {
                await updatePlace(currentId, {...placeData}) ;
                clear()
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
       
        
          
        <div className='form'>
        {user.username ?
        
            <form autoComplete="off" onSubmit={handleSubmit}>
            <h4>{currentId ? 'Edit the Place' : 'Create a new PLace'}</h4>
                <input name="fullName" placeholder='name' value={placeData.fullName} onChange={(e) => setPlaceData({ ...placeData, fullName: e.target.value })} />
                <input name="address" placeholder='address' value={placeData.address} onChange={(e) => setPlaceData({ ...placeData, address: e.target.value })} />
                <input name="city" placeholder='city' value={placeData.city} onChange={(e) => setPlaceData({ ...placeData, city: e.target.value })} />
                <input name="stateCode" placeholder='stateCode' value={placeData.stateCode} onChange={(e) => setPlaceData({ ...placeData, stateCode: e.target.value })} />
                <textarea name="description" placeholder='description' col = "15" value={placeData.description} onChange={(e) => setPlaceData({ ...placeData, description: e.target.value })} />
                <textarea name="weatherInfo" placeholder='weatherInfo' col = "15" value={placeData.weatherInfo} onChange={(e) => setPlaceData({ ...placeData, weatherInfo: e.target.value })} />
                <input name="image" placeholder='image' value={placeData.image} onChange={(e) => setPlaceData({ ...placeData, image: e.target.value })} />
                <div >
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPlaceData({ ...placeData, image: base64 })} />
                </div>
                <button type="submit">Submit</button>
                <button onClick={clear} >Cancel</button>
            </form>
          
 : 
<div>
            <h1>
              Please Sign In to create new travel places and like other's places.
            </h1>
          </div>
        }
          </div>

    )
    
}

export default New

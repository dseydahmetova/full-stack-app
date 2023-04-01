import { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import { createPlace, getPlace, updatePlace, getAllPlaces} from '../../services/placeService'


function New({ user, currentId, setCurrentId, setPlaces}) {
    const [placeData, setPlaceData] = useState({ fullName: '', address: '', city: '', stateCode: '', image: '', description: '', weatherInfo: '' });

    useEffect(() => {
        if (currentId) {
            async function loadData() {
                const data = await getPlace(currentId)
                setPlaceData(data)
            }
            loadData()
        } else {
            setPlaceData({ fullName: '', address: '', city: '', stateCode: '', image: '', description: '', weatherInfo: '' });
        }

        // console.log(placeData)
       
    },
    

        [currentId]);

    function clear() {
        setCurrentId(0);
        setPlaceData({ fullName: '', address: '', city: '', stateCode: '', image: '', description: '', weatherInfo: '' });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (currentId) {
                await updatePlace(currentId, placeData)

            } else {
                await createPlace(placeData)
                const data = await getAllPlaces()
    setPlaces(data)
            }
            clear()

        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div className='form'>
            <form autoComplete="off" onSubmit={handleSubmit}>
            <h4>{currentId ? 'Edit the Place' : 'Create a new PLace'}</h4>
                <input name="fullName" placeholder='Name' value={placeData.fullName} onChange={(e) => setPlaceData({ ...placeData, fullName: e.target.value })} />
                <input name="address" placeholder='address' value={placeData.address} onChange={(e) => setPlaceData({ ...placeData, address: e.target.value })} />
                <input name="city" placeholder='city' value={placeData.city} onChange={(e) => setPlaceData({ ...placeData, city: e.target.value })} />
                <input name="stateCode" placeholder='stateCode' value={placeData.stateCode} onChange={(e) => setPlaceData({ ...placeData, stateCode: e.target.value })} />
                <textarea name="description" placeholder='description' col = "15" value={placeData.description} onChange={(e) => setPlaceData({ ...placeData, description: e.target.value })} />
                <textarea name="weatherInfo" placeholder='weatherInfo' col = "15" value={placeData.weatherInfo} onChange={(e) => setPlaceData({ ...placeData, weatherInfo: e.target.value })} />
                <div >
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPlaceData({ ...placeData, image: base64 })} />
                </div>
                <button type="submit">Submit</button>
                <button onClick={clear} >Cancel</button>
            </form>
        </div>



    )
}

export default New

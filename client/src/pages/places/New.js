import { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import {createPlace, updatePlace} from '../../services/placeService'
import axios from 'axios'

function New ({ user, currentId, setCurrentId }) {
    const [placeData, setPlaceData] = useState({ fullName: '', address: '', city: '', stateCode: '', image: '', description: '', weatherInfo: '' });
    
    useEffect(() => {
        if (currentId) {
            axios.get(`https://http://localhost:3000/places/${currentId}`)
              .then(response => {
                setPlaceData(response.data);
              })
              .catch(error => {
                console.error(error);
              });
          } else {
            setPlaceData({ fullName: '', address: '', city: '', stateCode: '', image: '', description: '', weatherInfo: '' });
          }

          console.log(placeData)

        }, 
        
        [currentId]);
     
  
   function  clear(){
    setCurrentId(0);
      setPlaceData({ fullName: '', address: '', city: '', stateCode: '', image: '', description: '', weatherInfo: '' });
    };
  
    async function handleSubmit(e) {
        e.preventDefault();
//     let place = {
// placeData, user
//     }
    try{
    if(currentId){
         await updatePlace(currentId, placeData)
      
    }else{
        await createPlace(placeData)
    }
        clear()

    }catch (error) {
        console.error(error);
      }
   
        }
      

  return (
    <div>
      <form autoComplete="off"  onSubmit={handleSubmit}>
        <input name="fullName"  placeholder ='Name' value={placeData.fullName} onChange={(e) => setPlaceData({ ...placeData, fullName: e.target.value })} />
        <input name="address" placeholder='address' value={placeData.address} onChange={(e) => setPlaceData({ ...placeData, address: e.target.value })} />
        <input name="city" placeholder='city'  value={placeData.city} onChange={(e) => setPlaceData({ ...placeData, city: e.target.value })} />
        <input name="stateCode" placeholder='stateCode'   value={placeData.stateCode} onChange={(e) => setPlaceData({ ...placeData, stateCode: e.target.value })} />
        <input name="description" placeholder='description' value={placeData.description} onChange={(e) => setPlaceData({ ...placeData, description: e.target.value })} />
        <input name="weatherInfo" placeholder='weatherInfo'  value={placeData.weatherInfo} onChange={(e) => setPlaceData({ ...placeData, weatherInfo: e.target.value })} />
        <div >
        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPlaceData({ ...placeData, image: base64 })} />
        </div>
        <button type="submit">Submit</button>
        <button onClick={clear} >Clear</button>
      </form>
    </div>


    
  )
}

export default New

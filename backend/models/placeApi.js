const axios = require('axios')
const Place = require('./placeModel')



// async function saveDataToMongoDB() {
//     const key = 'Wkbi1lT4S7DeLlieN07oVPk4c3n8rycPXNhpbb3W'
// try{
//     const response = await axios.get(
//         `https://developer.nps.gov/api/v1/parks?&api_key=${key}`
//     );
//     // const data = response.json();
//     const myPlace = response.data.data
//     console.log("Data saved to DB", response)
//     // for(let i=0; i< myPlace.length; i++){
//                  const places = new Place({
//                     // image: myPlace[i].image[0]['url'],
//                     fullName: myPlace.fullName,
//                     // address: myPlace[i].addresses[0]['line1'],
//                     // city: myPlace[i].addresses[0]['city'],
//                     // stateCode: myPlace[i].addresses[0]['stateCode'],
//                     description: myPlace.description,
//                     weatherInfo: myPlace.weatherInfo
//                  })
//                  await places.save()
//             //   }
       
//        console.log("Data saved to DB", data)
//     }catch(error){
//         console.log(error)
//     }
//     }


// const axios = require('axios');

// const API_KEY = 'Wkbi1lT4S7DeLlieN07oVPk4c3n8rycPXNhpbb3W';
// const API_ENDPOINT = `https://developer.nps.gov/api/v1/parks?api_key=${API_KEY}`;

// axios.get(API_ENDPOINT)
//   .then(response => {
//     const parks = response.data.data;
//     parks.forEach(park => {
//       const places = new Place ({
//         fullname: park.fullname
//       })
//       places.save((err) =>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log('saved')
//         }
//       })
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });


    // saveDataToMongoDB()


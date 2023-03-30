// import fetch from 'node-fetch'

// // export async function getAllPlaces() {
// //   const key = 'Wkbi1lT4S7DeLlieN07oVPk4c3n8rycPXNhpbb3W'
  

// //   const response = await fetch(
// //     `https://developer.nps.gov/api/v1/parks?&api_key=${key}`
// //   );
// //   const data = response.json();
// //   return data;
// // }

// const Place = require('../../../backend/models/placeModel')

// async function getPlacesApi() {
//     const key = 'Wkbi1lT4S7DeLlieN07oVPk4c3n8rycPXNhpbb3W'

//     const response = await fetch(
//         `https://developer.nps.gov/api/v1/parks?&api_key=${key}`
//     );
//     const data = response.json();
//     const myPlace = data.data
// console.log(myPlace)
//    //  myPlace.map((item, index) => {
//       for(let i=0; i< myPlace.length; i++){
//          const places = new Place({
//             image: myPlace[i].image[0]['url'],
//             fullName: myPlace[i]['fullName'],
//             address: myPlace[i].addresses[0]['line1'],
//             city: myPlace[i].addresses[0]['city'],
//             stateCode: myPlace[i].addresses[0]['stateCode'],
//             description: myPlace[i]['description'],
//             weatherInfo: myPlace[i]['weatherInfo'],
//       // }
       
//         })
//         places.save()
//    //  })
//       }
// }

// getPlacesApi()
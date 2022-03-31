`use strict`
//// callback 

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getCountry= function(country){
const request = new XMLHttpRequest();
request.open("GET",`https://restcountries.com/v3.1/name/${country}`);
request.send();

request.addEventListener("load", function() {
    const [data] =JSON.parse(this.responseText);
    console.log(data);

    const lang =(data)=>{
      const country_name = data.name.common;
      if (country_name == "India") {
        let d1 =data.languages.hin
        return d1; 
      }else if (country_name == "Nepal") {
        return data.languages.nep;
      }
      else {
        return data.languages.zho;
      }
    }
    const curren =(data)=>{
     
      const country_name = data.name.common;
      if (country_name == "India") {
        let d1 =data.currencies.INR.name;
        return d1; 
      }else if (country_name == "Nepal") {
        return data.currencies.NPR.name;
      }
      else {
        return data.currencies.CNY.name;
      }
    }
 
    const html = `<article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(2)} people</p>
      <p class="country__row"><span>🗣️</span>${lang(data)}
      </p>
      <p class="country__row"><span>💰</span>${curren(data)}</p>
    </div> 
    
  </article>`;
 
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
})
}
getCountry("india");
getCountry("china");
getCountry("nepal");

// ////////////////////////////////////////////////////////////

// // const renderCountry = function(data) {
// //  // console.log(data)
// //     const html = `<article class="country">
// //     <img class="country__img" src="${data.flags.svg}" />
// //     <div class="country__data">
// //       <h3 class="country__name">${data.name.common}</h3>
// //       <h4 class="country__region">${data.region}</h4>
// //       <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(2)} people</p>
// //       <p class="country__row"><span>🗣️</span>${(data.capital == "New Delhi")? data.languages.eng : data.languages.ara}</p>
// //       <p class="country__row"><span>💰</span>${(data.capital == "New Delhi") ? data.currencies.INR.name : data.currencies.BHD.name}</p>
// //     </div>
// //   </article>`;
// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// //   countriesContainer.style.opacity = 1;
    
// // }
// // //  XMLHTTPRequest callback
// //     // AJAX call country 1
// //     const getCountry= function(country){
// //         const request = new XMLHttpRequest();
// //         request.open("GET",`https://restcountries.com/v3.1/name/${country}`);
// //         request.send();
  
// //     request.addEventListener('load', function () {
// //       const [data] = JSON.parse(this.responseText);
// //      // console.log(data);
  
// //       // Render country 1
// //       renderCountry(data);
  

      
// //       // Get neighbour country (2)
// //      const [neighbour] = data.borders[1];
// //     // neighbour.toLowerCase();
// //         //    console.log(neighbour.toLowerCase())
// //       // const neighbour ="peru";
// //      if (!neighbour) return;
  
// //       // AJAX call country 2
// //       const request2 = new XMLHttpRequest();
// //       request2.open("GET", `https://restcountries.com/v3.1/name/${neighbour.toLowerCase()}`);
// //       request2.send();
// //  //  console.log(request2)
// //       request2.addEventListener('load', function () {
// //         const [data2] = JSON.parse(this.responseText);
// //       //  console.log(data2);
  
// //         renderCountry(data2, "neighbour");
// //       });
// //     });
// //   };

  
// //   // getCountryAndNeighbour('portugal');
// //  // getCountry("india");
  

// // /////////////////////////////////////////////////////////////
// // ///// Fetch Method
// // const fetchCountry = function(country){ 
// //     fetch(`https://restcountries.com/v3.1/name/${country}`)
// //       .then(response =>{
// //          // if (!response.ok) {
// //             //  throw new Error (`Country Not Found (${response.status} Not Found)`);
                
// //        //   }
// //          // return 
// //          response.json()})
// //      .then(function(data) {
// //          rendCountry(data[0]);
// //         const [neighbour2] = data[0].borders;
// //         neighbour2.toLowerCase()
// //         return fetch( `https://restcountries.com/v3.1/alpha/${neighbour2}`)
// //          .then(response =>{response.json()})
// //         .then(data => rendCountry(data[0])).catch(reason => reason);
// //     });
// // }

// const rendCountry = function(data) {
//     // console.log(data)
//        const html = `<article class="country">
//        <img class="country__img" src="${data.flags.svg}" />
//        <div class="country__data">
//          <h3 class="country__name">${data.name.common}</h3>
//          <h4 class="country__region">${data.region}</h4>
//          <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(2)} people</p>
//          <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//          <p class="country__row"><span>💰</span>${data.currencies.INR.name}</p>
//        </div>
//      </article>`;
//      countriesContainer.insertAdjacentHTML('beforeend', html);
//      countriesContainer.style.opacity = 1;
       
//   }
// // fetchCountry(prompt("enter Country"));

// ////////////////////////////////////////////////////


// ////////////////// 
// // Asynchronous Js
// /*
// Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)
// The Complete JavaScript Course 31
// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
// */reAmI = function(lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   .then(res =>{ 
//     if(!res.ok)
//        throw new Error(`Invalid Geocode ${lat}, ${lng} `)
//        return res.json();
//       })
//   .then(data => {console.log(`You are in ${data.city} , ${data.country}`)
//           return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
// })
//  .then(response =>{
//             if (!response.ok) {
//                 throw new Error (`Country Not Found (${response.status} Not Found)`);
                  
//             }
//            return response.json()})
//        .then(data =>rendCountry(data[0]))
//        .catch(err => console.error(`${err.message} display by catch`));
// }

// whereAmI(23.0235063,72.5323024);

////////////////////////////////
//Building a Simple Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening ');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN ');
//     } else {
//       reject(new Error('You lost your money '));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));


// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

const axios = require('axios').default;
const actualResponseBody = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/6/'
    ],
    species: [],
    vehicles: [
        'https://swapi.dev/api/vehicles/14/',
        'https://swapi.dev/api/vehicles/30/'
    ],
    starships: [
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/22/'
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/'
};

function requestAxios(httpMethod, url, options, callback) { 
    axios({
        ...options,
        method: httpMethod,
        url: url,
        // responseType: 'stream'
      }).then(function (response) {
        callback(undefined, response);
      }).catch(function (error) {
        callback(error, undefined);
      })
    }
  requestAxios('GET', 'https://swapi.dev/api/people/1', {}, (err, data) => {
    if (err) {
      console.error('error happened:', err);
    } else {
        console.log('Response Status:', data.status);
        console.log('Response StatusText:', data.statusText);
        console.log('Response Body:', data.data);
        console.log('The validation of response body is:', JSON.stringify(actualResponseBody) === JSON.stringify(data.data));
    }
  });
const axios = require('axios').default;
const cheerio = require('cheerio');

function requestAxios(httpMethod, url, options, callback) { 
    axios({
        ...options,
        method: httpMethod,
        url: url,
        responseType: 'json'
      }).then(function (response) {
        callback(undefined, response);
      }).catch(function (error) {
        callback(error, undefined);
      })
}
    
  requestAxios('GET', process.argv[2], {}, (err, data) => {
    if (err) {
      console.error('error happened:', err);
    } else {
        console.log('Response Status:', data.status);
        console.log('Response StatusText:', data.statusText);
        console.log('Response Body:', data);
        const $ = cheerio.load(data.data);
        console.log('H1:', $('h1').text());
        console.log('Paragraph:', $('p[][1]').text());
    }
  });
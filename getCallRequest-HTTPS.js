var https = require('https');

function request(httpMethod, url, options, callback) {
  var myUrl = new URL(url);
  var opt = {
    ...options,
    host: myUrl.host,
    path: myUrl.pathname,
  method: httpMethod
  }
  console.log('Options ------>', JSON.stringify(opt));
    https.request(opt, function(response) {
      var str = '';

      response.on('data', function (chunk) {
        // console.log('The chunk is ----->', chunk);
        str += chunk;
        // console.log('The string is ----->', str);
        // callback(undefined, str);
      });

      response.on('end', function () {
        // console.log('The string is ----->', str);
        callback(undefined, str);
      })

      response.on('error', function (error) {
          callback(error, undefined);
          console.log(error);
      });
  }).end();
}
    

request('GET', 'https://swapi.dev/api/people/1', {
  headers: {
  'content-type' : 'application/json'
}}, (err, data) => {
  if(err) {
    console.error('error happened:', err);
  } else {
    console.log('response body:----------------------------------------------------------------------------------->', data);
  }
});

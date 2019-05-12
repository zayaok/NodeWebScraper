const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/The_Wolf_and_the_Lion';

rp(url)
    .then(function(html) {
        console.log(html);
    })
    .catch(function(err) {
        //handle error
    });


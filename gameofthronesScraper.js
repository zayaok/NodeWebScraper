const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Game_of_Thrones_episodes';


rp(url)
    .then(function(html){
        //success
        //Print the length of the elements with the tag 'a' inside of td in html
        console.log($('td > a', html).length);
        console.log($('td > a', html));
    })
    .catch(function(err){
        //handle error
    });

    

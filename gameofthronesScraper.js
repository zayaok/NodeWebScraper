const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Game_of_Thrones_episodes';
const gameOfThronesParse = require('./gameOfThronesParse');
rp(url)
    .then(function(html) {
        //success
        const wikiUrls = [];
        //Traverse array as long as i is less than  155
        for (let i = 0; i < 155; i++) {
            //Append(add) all elements that are labeled a inside of td that also have the href attribute to the array 
            wikiUrls.push($('td > a', html)[i].attribs.href);
        }
        return Promise.all(
            wikiUrls.map(function(url) {
                return gameOfThronesParse('https://en.wikipedia.org'+ url);
            })
        );
    })

    .then(function(headlines){
        console.log(headlines);
    })
    .catch(function(err){
        //handle error
        //console.log(console.error();
        
    });

    

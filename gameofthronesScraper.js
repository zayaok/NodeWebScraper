const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Game_of_Thrones_episodes';


rp(url)
    .then(function(html){
        //success
        const wikiUrls = [];
        //Traverse array as long as i is less than  155
        for (let i = 0; i < 155; i++) {
            //Append(add) all elements that are labeled a inside of td that also have the href attribute to the array 
            wikiUrls.push($('td > a', html)[i].attribs.href);
        }
        console.log(wikiUrls);
        //Print the length of the elements with the tag 'a' inside of td in html
        //console.log($('td > a', html).length);
        //console.log($('td > a', html));
    })
    .catch(function(err){
        //handle error
    });

    

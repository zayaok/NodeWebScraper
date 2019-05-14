const rp = require('request-promise');
const $ = require('cheerio');

const gameOfThronesParse = function(url) {
    return rp(url)
    .then(function(html) {
        return {
       name: $('.firstHeading', html).text(),
        headlines: $('.mw-headline', html).text(),
    };
})
    .catch(function(err) {
        //handle error
    });
};

module.exports = gameOfThronesParse;

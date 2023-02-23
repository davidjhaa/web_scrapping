const request = require("request");
const cheerio = require("cheerio");
// const getScorecardObj = require("./scorecards");
const {gifs} = require("./scorecards");
function getAllMatch(url) {
    // console.log("from allMatch.js ",url);
    request(url, cb);
}
function cb(err, res, body) {
  if (err) {
    console.error("error", err);
  } else {
    extractAllMatchLink(body);
  }
}
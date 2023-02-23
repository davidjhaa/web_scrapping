const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

function getInfoFromScorecard(url) {
      console.log("from scorecards.js ",url);
        // we have a url of a scorecard, we want to get html of that scorecard
      console.log("request received "+count);
      request(url, cb);
}
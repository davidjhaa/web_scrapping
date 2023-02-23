let url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423";
let homeURL = "https://www.espncricinfo.com/";
const request = require("request");
const cheerio = require("cheerio");
const allMatchObj = require("./allMatch");
request(url, cb);

function cb(err, response, body){
  if(err)
    console.log("error : ", err);
  else{
    console.log("statusCode : ", response && response.statusCode);
    handleHTML(body);
  }
}

function handleHTML(html){
    let selecTool = cheerio.load(html);
    let anchorElem = selecTool(`a[href="/series/indian-premier-league-2022-1298423/match-schedule-fixtures-and-results"]`);
    // console.log(selecTool(anchorElem).text());

    let relativeLink = anchorElem.attr("href");
    let fullLink = homeURL + relativeLink;
    // console.log(fullLink);
    allMatchObj.getAllMatch(fullLink);
}
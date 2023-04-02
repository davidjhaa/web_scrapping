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

function cb(err,res,body) {
  if (err) {
      console.log(err);
  }
  else if (res.statusCode == 404) {
    console.log("Page not found");
  }
  else {
    // console.log("Page found");
      getMatchDetails(body);
  }
}

function getMatchDetails(html) {
    // selectool contains html of ith scorecrad
    let selecTool = cheerio.load(html);

    //1. get venue
    //2. get date
    let desc = selecTool(".match-header-info.match-info-MATCH");
    //   console.log(desc.text());
    let descArr = desc.text().split(",");
    //Match (N), Abu Dhabi, Oct 25 2020, Indian Premier League
    // console.log(descArr);
    let dateOfMatch = descArr[2];
    let venueOfMatch = descArr[1];
    console.log(dateOfMatch);
    console.log(venueOfMatch);
    //3. get result
      let matchResEle = selecTool(
        ".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text"
      );
      let matchResult = matchResEle.text();;
      console.log(matchResult);
    //4. get team names
    let teamNameArr = selecTool(".name-detail>.name-link");
    // console.log(teamNames.text());
    let ownTeam = selecTool(teamNameArr[0]).text();
    let opponentTeam = selecTool(teamNameArr[1]).text();
    // console.log(ownTeam);
    // console.log(opponentTeam);

    //5. get innings 

    let allBatsmenTable = selecTool(".table.batsman tbody");
    // console.log("number of batsmen tables are ->   ",allBatsmenTable.length);
    // let htmlString = "";
    // let count = 0;
    for (let i = 0; i < allBatsmenTable.length; i++) {
    // htmlString = htmlString + selecTool(allBatsmenTable[i]).html();
    //Get the descendants(table rows ) of each element (table )
    let allRows = selecTool(allBatsmenTable[i]).find("tr"); // -> data of batsmen + empty rows 
    // let temp ;
    if (i == 1) {
      let temp = ownTeam;
      ownTeam = opponentTeam;
      opponentTeam = temp;
    }
    console.log(ownTeam);
    console.log(opponentTeam);
    for (let i = 0; i < allRows.length; i++) {
      //Check to see if any of the matched elements have the given className
      
      let row = selecTool(allRows[i]);
      let firstColmnOfRow = row.find("td")[0];
      if (selecTool(firstColmnOfRow).hasClass("batsman-cell")) {
        let pn = selecTool(row.find("td")[0]).text().split("");
        // console.log(pn);
        // console.log(pn.join(""));
        let playerName = "";
      }

}

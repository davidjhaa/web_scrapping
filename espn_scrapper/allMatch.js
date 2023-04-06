const request = require("request");
const cheerio = require("cheerio");
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

function extractAllMatchLink(html){
  let selecTool = cheerio.load(html);
  let scoreCardElemArr = selecTool(`.ds-text-tight-xs.ds-text-typo.ds-underline.ds-decoration-ui-stroke`);
  console.log(scoreCardElemArr);
  for(let i=0 ; i<scoreCardElemArr.length; i++){
      let scorecardLink = selecTool(scoreCardElemArr[i]).attr("href");
      let fullLink = "https://www.espncricinfo.com" + scorecardLink;
      console.log( i + 1 + ")" + fullLink);
      gifs(fullLink);
      break;
  }
}

module.exports = {
  getAllMatch : getAllMatch,
};

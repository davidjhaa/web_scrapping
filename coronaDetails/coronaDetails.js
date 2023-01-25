const request = require("request");
const cheerio = require("cheerio");
request('https://www.worldometers.info/coronavirus/', cb);

function cb(err, response, body){
  if(err)
    console.log("error : ", err);
  // console.log("statusCode : ", response && response.statusCode)
  else{
    handleHTML(body);
  }
}

function handleHTML(html){
  // cheerio.load() parses html file
  let selectTool = cheerio.load(html);

  // selecttool .html() gives html file as output
  // console.log(selectTool.html());

  let coronaStatsArray = selectTool(".maincounter-number");
  // .text gives the text written inside the given class or any attribute;
  // console.log(coronaStatsArray.text());

  let totalCases = selectTool(coronaStatsArray[0]).text();
  console.log("totalCases : " + totalCases);

  let totalDeaths = selectTool(coronaStatsArray[1]).text();
  console.log("totalDeaths : " + totalDeaths);

  let totalRecovered = selectTool(coronaStatsArray[2]).text();
  console.log("totalRecovered : " + totalRecovered);
}


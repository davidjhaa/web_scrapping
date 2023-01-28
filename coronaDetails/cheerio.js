const cheerio = require("cheerio");
let html = `<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>`;

//cheerio stores data in form of object
let selecTool = cheerio.load(html);

let fruitNameArr = selecTool("#fruits");
console.log(fruitNameArr);

// let fruitName = selecTool(".orange");
// console.log(fruitName.text());

# renderJsTemplate
Rendering java script small string template which can be used again ! 
A small npm package for rendring small javascript template messages ! 

Install :

npm install renderjs

Use : 

var render = require('renderstring);

var template = "hello this is ?";

var result = render.parseTemplate(template, ["vipul"], "?");
console.log(result);

Output :

hello this is vipul

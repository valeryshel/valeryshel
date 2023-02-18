const fs = require("fs"); // подключим набор для работы с файлами;

const fileContent = fs.readFileSync("index.html", "utf-8"); // прочитать файл index.html;

const startStr = fileContent.indexOf("<style>"); // найти порядковый номер символа <style>;

const endStr = fileContent.indexOf("</style>"); // найти порядковый номер символа </style>;

const onlyCssString = fileContent.slice(startStr + 10, endStr); // получить только CSS;

fs.writeFileSync("style.css", onlyCssString); // записать CSS в новый файл;

// run node script.js

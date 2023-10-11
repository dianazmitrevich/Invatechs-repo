const del = require("del");

// удаление директории
const clear = () => {
   return del($.path.root);
}

module.exports = clear;
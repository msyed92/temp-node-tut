// CommonJS every file is module (by default)
// every file in node is a module
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alt-flavor");

require("./7-mind-grenade");

sayHi("manaal");
sayHi(names.samia);
sayHi(names.soha);

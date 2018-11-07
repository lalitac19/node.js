//Register babel to transpile before our tests run.
require("babel-register")();
// Disable webpack features that mocha doesn’t understand
require.extensions[".css"] = function () {};
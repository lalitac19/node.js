import jsdom from "jsdom-global";
import fs from "fs";
describe("index.html", () => {
it("should say hi", () => {
const indexFile = fs.readFileSync("./src/index.html", "utf-8");
//cleanup is the return function of invoking the
jsdom constructor/function
let cleanup = jsdom(indexFile);
const ptag = document.getElementsByTagName("p")[0];
expect(ptag.innerHTML).equal("Hello!");
cleanup();
});
});


import { expect } from "chai";
describe("our first test", () => {
it("should pass", () => {
expect(true).to.equal(true);
});
});
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["The", "My", "Your", "Our", "A"];
  let adjectives = ["new", "cool", "big", "free", "smart"];
  let nouns = ["website", "blog", "domain", "page", "app"];
  let ends = [".com", ".org", ".biz", ".io", ".net"];

  let domainNames = [];

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let end of ends) {
          domainNames.push(`${pronoun}${adjective}${noun}${end}`);
        }
      }
    }
  }

  document.body.innerHTML = `<ul>${domainNames
    .map(domainName => `<li>${domainName}</li>`)
    .join(" ")}</ul>`;
};

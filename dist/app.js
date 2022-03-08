"use strict";
const a = "hello world";
const b = 3.3;
const c = true;
const d = null;
const arr = ["blue", "red", "green", 4];
// Les objets
const user = {
    firstname: "nessa",
    lastname: "devil",
};
const date = new Date();
const cb = (e) => {
    return 3 + 4;
};
function printId(id) {
    console.log(id.toString());
}
// 2 manieres de definir le tyope d'element visé
const compteur = document.querySelector("#compteur");
const test = document.querySelector("#test");
// le type union
function WorkFlow(id) {
    console.log("lol");
}
// console.log("hello bitches !!!");
// const compteur = document.querySelector("#compteur");
// let i = 0;
// const increment = (e:any) => {
//   i++;
//   compteur.querySelector("span").innerText = i.toString();
// };
// compteur.addEventListener("click", increment);

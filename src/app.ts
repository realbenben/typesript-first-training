const a: string = "hello world";
const b: number = 3.3;
const c: boolean = true;
const d: null = null;
const arr: any[] = ["blue", "red", "green", 4];
// Les objets
const user: { firstname: string; [key: string]: string } = {
  firstname: "nessa",
  lastname: "devil",
};
const date: Date = new Date();
const cb: (e: MouseEvent) => void = (e: MouseEvent): number => {
  return 3 + 4;
};
function printId(id: number): void {
  console.log(id.toString());
}
// 2 manieres de definir le tyope d'element visé
const compteur = document.querySelector("#compteur") as HTMLButtonElement;
const test = <HTMLInputElement>document.querySelector("#test");
// le type union
function WorkFlow(id: number | string): void {
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

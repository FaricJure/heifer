import { moo } from "./moo.js";
import { say } from "cowsay";

let name = "there";
console.log(moo(name));
console.log(say({ text: moo(name) }));

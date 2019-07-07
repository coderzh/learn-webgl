import { sayHello } from "./greet";
import { lesson1 } from "./lessons/lesson1"
import { lesson2 } from "./lessons/lesson2"

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}

(() => {
  const canvas = document.querySelector("#glCanvas") as HTMLCanvasElement;
  const gl = canvas.getContext("webgl");
  if (gl == null) {
    alert("webgl is not supported!");
    return;
  }
  
  // const canvas2d = document.createElement("canvas2d") as HTMLCanvasElement;
  // const ctx = canvas2d.getContext("2d");
  // ctx.fillText("hello", 0, 0);

  lesson2(gl);
})();

showHello("greeting", "TypeScript!");
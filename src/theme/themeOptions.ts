import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const changeColor = (colorPath?: string | null, fontPath?: string | null) => {
  // remove previous link
  document.getElementById("custom-theme")?.remove();
  document.getElementById("custom-font")?.remove();

  // add new color link
  if (colorPath) {
    const link = document.createElement("link");
    link.setAttribute("href", colorPath);
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("id", "custom-theme");
    document.querySelector("head")?.appendChild(link);
  }

  // add new custom font
  if (fontPath) {
    document.body.className = "";
    const link = document.createElement("link");
    link.setAttribute("href", fontPath);
    link.setAttribute("rel", "preload");
    link.setAttribute("as", "style");
    link.setAttribute("onload", "this.rel='stylesheet'");
    link.setAttribute("id", "custom-font");
    document.querySelector("head")?.appendChild(link);
  } else {
    document.body.className = manrope.className;
  }
};

const changeTheme = (pathname: string) => {
  switch (pathname) {
/*     case "/":
      changeColor("/css/colors/grape.css", "/css/fonts/space.css");
      break;

    case "/demo-1":
      changeColor("/css/colors/yellow.css", "/css/fonts/thicccboi.css");
      break;
 */
 

    default:
      changeColor();
      return;
  }
};

export default changeTheme;

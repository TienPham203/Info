import header from "../../companent/header";
import info from "../../companent/info";
import about from "../../companent/about";

import project from "../../companent/project"
import footer from "../../companent/footer"

const home = () => {
  return `
  <div class="conteiner">
    ${header()}
    ${info()}
    ${about()}
    <div class="" style="transform: translate(0%, 300px)"> ${project()}</div> 
 
  ${footer()}
  </div>
  `
}

export default home
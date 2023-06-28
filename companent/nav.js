import { list } from "../db.json"


const nav = () => {
  return `
<div class="container">

<header>
<div class="header">
   <div class="menu_left">
   <h2>Dev <span>Pham Xuan Tien</span></h2>
   </div>
   <div class="menu-right">
    <ul>
    ${list.map(({ path, name }) => `
    <li><a href="${path}">${name}</a></li>
    `).join("")}
        

    </ul>
</div>
</div>
</header>

</div>
  `
}

export default nav
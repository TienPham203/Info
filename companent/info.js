// import header from "./nav";
// import { useEffect, useState } from "../lib/lib";


// const infome = () => {
//     const [info, setInfo] = useState([]);
//     useEffect(() => {
//         fetch("http://localhost/3000/info")
//             .then((response) => response.json())
//             .then((info) => setInfo(info))
//     })

//     return `
//     ${header()}


//         <div class="container mt4">
//     <div id="home" class="avt">


//     <img src="${info.img}" alt="">
//     <div>
//         <div class="content1">
//             <h1>Phạm Xuân Tiến</h1>
//             <h3>Front_End Developer</h3>
//             <p><span><i class="fa-sharp fa-solid fa-school"></i></span> Cao Đẳng FPT Polytechnic</p>
//         </div>
//         <div class="conect1">
//             <nav>
//                 <a href="https://www.facebook.com/tien.phamxuan.3114"><i class="fa-brands fa-facebook"></i></a>
//                 <a href="https://www.tiktok.com/@tien2003bg"><i class="fa-brands fa-tiktok"></i></a>
//                 <a href="https://www.instagram.com/tien.phamxuan.3114/"><i
//                         class="fa-brands fa-instagram"></i></a>
//                 <a href="#"><i class="fa-brands fa-github"></i></a>
//             </nav>
//         </div>
//     </div>

// </div>
// </div>`



// }

// export default infome

import { useEffect, useState } from "../lib/lib";


const info = () => {
    const [data, setData] = useState([]); // [data,data2,data3]

    useEffect(() => {
        fetch("http://localhost:3000/info")
            .then((response) => response.json())
            .then((data) => setData(data));


    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {

            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const newData = data.filter((info) => info.id != id);


                fetch(`http://localhost:3000/info/${id}`, {
                    method: "DELETE",
                })
                    .then(() => setData(newData))
            });
        }
    });

    return /*html*/ `
     <div class="container mt4">
         
        <div id="home" class="avt">
    
      


       ${data.map((data, index) => {
        return `  <img src="${data.img}" alt="">
        <div>
            <div class="content1">
            <h2>Hi,I'm</h2>
                <h1>${data.name}</h1>
                <h3> A <p>Font end-deverloper</p> from <p>VIETNAM</p></h3>
                <p style="font-weight:bold;">I'm programmer in vietnam and i very passionate,dedicated to my work</p>
            </div>
            <div class="conect1">
            <a href="https://www.facebook.com/tien.phamxuan.3114"><button class="connect-me">Connect me</button></i></a>
                <nav> 
               
                    <a href="https://www.facebook.com/tien.phamxuan.3114"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.tiktok.com/@tien2003bg"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="https://www.instagram.com/tien.phamxuan.3114/"><i
                            class="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/TienPham203"><i class="fa-brands fa-github"></i></a>
                </nav>
            </div>
        </div>
    
    </div>
    </div>`
    }).join("")}
 `;
};

export default info;
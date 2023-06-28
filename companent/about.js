
// const about = () => {
//   return `

//   <div id="about" class="about">
//             <h1>About Me</h1>
//             <div class="aboutme">
//                 <div class="left">
//                     <img src="#" alt="">
//                 </div>

//                 <div class="right">
//                     <h1>What about me ?</h1>
//                     <p>Hello,i'm a <span>Front end deverloper</span>.I am currently a 5th semester studen of FPT
//                         Polytechnic. I'm
//                         very passionate and dedicated to my field and study.During my time at school,i have acquired
//                         skills and background knowledge in programming lenguage & framework
//                         <span>[Html,css,tailwindcss,javascript,ECMA script]</span>.I'm a responsible persion at work and
//                         love new things.Thanks for reading.
//                     </p>
//                     <button>Connect me </button>
//                 </div>

//             </div>
//         </div>
//   `
// }

// export default about

import { useEffect, useState } from "../lib/lib";


const aboutme = () => {
  const [data, setData] = useState([]); // [data,data2,data3]

  useEffect(() => {
    fetch("http://localhost:3000/about")
      .then((response) => response.json())
      .then((data) => setData(data));


  }, []);

  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {

      const id = btn.dataset.id;
      btn.addEventListener("click", function () {
        const newData = data.filter((about) => about.id != id);


        fetch(`http://localhost:3000/about/${id}`, {
          method: "DELETE",
        })
          .then(() => setData(newData))
      });
    }
  });

  return /*html*/ `
 
    
   
                        ${data
      .map((about, index) => {
        return `
                <div id="about" class="about">
                            <h1>About Me</h1>
                            <div class="aboutme">
                                <div class="left">
                                    <img src="${about.img}" alt="">
                                </div>
                
                                <div class="right">
                                    <h1>What about me ?</h1>
                                    <p>Hello,i'm a <span>Front end deverloper</span>.I am currently a 5th semester studen of FPT
                                        Polytechnic. I'm
                                        very passionate and dedicated to my field and study.During my time at school,i have acquired
                                        skills and background knowledge in programming lenguage & framework
                                        <span>[Html,css,tailwindcss,javascript,ECMA script]</span>.I'm a responsible persion at work and
                                        love new things.Thanks for reading.
                                    </p>
                                    <button> <a href="./aboutmee">See more</a> </button>
                                </div>
                
                            </div>
                        </div>
                            `
      })
      .join("")}
                        
                  `;
};

export default aboutme;
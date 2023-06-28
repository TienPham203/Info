


import { useEffect, useState } from "../../lib/lib";

import header from "../../companent/header"
const projects = () => {
    const [data, setData] = useState([]); // [data,data2,data3]

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setData(data));


    }, []);



    return /*html*/ `
  ${header()}
    
   
                
                    
                <div id="projects" style=" transform: translate(0%, 20%);"  class="projects">
                <h3>Projects</h3>
                
                <div class="project">
                ${data
            .map((project, index) => {
                return `
                    <div class="project1">
                        <div class="img-pro">
                            <img src="${project.Img}" alt="">
                        </div>
                        <div class="content-pro">
                            <div class="title-pro">
                                <h2><a href="#">${project.name}</a></h2>
                            </div>
                            <div class="langguage">
                                <button>${project.Skills}</button>
                            </div>
                            <div class="link">
                                <button><a href="${project.link}">Tham khảo thêm tại đây</a></button>
                            </div>
                        </div>
                    </div>`


            })
            .join("")}
                
                
                
                </div>
                </div> 
                 
           
                        
      `
};

export default projects;
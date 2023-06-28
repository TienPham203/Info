
import { useEffect, useState } from "../lib/lib";


const projects = () => {
    const [data, setData] = useState([]); // [data,data2,data3]

    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then((response) => response.json())
            .then((data) => setData(data));


    }, []);



    return /*html*/ `
  
    
   
                
                    
                <div id="projects"  class="projects">
                <h1>Projects</h1>
                
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
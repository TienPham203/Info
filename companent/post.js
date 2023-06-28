import { useEffect, useState } from "../lib/lib";
import header from "../companent/header";

const posts = () => {
    const [data, setData] = useState([]); // [data,data2,data3]

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((response) => response.json())
            .then((data) => setData(data));


    }, []);



    return /*html*/ `
 
    
    ${header()}
        
                <div id="about" style="transform: translate(0%, 10%);" class="about">
                            <h1>Post</h1>
                            <div class="post">
                            ${data.map((posts, index) => {

        return `

        

                            <div class="aboutme posts">
                                <div class="left">
                                    <img src="${posts.img}" alt="">
                                </div>
                
                                <div class="right">
                                    <h1>${posts.title}</h1>
                                    <p>${posts.content}</p>
                                    <p>Tác Giả:${posts.author}</p>
                                      
                                   
                                    
                                </div>
                              
                            </div>
                            </div>

                        </div>
                            `
    })
            .join("")}
                        
                  `;
};

export default posts;
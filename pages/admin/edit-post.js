import { router, useEffect, useState } from "../../lib/lib";
import headeradmin from "../../companent/header-admin"


const editpost = ({ id }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, []);




    useEffect(() => {
        const form = document.getElementById("form-add");
        const title = document.getElementById("title");
        const content = document.getElementById("content");
        const Category = document.getElementById("Category");
        const except = document.getElementById("except");
        const CreateAt = document.getElementById("CreateAt");
        const img = document.getElementById("img");
        const author = document.getElementById("author");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = {
                title: title.value,
                content: content.value,
                Category: Category.value,
                except: except.value,
                CreateAt: CreateAt.value,
                img: img.value,
                author: author.value,



            }
            fetch(`http://localhost:3000/posts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)


            })
                .then((response) => response.json())

                .then(() => router.navigate("/postadmin"))
            alert("Sửa thành công !")

        })
    })

    return `
    ${headeradmin()}
    <div class="container mt4">
    <h1>Sửa bài viết</h1>
    <form action="" id="form-add">
        <div class="form-group mb-3">
            <label for="" class="form-label">Tiêu đề</label>
            <input type="text" value="${data.title}" class="form-control" id="title"/>
  
            <label for="" class="form-label">Nội dung</label>
            <input type="text" value="${data.content}" class="form-control" id="content"/>
  
           
  
            <label for="" class="form-label">Create At</label>
            <input type="text" value="${data.CreateAt}" class="form-control" id="CreateAt"/>
  
  
            <label for="" class="form-label">Except</label>
            <input type="text" value="${data.except}" class="form-control" id="except"/>
  
  
            <label for="" class="form-label">Category</label>
            <input type="text"value="${data.Category}" class="form-control" id="Category"/>
  
            <label for="" class="form-label">Img</label>
            <input type="text" value="${data.img}" class="form-control" id="img"/>
            <label for="" class="form-label">Author</label>
           <input type="text" value="${data.author}" class="form-control" id="author"/>
                    
           
  
        </div>
        <div class="form-group ">
            <button class="btn bg-warning bg-gradient text-white rounded-5">Sửa bài viết</button>
        </div>
    </form>
  </div>
  `
}

export default editpost
import { router, useEffect } from "../../lib/lib";
import headeradmin from "../../companent/header-admin"


const addpost = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const title = document.getElementById("title");
        const content = document.getElementById("content");
        const img = document.getElementById("img");
        const CreateAt = document.getElementById("CreateAt");
        const Category = document.getElementById("Category");
        const except = document.getElementById("except");
        const author = document.getElementById("author");



        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = {
                title: title.value,
                content: content.value,

                CreateAt: CreateAt.value,
                Category: Category.value,
                except: except.value,
                img: img.value,
                author: author.value,



            }

            if (title.value === '') {
                title.style = "border:1px solid red"
            } else if (content.value === '') {
                content.value = "border:1px solid red"
            } else if (Category.value === '') {
                Category.style = "border:1px solid red; color:red"
            } else if (except.value === '') {
                except.style = "border:1px solid red; color:red"
            } else if (img.value === '') {
                img.style = "border:1px solid red; color:red"
            } else if (author.value === "") {
                author.style = "border:1px solid red"
            }
            else {
                fetch("http://localhost:3000/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)


                })
                alert("Thêm thành công")
                    .then((response) => response.json())

                    .then(() => router.navigate("/postadmin"))
            }





        })
    })

    return `
  ${headeradmin()}
  <div class="container mt4">
  <h1>Thêm bài viết</h1>
  <form action="" id="form-add">
      <div class="form-group mb-3">
          <label for="" class="form-label">Tiêu đề</label>
          <input type="text" class="form-control" id="title"/>

          <label for="" class="form-label">Nội dung</label>
          <input type="text" class="form-control" id="content"/>

          <label for="" class="form-label">Author</label>
          <input type="text" class="form-control" id="author"/>

          <label for="" class="form-label">Create At</label>
          <input type="text" class="form-control" id="CreateAt"/>


          <label for="" class="form-label">Except</label>
          <input type="text" class="form-control" id="except"/>


          <label for="" class="form-label">Category</label>
          <input type="text" class="form-control" id="Category"/>

          <label for="" class="form-label">Img</label>
          <input type="text" class="form-control" id="img"/>

          <label for="" class="form-label">Teams</label>
          <input type="text" class="form-control" id="Teams"/>

         

      </div>
      <div class="form-group ">
          <button class="btn bg-warning bg-gradient text-white rounded-5">Thêm bài viết</button>
      </div>
  </form>
</div>
  `
}

export default addpost
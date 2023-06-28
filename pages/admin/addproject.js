import { router, useEffect } from "../../lib/lib";
import headeradmin from "../../companent/header-admin"



const addproject = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const project = document.getElementById("project_name");
        const content = document.getElementById("content");
        const gallora = document.getElementById("gallora");
        const CreateAt = document.getElementById("CreateAt");
        const Category = document.getElementById("Category");
        const except = document.getElementById("except");
        const Img = document.getElementById("Img");
        const Teams = document.getElementById("Teams");
        const Skills = document.getElementById("Skills");
        const link = document.getElementById("link");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = {
                name: project.value,
                content: content.value,
                gallora: gallora.value,
                CreateAt: CreateAt.value,
                Category: Category.value,
                except: except.value,
                Img: Img.value,
                Teams: Teams.value,
                Skills: Skills.value,
                link: link.value,


            }

            if (project.value === '') {


                project.style = "border:1px solid red; color:red"
            } else if (content.value === '') {
                content.style = "border:1px solid red; color:red"
            } else if (gallora.value === '') {
                gallora.style = "border:1px solid red; color:red"
            } else if (CreateAt.value === '') {
                CreateAt.style = "border:1px solid red; color:red"
            } else if (Category.value === '') {
                Category.style = "border:1px solid red; color:red"
            } else if (except.value === '') {
                except.style = "border:1px solid red; color:red"
            } else if (Img.value === '') {
                Img.style = "border:1px solid red; color:red"
            } else if (Teams.value === '') {
                Teams.style = "border:1px solid red; color:red"
            }
            else if (Skills.value === '') {
                Skills.style = "border:1px solid red; color:red"
            } else if (link.value === '') {
                link.style = "border:1px solid red; color:red"
            }

            else {


                fetch("http://localhost:3000/projects", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)


                })
                alert("Thêm thành công")
                    .then((response) => response.json())

                    .then(() => router.navigate("/projects"))

            }


        })
    })



    return `
  ${headeradmin()}
  <div class="container mt4">
  <h1>Thêm dự án</h1>
  <form action="" id="form-add">
      <div class="form-group mb-3">
          <label for="" class="form-label">Tên dự án</label>
          <input type="text" class="form-control"   id="project_name"/>
         <div class="error"></div>
</div>
<div class="form-group mb-3">
          <label for="" class="form-label">Nội dung</label>
          <input type="text" class="form-control"  id="content"/>
</div>
<div class="form-group mb-3">
          <label for="" class="form-label">Gallora</label>
          <input type="text" class="form-control"  id="gallora"/>
</div>
<div class="form-group mb-3">
          <label for="" class="form-label">Create At</label>
          <input type="text" class="form-control"  id="CreateAt"/>
</div>
<div class="form-group mb-3">
          <label for="" class="form-label">Except</label>
          <input type="text" class="form-control"  id="except"/>
</div>
<div class="form-group mb-3">
          <label for="" class="form-label">Category</label>
          <input type="text" class="form-control"  id="Category"/>
</div>
<div class="form-group mb-3">
          <label for="" class="form-label">Img</label>
          <input type="text"  class="form-control"  id="Img"/>
</div>
<div class="form-group mb-3">
          <label for="" class="form-label">Teams</label>
          <input type="text" class="form-control"  id="Teams"/>
</div>
<div class="form-group mb-3">
          <label for="" class="form-label">Skills</label>
          <input type="text" class="form-control"  id="Skills"/>
</div>
<div class="form-group mb-3">
          <label for="" class="form-label">link</label>
          <input type="text" class="form-control"  id="link"/>   

      </div>
      <div class="form-group ">
          <button class="btn bg-warning bg-gradient text-white rounded-5">Thêm dự án</button>
      </div>
  </form>
</div>
  `
}

export default addproject
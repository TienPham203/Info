import { router, useEffect, useState } from "../../lib/lib";
import headeradmin from "../../companent/header-admin"


const editproject = ({ id }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, []);




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
            fetch(`http://localhost:3000/projects/${id} `, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)


            })

                .then((response) => response.json())

                .then(() => router.navigate("/projects"))
            alert("Update thành công !")

        })
    })

    return `
  ${headeradmin()}
  <div class="container">   
  <h1>Sửa dự án </h1>
  <form action="" id="form-add">
      <div class="form-group mb-3">
          <label for="" class="form-label">Tên dự án</label>
          <input type="text" value="${data?.name}" class="form-control" id="project_name"/>

          <label for="" class="form-label">Nội dung</label>
          <input type="text" value="${data.content}" class="form-control" id="content"/>

          <label for="" class="form-label">Gallora</label>
          <input type="text" value="${data.gallora}" class="form-control" id="gallora"/>

          <label for="" class="form-label">Create At</label>
          <input type="text" value="${data.CreateAt}" class="form-control" id="CreateAt"/>


          <label for="" class="form-label">Except</label>
          <input type="text" value="${data.except}" class="form-control" id="except"/>


          <label for="" class="form-label">Category</label>
          <input type="text" value="${data.Category}" class="form-control" id="Category"/>

          <label for="" class="form-label">Img</label>
          <input type="text" value="${data.Img}" class="form-control" id="Img"/>

          <label for="" class="form-label">Teams</label>
          <input type="text" value="${data.Teams}" class="form-control" id="Teams"/>

          <label for="" class="form-label">Skills</label>
          <input type="text" value="${data.Skills}" class="form-control" id="Skills"/>

          <label for="" class="form-label">link</label>
          <input type="text" value="${data.link}" class="form-control" id="link"/>
          

      </div>
      <div class="form-group ">
          <button class="btn bg-warning bg-gradient text-white rounded-5">Sửa dự án</button>
      </div>
  </form>
</div>
  `
}

export default editproject
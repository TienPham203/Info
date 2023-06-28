import { router, useEffect } from "../../lib/lib";
import headeradmin from "../../companent/header-admin"


const addabout = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const content = document.getElementById("content");

        const img = document.getElementById("img");

        const imgcontent = document.getElementById("img-content");


        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = {
                content: content.value,

                img: img.value,
                imgcontent: imgcontent.value,



            }
            fetch("http://localhost:3000/about", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)


            })

                .then((response) => response.json())

                .then(() => router.navigate("/about"))
            alert("Thêm thành công");

        })
    })

    return `
  ${headeradmin()}
  <div class="container mt4">
  <h1>Info</h1>
  <form action="" id="form-add">
      <div class="form-group mb-3">
          <label for="" class="form-label">Content</label>
          <input type="text" class="form-control" id="content"/>

          <label for="" class="form-label">Img</label>
          <input type="text" class="form-control" id="img"/>

          

          <label for="" class="form-label">Img</label>
          <input type="text" class="form-control" id="img-content"/>

         

      </div>
      <div class="form-group ">
          <button class="btn bg-warning bg-gradient text-white rounded-5">Thêm about</button>
      </div>
  </form>
</div>
  `
}

export default addabout;
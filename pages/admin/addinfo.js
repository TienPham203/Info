import { router, useEffect } from "../../lib/lib";
import headeradmin from "../../companent/header-admin"


const addinfo = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const name = document.getElementById("name");
        const img = document.getElementById("img");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = {
                name: name.value,

                img: img.value,




            }
            fetch("http://localhost:3000/info", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)


            })

                .then((response) => response.json())

                .then(() => router.navigate("/info"))
            alert("Thêm thành công");

        })
    })

    return `
  ${headeradmin()}
  <div class="container mt4">
  <h1>Info</h1>
  <form action="" id="form-add">
      <div class="form-group mb-3">
          <label for="" class="form-label">Tên</label>
          <input type="text" class="form-control" id="name"/>

          <label for="" class="form-label">Img</label>
          <input type="text" class="form-control" id="img"/>

         

         

      </div>
      <div class="form-group ">
          <button class="btn bg-warning bg-gradient text-white rounded-5">Thêm dự án</button>
      </div>
  </form>
</div>
  `
}

export default addinfo
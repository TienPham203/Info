
import { useEffect, useState } from "../../lib/lib";
import headeradmin from "../../companent/header-admin";

const about = () => {
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

                if (confirm("có chắc muốn xóa ?") == true) {
                    fetch(`http://localhost:3000/about/${id}`, {
                        method: "DELETE",
                    })
                        .then(() => setData(newData))
                } else {
                    alert("Đã hủy xóa !")
                }
            });
        }
    });

    return /*html*/ `
    ${headeradmin()}
    
    <div class="container mt4 "> 
    <div class="mt4">
                <h1>Quản lí about</h1>
                <table border=1  class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Content </th>
                            <th>Img</th>

                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        ${data
            .map((about, index) => {
                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${about.name}</td>

                                    <td><img style="width:100px;height:100px;object-fit:cover;" src="${about.img}"></img></td>
                                    <td>${about.content}</td>
                                    <td><img style="width:100px;height:100px;object-fit:cover;" src="${about.imgcontent}"></img></td>
                                    <td width="150">
                                        <button data-id="${about.id
                    }" class="btn btn-danger btn-remove">
                                            Delete
                                        </button>
                                    <button class="btn  btn-primary"><a class=" text-white text-decoration-none" href="/admin/about/${about.id}/editabout">Edit</a></button>
                                    </td>
                                </tr>
                            `;
            })
            .join("")}
                        
                    </tbody>
                </table> </div> 
                <button class="mt4">  <a href="/addabout">Thêm</a></button>

              
    </div>`;
};

export default about;
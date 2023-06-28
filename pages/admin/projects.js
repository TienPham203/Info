
import { useEffect, useState } from "../../lib/lib";
import headeradmin from "../../companent/header-admin";

const projects = () => {
    const [data, setData] = useState([]); // [data,data2,data3]

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setData(data));


    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {

            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const newData = data.filter((projects) => projects.id != id);

                if (confirm("có chắc muốn xóa ?") == true) {
                    fetch(`http://localhost:3000/projects/${id}`, {
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
                <h1>Quản lý dự án</h1>
                <table border=1 class=" table-bordered ab">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên dự án</th>
                            <th>Nội dung</th>
                            <th>Gallora</th>
                            <th>Create At</th>
                            <th>Category</th>
                            <th>Except</th>
                            <th>Img</th>
                            <th>Teams</th>
                            <th>Skills</th>
                            <th>Link</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        ${data
            .map((project, index) => {
                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td>${project.content}</td>
                                    <td>${project.gallora}</td>
                                    <td>${project.CreateAt}</td>
                                    <td>${project.Category}</td>
                                    <td>${project.except}</td>
                                    <td><img style="width:100px;height:100px;object-fit:cover;" src="${project.Img}"></img></td>
                                    <td>${project.Teams}</td>
                                    <td>${project.Skills}</td>
                                    <td>${project.link}</td>

                                    <td width="150">
                                        <button data-id="${project.id
                    }" class="btn btn-danger btn-remove">
                                            Delete
                                        </button>
                                    <button class="btn  btn-primary"><a class=" text-white text-decoration-none" href="/admin/projects/${project.id}/editproject">Edit</a></button>
                                    </td>
                                </tr>
                            `
            })
            .join("")}
                        
                    </tbody>
                </table> </div> 
                <button class="mt4">  <a href="/addprojects">Thêm</a></button>

              
    </div>`;
};

export default projects;
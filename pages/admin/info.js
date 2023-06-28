
import { useEffect, useState } from "../../lib/lib";
import headeradmin from "../../companent/header-admin";

const info = () => {
    const [data, setData] = useState([]); // [data,data2,data3]

    useEffect(() => {
        fetch("http://localhost:3000/info")
            .then((response) => response.json())
            .then((data) => setData(data));


    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {

            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const newData = data.filter((info) => info.id != id);

                if (confirm("có chắc muốn xóa ?") == true) {
                    fetch(`http://localhost:3000/info/${id}`, {
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
                    <h1>Quản lí Info</h1>
                    <table border=1  class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tên </th>
                                <th>Img</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            ${data
            .map((info, index) => {
                return `
                                    <tr>
                                        <td>${index + 1}</td>
                                        <td>${info.name}</td>
                                        <td><img style="width:100px;height:100px;object-fit:cover;" src="${info.img}"></img></td>
                                        

                                        <td width="150">
                                            <button data-id="${info.id
                    }" class="btn btn-danger btn-remove">
                                                Delete
                                            </button>
                                        <button class="btn  btn-primary"><a class=" text-white text-decoration-none" href="/admin/info/${info.id}/editinfo">Edit</a></button>
                                        </td>
                                    </tr>
                                `;
            })
            .join("")}
                            
                        </tbody>
                    </table> </div> 
                    <button class="mt4">  <a href="/addinfo">Thêm</a></button>

                
        </div>`;
};

export default info;
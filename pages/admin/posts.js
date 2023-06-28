
import { useEffect, useState } from "../../lib/lib";
import headeradmin from "../../companent/header-admin";

const posts = () => {
    const [data, setData] = useState([]); // [data,data2,data3]

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((response) => response.json())
            .then((data) => setData(data));


    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {

            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const newData = data.filter((posts) => posts.id != id);


                if (confirm("có chắc muốn xóa ?") == true) {
                    fetch(`http://localhost:3000/posts/${id}`, {
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
                <h1>Quản lý bài viết</h1>
                <table border=1  class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tiêu đề</th>
                            <th>Nội dung</th>
                            <th>Img</th>
                            <th>Create At</th>
                            <th>Category</th>
                            <th>Except</th>
                            <th>Author</th>
                           
                            
                        </tr>
                    </thead>
                    <tbody>
                        ${data
            .map((post, index) => {
                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${post.title}</td>
                                    <td>${post.content}</td>
                                    <td><img style="width:100px;height:100px;object-fit:cover;" src="${post.img}"></img></td>
                                    <td>${post.CreateAt}</td>
                                    <td>${post.Category}</td>
                                    <td>${post.except}</td>
                                    <td>${post.author}</td>
                                    <td width="150">
                                        <button data-id="${post.id
                    }" class="btn btn-danger btn-remove">
                                            Delete
                                        </button>
                                    <button class="btn  btn-primary"><a class=" text-white text-decoration-none" href="/admin/posts/${post.id}/editpost">Edit</a></button>
                                    </td>
                                </tr>
                            `;
            })
            .join("")}
                        
                    </tbody>
                </table> </div> 
                <button class="mt4">  <a href="/addposts">Thêm</a></button>

              
    </div>`;
};

export default posts;
import "bootstrap/dist/css/bootstrap.min.css";
// import about from "./companent/about";
import header from "./companent/header";
import infome from "./companent/info";
import { render, router } from "./lib/lib";

import addabout from "./pages/admin/addabout";
import addinfo from "./pages/admin/addinfo";
import addpost from "./pages/admin/addpost";
import addproject from "./pages/admin/addproject";
import admin from "./pages/admin/admin";
import editproject from "./pages/admin/edit-project";
import info from "./pages/admin/info";
import posts from "./pages/admin/posts";
import projects from "./pages/admin/projects";
// import aboutme from "./pages/page/about";
import footer from "./companent/footer";
import Post from "./companent/post";
import about from "./pages/admin/about";
import aboutme from "./pages/page/about";
import home from "./pages/page/home";
import project from "./pages/page/project";
import editpost from "./pages/admin/edit-post";


const app = document.querySelector("#app");


router.on("/addabout", () => render(addabout, app));
router.on("/about", () => render(about, app))
router.on("/", () => render(header, app));
router.on("/admin", () => render(admin, app))
router.on("/addprojects", () => render(addproject, app))
router.on("/projects", () => render(projects, app))
router.on("/addpost", () => render(addpost, app))
router.on("/admin/posts/:id/editpost", ({ data }) => render(() => editpost(data), app))
router.on("/admin/projects/:id/editproject", ({ data }) => render(() => editproject(data), app))
router.on("/info", () => render(info, app));
router.on("/infome", render(infome, app))
router.on("/", () => render(home, app));
router.on("/aboutmee", () => render(aboutme, app));
router.on("/addinfo", () => render(addinfo, app));
router.on("/addposts", () => render(addpost, app));
router.on("/postadmin", () => render(posts, app))
router.on("/baiviet", () => render(Post, app));
router.on("/duan", () => render(project, app))
router.on("/footer", () => render(footer, app))
router.resolve();
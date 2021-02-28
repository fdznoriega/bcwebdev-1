
import { renderProjectPage } from "./components/Projects.js";

export default function ProjectPage(project)
{
    document.querySelector('.container').innerHTML = `
        ${renderProjectPage(project)}
    `
}
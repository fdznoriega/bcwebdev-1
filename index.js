
import MainPage from './js/MainPage.js';
import ProjectPage from './js/ProjectPage.js';
fetch('assets/data.json')
    .then(resp=>resp.json())
    .then(data=>{
        // console.log('loaded:',d);
        // determine what page to render
        let params = new URLSearchParams(window.location.search);
        if (params.get('project') == null)
        {
            MainPage(data);
        }
        else
        {
            let project = data.projects.filter(d => d.id === params.get('project'))[0];
            ProjectPage(project);
        }

    });
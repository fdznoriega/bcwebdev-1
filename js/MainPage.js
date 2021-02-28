import Navbar from './components/Navbar.js';
import About from './components/About.js';
import News, {handleNewsFilter} from './components/News.js';
import Projects, {handleProjectFilter} from './components/Projects.js';

export default function MainPage(data){

    document.querySelector('.container').innerHTML = `
        ${Navbar('main', Object.keys(data))}
        ${About(data.about)}
        ${News(data.news)}
        ${Projects(data.projects)}

    `
    
    handleNewsFilter(data);
    handleProjectFilter(data);
}
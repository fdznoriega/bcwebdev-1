
fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {
        // render html in functions!
        renderMainPage(data);
    });

// renders main page
function renderMainPage(data)
{
    // select containers and populate them

    // grab nav container
    document.querySelector('#navContainer').innerHTML = `
        ${renderNavbar('main', Object.keys(data))}
    `;

    // grab about container
    document.querySelector('#aboutContainer').innerHTML = `
        ${renderAbout(data.about)}
    `;

    // grab news container
    document.querySelector('#newsContainer').innerHTML = `
        ${renderNews(data.news)}
    `;

    // grab projects container
    document.querySelector('#projectsContainer').innerHTML = `
        ${renderProjects(data.projects)}
    `;
}

// renders nav bar (data -> html)
function renderNavbar(page, keys)
{
    return keys.map(d => `
      <div><a href="#${d}">${d}</a></div>
    `).join('');
}

// renders about page using data from json
function renderAbout(about)
{
    return (
        `
        <div class="row">
            
            <div class="col-6">
                <img id="mySnapshot" src=${about.photo}>
            </div>
            
            <div class="col-6">
                <span>
                    <b>${about.name}</b> <br/>
                    ${about.email} <br/>
                    ${about.collegeInfo} <br/>
                    ${about.major} <br/>
                    ${about.minor} <br/>
                    <!-- icons for resume, github, and linkedin -->
                    <a href=${about.resume} target="_blank">
                        <i class="fas fa-user-tie"></i>
                        Resume | 
                    </a>
                    <!-- github -->
                    <a href=${about.github} target="_blank">
                        <i class="fab fa-github"></i> |
                    </a>
                    <!-- linked in -->
                    <a href=${about.linkedin} target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </span>
            </div>
        
        </div>
        `
    ); 
}

// renders the news
function renderNews(news)
{
  return news.map(d => `
    <div class="row">
      <!-- news title -->
      <div class="col-6">
        <span>${d.title}</span>
      </div>
      <!-- news date -->
      <div class="col-6">
        <span><em>${d.date}</em></span>
      </div>
    </div>
  `).join('');

}

function renderProjects(projects)
{
  return projects.map(d => `
    <!-- create a row and fully sized column -->
    <div class="row">
      <div class="col-12">
        <!-- talk about project -->
        <p class="projectParagraph">
          <a href="projects/vineyvibes.html"><b>${d.title} - </b></a>
          <span class="csharp">${d.tag}</span> <br/>
          ${d.description}
        </p>
      </div>
    </div>
  `).join('');
}
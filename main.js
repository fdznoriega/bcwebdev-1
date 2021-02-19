
fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {

        // have we updated the URL? 
        let queryString = window.location.search;

        if(queryString)
        {
          console.log(queryString);
        }
        else
        {
          renderMainPage(data);
        }

    });

// renders main page
function renderMainPage(data)
{
    // select containers and populate them
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('main', Object.keys(data))}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
    `;
}

// renders nav bar (data -> html)
function renderNavbar(page, keys)
{
  // render nav items
  function renderNavItems(k) 
  {
    return (k.map(d => `
        <div><a href="#${d}">${d}</a></div>
      `).join('')
    );
  }

  let renderedNav =
    `<nav class="animate__animated animate__backInDown">` + 
      `${renderNavItems(keys)}` + 
    `</nav>`;

  return renderedNav;
}

// renders about page using data from json
function renderAbout(about)
{
  return (
      `
      <section class="animate__animated animate__fadeIn animate__delay-2s" id="about">
        
        <h1 id="welcome"><em>about</em></h1>
        
        <!-- container for about data -->
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
      </section>
      `
  ); 
}

// renders the news
function renderNews(news)
{
  // function that iterates through news items
  // and generates html
  function renderNewsItems(n)
  {
    return n.map(d => `
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

  // return renderNewsItems function wrapped in
  // corresponding html
  return (`
    <section class="animate__animated animate__fadeIn animate__delay-3s" id="news">

      <h1 class="sectionHeader"><em>news</em></h1>

      <!-- one row per entry of news that contains two columns -->
      ${renderNewsItems(news)}

    </section>
  `);
}

function renderProjects(projects)
{
  // internal function to render tags in ONE project
  function renderTags(tags)
  {
    return tags.map(d => `
    <span class=${d}>${d}</span>
    `).join('');
  }

  // create html for all projects
  function renderProjectItems(p)
  {
    return p.map(d => `
      <!-- create a row and fully sized column -->
      <div class="row">
        <div class="col-12">
          <!-- talk about project -->
          <p class="projectParagraph">
            <a href="?project=${d.id}"><b>${d.title} - </b></a>
            ${renderTags(d.tags)}<br/>
            ${d.description}
          </p>
        </div>
      </div>
  `).join('');
  }

  // return project items wrapped in organizational html
  return(`
  <section class="animate__animated animate__fadeIn animate__delay-4s" id="projects">
    <h1 class="sectionHeader"><em>projects</em></h1>
    ${renderProjectItems(projects)}
  </section>
  `);

  
}
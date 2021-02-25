
fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {

        // have we updated the URL? 
        let queryString = window.location.search;

        if(queryString)
        {
          // filter to grab project we need
          let urlParams = new URLSearchParams(queryString);

          let project = data.projects.filter(d => d.id === urlParams.get('project'))[0];

          renderProjectPage(project);
        }
        else
        {
          renderMainPage(data);
          addInteractions();
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
    `<nav class="animate__animated animate__backInDown animate__delay-4s">` + 
      `${renderNavItems(keys)}` + 
    `</nav>`;

  return renderedNav;
}

// renders about page using data from json
function renderAbout(about)
{
  return (`
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
  `); 
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

  function renderSearchBar()
  {
    return(`
      <div class="search">
        <div class="row">
          <div class="col-12">
            <input type="search" name="news" placeholder="search"></input>
          </div>
        </div>
      </div>
    `)
  }

  // return renderNewsItems function wrapped in
  // corresponding html
  return (`
    <section class="animate__animated animate__fadeIn animate__delay-3s" id="news">

      <h1 class="sectionHeader"><em>news</em></h1>

      ${renderSearchBar()}

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
            ${d.teaser}
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

// 
function renderProjectPage(project)
{
  // generates the HTML for spark
  function renderSparkPage(p)
  {
    return (`
      
      <h1 class="sectionHeader">Spark - Discord Bot</h1>
      
      <div class="row">
        <!-- image column -->
        <div class="col-6">
          <img id="spark1" src="${p.images[0]}">
          
        </div>
        <!-- text column -->
        <div class="col-6">
          <p>
            ${p.description}
          </p>    
        </div>
      </div>

      <!-- second row for more images and text -->
      <div class="row">
        <!-- image column -->
        <div class="col-6">
          <img src="${p.images[1]}">
        </div>
        <!-- text column -->
        <div class="col-6">
          <p>
            ${p.description2}
          </p>
        </div>
      </div>

      <!-- links go down here -->
      <div class="row">
      
        <div class="col-12">
          <a href="https://github.com/fdznoriega/Spark-Discord-Bot" target="_blank">Source Code</a>
        </div>
      
      </div>

      <div class="row">
        
        <div class="col-12">
          <a href="index.html">Back</a>
        </div>
        
      </div>
        
      
      
    `);
  }

  // generates HTML for viney vibes!
  function renderVineyVibesPage(p)
  {
    return (`
      <h1 class="sectionHeader">Viney Vibes - Mobile Game</h1>
      <div class="row">
        <div class="col-12">
          <img src=${p.images[0]}>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <p>${p.description}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <!-- Apple Store link -->
          <a href=${p.appleStore} target="_blank">
            <i class="fab fa-app-store"></i>
            App Store
          </a>
        </div>
        <div class="col-6">
        <!-- Play Store link -->
          <a href=${p.googleStore} target="_blank">
            <i class="fab fa-google-play"></i>
            Google Play Store
          </a>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
        <!-- FB link -->
          <a href=${p.facebook} target="_blank">
            <i class="fab fa-facebook-square"></i>
            Follow us on Facebook!
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <!-- Back -->
          <a href="index.html">Back</a>
        </div>
      </div>
    `);
  }

  // generates html for xmas
  function renderXmasPage(p)
  {
    return(`
      <h1 class="sectionHeader">Christmas Visualization</h1>
      
      <div class="row">
      
        <div class="col-12">
          <img src=${p.images[0]}>
        </div>
      
      </div>
      
      <div class="row">
      
        <div class="col-12">
          <p>${p.description}</p>
        </div>
      
      </div>

      <div class="row">
      
        <div class="col-12">
          <a href=${p.link}>Try it out here!</a>
        </div>
      
      </div>

      <div class="row">
        <div class="col-12">
          <a href="index.html">Back</a>
        </div>
      </div>

    `);
  }

  if(project.id === "vineyvibes")
  {
    document.querySelector('.container').innerHTML = `
        ${renderVineyVibesPage(project)}
    `;
  }
  else if(project.id === "spark")
  {
    document.querySelector('.container').innerHTML = `
        ${renderSparkPage(project)}
    `;
  }
  else if(project.id === "xmas")
  {
    document.querySelector('.container').innerHTML = `
        ${renderXmasPage(project)}
    `;
  }
  else
  {
    return "Error 404...Whoops";
  }
  // html for spark ≠ xmas ≠ viney vibes...match?
}

// render event listeners after page renders!
function addInteractions()
{
  // define internally
  function addSearchInteraction()
  {
    // add news search functionality
    document
      .querySelector('input[name=news]')
      .addEventListener('input', (event)=> {
        console.log(event.target.value);
      });
  }


  // call interaction functions
  addSearchInteraction();
}
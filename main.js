
fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // render html in functions!
        renderMainPage(data);


    });

// renders main page
function renderMainPage(data)
{
    // select containers and populate them

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
function renderNavbar(page, data)
{
    console.log(page, data);

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
    return (
        `
        <div class="row">
          <!-- indie game released -->
          <div class="col-6">
            <span>${news[0].title}</span>
          </div>
          <!-- date -->
          <div class="col-6">
            <span><em>${news[0].date}</em></span>
          </div>
        </div>

        <div class="row">
          <!-- started remote study -->
          <div class="col-6">
            <span>${news[1].title}</span>
          </div>
          <!-- date -->
          <div class="col-6">
            <span><em>${news[1].date}</em></span>
          </div>
        </div>
        
        <div class="row">
          <!-- hosted a discord workshop -->
          <div class="col-6">
            <span>${news[2].title}</span>
          </div>
          <!-- date of news -->
          <div class="col-6">
            <span><em>${news[2].date}</em></span>
          </div>
        </div>
        `
    
    );
}

function renderProjects(projects)
{
    return (
        `
        <!-- create a row and fully sized column -->
        <div class="row">
          <div class="col-12">
            <!-- talk about viney vibes in one p element -->
            <p class="projectParagraph">
              <a href="projects/vineyvibes.html"><b>${projects[0].title}</b></a>
              <span class="csharp">${projects[0].tag}</span> <br/>
              ${projects[0].description}
            </p>
          </div>
        </div>

        <!-- create a new row and fully sized column -->
        <div class="row">
          <div class="col-12">
            <!-- talk about spark in one p element -->
            <p class="projectParagraph">
              <a href="projects/spark.html"><b>${projects[1].title}</b></a>
              <!-- tags of items -->
              <span class="javascript">${projects[1].tag}</span> <br/>
              ${projects[1].description}
            </p> 
          </div>
        </div>

        <!-- make a row and a fully sized column for the xmas vis -->
        <div class="row">
          <div class="col-12">
            <!-- talk about xmas vis in one p element -->
            <p class="projectParagraph">
              <a href="projects/xmas.html"><b>${projects[2].title}</b></a>
              <span class="javascript">${projects[2].tag}</span> <br/>
              ${projects[2].description}
            </p>
          </div>
        </div>
      
        `
    );
}
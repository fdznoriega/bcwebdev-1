
export default function Projects(projects)
{
  // return project items wrapped in organizational html
  return(`
    <section class="animate__animated animate__fadeIn animate__delay-4s" id="projects">
      <h1 class="sectionHeader"><em>projects</em></h1>
      <div>
        <!-- filter options here -->
        <div class="filter row">
          <label class="col-6">
            <input type="radio" name="filter" value="all" checked> <span>all</span>
          </label>
          
          <label class="col-6">
            <input type="radio" name="filter" value="c#"> <span>c#</span>
          </label>
          
          <label class="col-6">
            <input type="radio" name="filter" value="javascript"> <span>javascript</span>
          </label>
        </div>
        <div class="project-list">${renderProjectItems(projects)}</div>
      </div>
    </section>
  `);

}

// create html for all projects
// needs to be globally available so it can be rendered again...
export function renderProjectItems(p)
{
  // internal function to render tags in ONE project
  function renderTags(tags)
  {
    return tags.map(d => `
    <span class=${d}>${d}</span>
    `).join('');
  }

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

// 
export function renderProjectPage(project)
{
  // generates the HTML for spark
  function renderSparkPage(p)
  {
    console.log('rendering spark page?');
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
    return renderVineyVibesPage(project);
  }
  else if(project.id === "spark")
  {
    return renderSparkPage(project);
  }
  else if(project.id === "xmas")
  {
    return renderXmasPage(project);
  }
  else
  {
    return "Error 404...Whoops";
  }
  // html for spark ≠ xmas ≠ viney vibes...match?
}

export function handleProjectFilter(d)
  {
    // fetch buttons
    let buttons = document.querySelectorAll('.filter input[name="filter"]');

    // add event handlers to all the buttons
    buttons.forEach(b => b.addEventListener('change', (event) => {

      console.log(event.target.value);
      
      // if the value is null or all, load default projects
      if(event.target.value === "all" || !event.target.value) 
      {
        document.querySelector(".project-list").innerHTML = renderProjectItems(d.projects);
      }
      else
      {
        // define new projects list
        let projects = d.projects.filter(p => p.tags.includes(event.target.value) );

        // load filtered projects
        document.querySelector(".project-list").innerHTML = renderProjectItems(projects);
      }
      
    }));

}
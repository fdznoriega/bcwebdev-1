
// renders about page using data from json
export default function About(about)
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
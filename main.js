
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
    document.querySelector('.container').innerHTML = `
        
        ${renderAbout(data)}
        
    `;
}

// renders nav bar (data -> html)
function renderNavbar(page, data)
{
    console.log(page, data);

}

// renders about page using data from json
function renderAbout(data)
{
    return (
        `
        <div class="row">
            
            <div class="col-6">
                <img id="mySnapshot" src=${data.about.photo}>
            </div>
            
            <div class="col-6">
                <span>
                    <b>${data.about.name}</b> <br/>
                    ${data.about.email} <br/>
                    ${data.about.collegeInfo} <br/>
                    ${data.about.major} <br/>
                    ${data.about.minor} <br/>
                    <!-- icons for resume, github, and linkedin -->
                    <a href=${data.about.resume} target="_blank">
                        <i class="fas fa-user-tie"></i>
                        Resume | 
                    </a>
                    <!-- github -->
                    <a href=${data.about.github} target="_blank">
                        <i class="fab fa-github"></i> |
                    </a>
                    <!-- linked in -->
                    <a href=${data.about.linkedin} target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </span>
            </div>
        
        </div>
        `
    ); 
}
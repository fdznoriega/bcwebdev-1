
fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // render html in functions!


    });

// renders main page
function renderMainPage(data)
{
    // select containers and populate them
    document.querySelector('.container').innerHTML = `
        
        ${renderAbout(data.about)}
        
    `;
}

// renders nav bar (data -> html)
function renderNavbar(page, data)
{
    console.log(page, data);

    return <div>This is the nav bar</div>
}

// renders about page using data from json
function renderAbout(data)
{
    return (
        `<span>
            <b>${data.about.name}</b> <br/>
            ${data.about.email}
            ${data.about.collegeInfo}
            ${data.about.major}
            ${data.about.minor}
            <!-- icons for resume, github, and linkedin -->
            <a href=${data.about.photo} target="_blank">
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
        `
    ); 
}

// about html
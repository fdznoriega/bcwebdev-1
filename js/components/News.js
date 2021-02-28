
// renders the news
export default function News(news)
{
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
      <div class="news-list">
        ${renderNewsItems(news)}
      </div>
      

    </section>
  `);
}

// function that iterates through news items
// and generates html
export function renderNewsItems(n)
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
  `)
  .slice(0, 5)
  .join('');
}

// define internally
export function handleNewsFilter(d)
{
  // add news search functionality
  document
    .querySelector('input[name=news]')
    .addEventListener('input', (event)=> {
      
      // fetch current news and input
      let news = d.news;
      let stringInput = event.target.value;

      news = news.filter(n => 
        n.title.toLowerCase().includes(stringInput.toLowerCase())
      );
      
      // render updated news
      document.querySelector('.news-list').innerHTML = renderNewsItems(news);

    });
}

// renders nav bar (data -> html)
export default function Navbar(page, keys)
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
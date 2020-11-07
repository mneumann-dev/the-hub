import UiNavbar from './components/ui-navbar'
import data from './projects'

const projects = data.sort((a, b) => {
  const val1 = a.name.toLowerCase()
  const val2 = b.name.toLowerCase()
  if (val1 < val2) return -1
  if (val1 > val2) return 1
  return 0
})

projects.forEach(project => {
  const card = document.createElement('div')
  const tags = project.tags
  card.classList.add(...['project', 'col-6', 'p-md-1'])
  card.innerHTML = `
    <div class="d-flex flex-column align-items-center justify-content-center text-center p-2 h-100">
      <img class="img-fluid" src="${project.image}" alt="Project" width="336" height="197">
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      <div class="links d-flex align-items-center justify-content-center w-100">
        <a class="d-flex align-items-center" href="${project.href.git}" target="_blank" rel="noopener noreferrer">Git
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z"/></svg>
        </a>
        <a class="d-flex align-items-center" href="${project.href.site}" target="_blank" rel="noopener noreferrer">Site
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z"/></svg>
        </a>
      </div>
      <div class="tags d-flex align-items-center justify-content-center w-100"></div>
    </div>
  `
  tags.forEach(tag => {
    const span = document.createElement('span')
    span.textContent = tag.toString()
    card.querySelector('.tags').append(span)
  })
  document.querySelector('.projects').append(card)
})

document.querySelector('body').prepend(new UiNavbar())
document.querySelector('main').style.paddingTop = `${document.querySelector('ui-navbar').getAttribute('height')}px`

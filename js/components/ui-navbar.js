const tagName = 'ui-navbar'
const template = document.createElement('template')
template.innerHTML = `
<style>
.navbar {
  background-color: var(--jet);
  position: fixed;
  top: 0;
  transition: box-shadow 0.25s ease-in-out;
  width: 100%;
  z-index: 2;
}
header {
  height: 44px;
  justify-content: space-between !important;
  padding: 0 0.5rem;
}
button { background-color: transparent; border: none; border-radius: 4px; cursor: pointer; margin: 0; padding: 0; outline: none; }
svg { filter: drop-shadow(var(--btn-drop-shadow)); fill: #FFFFFF; height: auto; width: 18pt; }

.clear-btn {
  display: none;
  position: absolute;
  top: 4px;
  right: 2.8rem;
  z-index: 2;
}
.clear-btn svg { fill: var(--jet) !important; }
input {
  background-color: #FFFFFF;
  color: #000000;
  font-size: 1em;
  height: calc(0.5em + 0.75rem + 2px);
  max-width: 0;
  position: absolute;
  padding: 0.375rem 1.2rem;
  border: none;
  border-radius: 4px;
  pointer-events: none;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  top: -4px;
  left: 0.5rem;
  width: 65%;
}
input:focus {
  outline: none;
}
.brand {
  color: #FFFFFF;
  font-family: 'Avenir Next DemiBold', Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  text-decoration: none;
  text-shadow: var(--btn-drop-shadow);
}
.brand span { display: none;  }
.dash { margin: 0 auto; position: relative; }
.search--active {
  max-width: 175px !important;
  pointer-events: auto;
  opacity: 1;
}
.links { transition: all 1s ease-in-out; }
.links a { display: flex; padding: 0 0.5rem; }
.flex-center-center { display: flex; align-items: center; justify-content: center; }

@media only screen and (min-width: 36rem) {
  header { padding: 0 1rem; }
  .dash { display: flex; }
}
@media only screen and (min-width: 48rem) {
  .brand { position: absolute; }
  .brand span { display: inline; padding-top: 0.1rem; }
}
</style>
<div class="navbar">

  <header class="flex-center-center">
<!--    <a class="brand flex-center-center" href="/" aria-label="Home">MN<span>EUMANN</span></a>-->
    <a class="brand flex-center-center" href="/" aria-label="Home">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512"><defs><path id="qGjIXa" d="M41.0221632,-1.65734449e-15 L470.977837,1.65734449e-15 C485.242137,-9.62964878e-16 490.414716,1.48520978 495.629531,4.27412326 C500.844346,7.06303674 504.936963,11.1556539 507.725877,16.3704687 C510.51479,21.5852836 512,26.7578634 512,41.0221632 L512,470.977837 C512,485.242137 510.51479,490.414716 507.725877,495.629531 C504.936963,500.844346 500.844346,504.936963 495.629531,507.725877 C490.414716,510.51479 485.242137,512 470.977837,512 L41.0221632,512 C26.7578634,512 21.5852836,510.51479 16.3704687,507.725877 C11.1556539,504.936963 7.06303674,500.844346 4.27412326,495.629531 C1.48520978,490.414716 6.41976585e-16,485.242137 -1.10489633e-15,470.977837 L1.10489633e-15,41.0221632 C-6.41976585e-16,26.7578634 1.48520978,21.5852836 4.27412326,16.3704687 C7.06303674,11.1556539 11.1556539,7.06303674 16.3704687,4.27412326 C21.5852836,1.48520978 26.7578634,9.62964878e-16 41.0221632,-1.65734449e-15 Z"/><path id="qGjIXc" d="M0 0H325V357H0z"/></defs><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><mask id="qGjIXb" fill="#fff"><use xlink:href="#qGjIXa"/></mask><use fill="#FF5A00" xlink:href="#qGjIXa"/><g mask="url(#qGjIXb)"><g transform="translate(93.000000, 80.000000)"><mask id="qGjIXd" fill="#fff"><use xlink:href="#qGjIXc"/></mask><path fill="#FFF" fill-rule="nonzero" stroke="none" d="M70.6237425 294L90.5684105 160.228814 92.2032193 160.228814 112.801811 294 166.096579 294 234.43159 160.228814 236.39336 160.228814 210.56338 294 284.129779 294 325 63 219.391348 63 159.230382 189.59322 157.595573 189.59322 137.323944 63 40.8702213 63 0 294z" mask="url(#qGjIXd)"/></g></g></g></svg>
      <span>NEUMANN</span>
    </a>

    <div class="dash flex-center-center">

      <div class="links flex-center-center">
        <a class="flex-center-center" href="https://github.com/mneumann-dev" aria-label="Github" target="_blank" rel="noopener noreferrer" title="Github">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg></a>
        <a class="flex-center-center" href="https://twitter.com/mneumann_dev" aria-label="Twitter" target="_blank" rel="noopener noreferrer" title="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/></svg></a>
        <a class="flex-center-center" href="https://www.facebook.com/michael.neumann.524381" aria-label="Facebook" target="_blank" rel="noopener noreferrer" title="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg></a>
        <a class="flex-center-center" href="https://linkedin.com/in/mneumann-dev" aria-label="Linkedin" target="_blank" rel="noopener noreferrer" title="Linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
        <a class="flex-center-center" href="mailto:mkn.dev.linux@gmail.com" aria-label="Email" title="Email">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"/></svg></a>
      </div>

      <div class="search flex-center-center">

        <label aria-label="Search">
          <input class="search" type='text' placeholder="Search...">
        </label>

        <button class="clear-btn" title="Clear">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
        </button>

        <button class="search-btn flex-center-center" aria-label="Search" title="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </button>
      </div>

    </div>

    <button class="about-btn flex-center-center" aria-label="About" title="About Me">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
    </button>
  </header>

</div>
`

export default class UiNavbar extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.navbar = this.shadowRoot.querySelector('.navbar')
    this.input = this.shadowRoot.querySelector('input')
    this.links = this.shadowRoot.querySelector('.links')
    this.searchBtn = this.shadowRoot.querySelector('.search-btn')
    this.aboutBtn = this.shadowRoot.querySelector('.about-btn')
    this.clearBtn = this.shadowRoot.querySelector('.clear-btn')
    this.projects = document.querySelectorAll('.project')
    this.about = document.querySelector('.about')
    this.filters = { searchText: '' }
    this.arr = []
  }

  connectedCallback () {
    this.setAttribute('height', this.navbar.offsetHeight)
    this.searchBtn.addEventListener('click', this._toggleSearch.bind(this))
    this.aboutBtn.addEventListener('click', this._toggleAbout.bind(this))
    this.input.addEventListener('keyup', this._filter.bind(this))
    this.clearBtn.addEventListener('click', this._clear.bind(this))
    window.addEventListener('scroll', this._onScroll.bind(this))
  }

  _onScroll () {
    window.scrollY > 0
      ? this.navbar.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.5)'
      : this.navbar.style.boxShadow = 'none'
  }

  _clear () {
    this.input.value = ''
    this.clearBtn.style.display = 'none'
    this._reset()
  }

  _toggleSearch () {
    this.input.value = ''
    this.input.classList.toggle('search--active')
    this.clearBtn.style.display = 'none'
    this.input.classList.contains('search--active')
      ? this.shadowRoot.querySelector('input').focus()
      : this.shadowRoot.querySelector('input').blur()
    this._reset()
  }

  _reset () {
    this.arr = []
    this.projects.forEach(project => {
      project.classList.remove('d-none')
      project.classList.remove('project--active-one')
      project.classList.remove('project--active-two')
      project.classList.remove('project--active-three')
      document.querySelector('.not-found').classList.add('d-none')
    })
  }

  _filterTags (project, index) {
    project.querySelectorAll('span').forEach(span => {
      if (span.innerHTML.toLowerCase().indexOf(this.filters.searchText.toLowerCase()) > -1) {
        this.projects[index].classList.remove('d-none')
        if (!this.arr.includes(span) && !this.arr.includes(project)) {
          this.arr.push(this.projects[index])
        }
      }
    })
  }

  _filterNames (project, index) {
    if (project.querySelector('h2').innerHTML.toLowerCase().indexOf(this.filters.searchText.toLowerCase()) > -1) {
      this.projects[index].classList.remove('d-none')
      this.arr.push(project)
    } else {
      this.projects[index].classList.add('d-none')
    }
  }

  _displayResults () {
    switch (this.arr.length) {
      case 0:
        document.querySelector('.not-found').classList.remove('d-none')
        break
      case 1:
        this.arr[0].classList.add('project--active-one')
        break
      case 2:
        this.arr.forEach(project => project.classList.add('project--active-two'))
        break
      case 3:
        this.arr[this.arr.length - 1].classList.add('project--active-three')
        break
    }
  }

  _filter (e) {
    this.filters.searchText = e.target.value

    if (this.filters.searchText !== '') {
      this._reset()
      this.clearBtn.style.display = 'block'
      this.projects.forEach((project, index) => {
        this._filterNames(project, index)
        this._filterTags(project, index)
      })
      this._displayResults()
    } else {
      this._reset()
      this.clearBtn.style.display = 'none'
    }
  }

  _toggleAbout () {
    this.about.classList.toggle('about--active')
  }
}

customElements.define(tagName, UiNavbar)

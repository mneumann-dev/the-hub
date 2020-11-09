const tagName = 'ui-theme'
const template = document.createElement('template')
template.innerHTML = `
<style>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 50px;
  right: 0.5rem;
  transform: translateX(3.5rem);
  transition: transform 0.5s ease-in-out;
}
svg { filter: drop-shadow(var(--btn-drop-shadow)); height: auto; width: 18pt; }
@media only screen and (min-width: 48rem) {
  button { right: 1rem; }
}
</style>
<button title="Toggle theme"></button>
`

class UiTheme extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.button = this.shadowRoot.querySelector('button')
    this.element = document.querySelector('body')
  }

  connectedCallback () {
    this.shadowRoot.querySelector('button').addEventListener('click', this._toggleDarkTheme.bind(this))
    this._setButton()
    setTimeout(() => {
      if (localStorage.getItem('the-hub-theme') === 'dark') this._toggleDarkTheme()
    }, 1)
    setTimeout(() => {
      this.button.style.transform = 'translateX(0)'
    }, 500)
  }

  _setButton () {
    localStorage.getItem('the-hub-theme') === 'dark'
      ? this.button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#FC9601" d="M13.51 9.69L9.93 6.1 7.1 8.93l3.59 3.59 2.82-2.83zM8 21H2v4h6v-4zM26 1.1h-4V7h4V1.1zm14.9 7.83L38.07 6.1l-3.59 3.59 2.83 2.83 3.59-3.59zm-6.41 27.38l3.59 3.59 2.83-2.83-3.59-3.59-2.83 2.83zM40 21v4h6v-4h-6zM24 11c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm-2 33.9h4V39h-4v5.9zM7.1 37.07l2.83 2.83 3.59-3.59-2.83-2.83-3.59 3.59z"/></svg>'
      : this.button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#79C1F1" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"/></svg>'
  }

  _setLocalStorage () {
    this.element.classList.contains('dark')
      ? localStorage.setItem('the-hub-theme', 'dark')
      : localStorage.setItem('the-hub-theme', 'light')
  }

  _toggleDarkTheme () {
    this.element.classList.toggle('dark')
    this.element.querySelectorAll('.project > div').forEach(element => {
      element.classList.toggle('dark-offset')
      element.querySelectorAll('div').forEach(child => {
        child.classList.toggle('dark-ignore')
      })
      element.querySelectorAll('span').forEach(child => {
        child.classList.toggle('dark-offset')
      })
    })
    this._setLocalStorage()
    this._setButton()
  }
}

customElements.define(tagName, UiTheme)

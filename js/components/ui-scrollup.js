const tagName = 'ui-scrollup'
const template = document.createElement('template')
template.innerHTML = `
<style>
button {
  background-color: #FFFFFF;
  bottom: 1rem;
  border: none;
  border-radius: 50%;
  box-shadow: 0 8px 12px 0 rgba(51, 51, 51, 0.5);
  margin: 0;
  padding: 4px 6px;
  position: fixed;
  outline: none;
  right: 0.5rem;
  transition: transform 0.5s ease-in-out;
}
svg { height: auto; width: 18pt; }
@media only screen and (min-width: 48rem) {
  button { right: 1rem; }
}
</style>
<button>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
</button>
`

class UiScrollup extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.button = this.shadowRoot.querySelector('button')
  }

  connectedCallback () {
    this.button.addEventListener('click', this._scrollUp.bind(this))
    window.addEventListener('scroll', this._showButton.bind(this))
  }

  _showButton () {
    window.scrollY > 100
      ? this.button.style.transform = 'translateX(0)'
      : this.button.style.transform = 'translateX(3.5rem)'
  }

  _scrollUp () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

customElements.define(tagName, UiScrollup)

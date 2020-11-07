const tagName = 'ui-help'
const template = document.createElement('template')
template.innerHTML = `
<style>
div {
  background-color: rgba(51, 51, 51, 1);
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  color: #FFFFFF;
  margin: 0.5rem 0 0 1rem;
  padding: 3rem 2rem 2rem 2rem;
  position: absolute;
  top: 50px;
  right: 1rem;
  z-index: 1;
}
.close-btn {
  background-color: transparent;
  border: none;
  fill: #FFFFFF;
  position: absolute;
  outline: none;
  top: 1rem;
  right: 1rem;
}
div span:last-child { float: right; }
.open-btn {
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  position: fixed;
  outline: none;
  top: 80px;
  right: 0.5rem;
  transform: translateX(3.5rem);
  transition: transform 0.5s ease-in-out;
}
svg { height: auto; width: 18pt; }
.d-none { display: none; }
@media only screen and (min-width: 48rem) {
  .open-btn, .close-btn { right: 1rem; }
}
</style>
<div>
  <button class="close-btn" aria-label="Close">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
  </button>
  <h2>Welcome to the Hub.</h2>
  <p>The white space burning your eyes? Try dark mode by clicking on the <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#79C1F1" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"/></svg> icon.</p>
  <p>You can search projects by name, or #Hashtags by clicking the <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg> icon.</p>
  <span>For Example you can try:</span>
  <ul>
    <li>covid-19-tracker</li>
    <li>html</li>
    <li>css</li>
  </ul>
  <p>To see this help menu again click the <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9ACD32" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg> icon.</p>
  <span>&dash; Michael</span>
</div>
<button class="open-btn">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9ACD32" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
</button>
`

class UiHelp extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.help = this.shadowRoot.querySelector('div')
    this.openBtn = this.shadowRoot.querySelector('.open-btn')
    this.closeBtn = this.shadowRoot.querySelector('.close-btn')
  }

  connectedCallback () {
    this.openBtn.addEventListener('click', this._toggleHelp.bind(this))
    this.closeBtn.addEventListener('click', this._toggleHelp.bind(this))
    if (localStorage.getItem('the-hub-help') === 'off') this.help.classList.add('d-none')
    this._setLocalStorage()
    setTimeout(() => {
      this.openBtn.style.transform = 'translateX(0)'
    }, 600)
  }

  _setLocalStorage () {
    this.help.classList.contains('d-none')
      ? localStorage.setItem('the-hub-help', 'off')
      : localStorage.setItem('the-hub-help', 'on')
  }

  _toggleHelp () {
    this.help.classList.toggle('d-none')
    this._setLocalStorage()
  }
}

customElements.define(tagName, UiHelp)

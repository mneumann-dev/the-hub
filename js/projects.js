const data = [
  {
    name: 'covid-19-tracker',
    description: "This web app displays COVID-19 data that is retrieved with the <a href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' rel='noopener noreferrer' target='_blank'><code>fetch API</code></a>. It incorporates the <a href='https://fusejs.io' rel='noopener noreferrer' target='_blank'><code>fuse.js</code></a> library to search for countries.",
    image: 'https://ksthehub.s3-us-west-1.amazonaws.com/img/covid-19-tracker%400.1x.jpg',
    href: {
      git: 'https://github.com/mneumann-dev/covid-19-tracker/blob/master/README.md',
      site: 'https://mneumann-dev.github.io/covid-19-tracker/'
    },
    tags: ['#html', '#javascript', '#css', '#api']
  },
  {
    name: 'giamedical-landing-page',
    description: 'A landing page that utilizes standard web technologies and practices.',
    image: 'https://ksthehub.s3-us-west-1.amazonaws.com/img/giamedical-landing-page%400.1x.jpg',
    href: {
      git: 'https://github.com/mneumann-dev/giamedical-landing-page/blob/master/README.md',
      site: 'https://giamedical.com'
    },
    tags: ['#html', '#javascript', '#bootstrap']
  },
  {
    name: 'neu-to-dos',
    description: 'A simple browser-base To-Do application. This project uses local storage to save and manipulate data. Written in standard HTML5, CSS3/Bootstrap, and JavaScript. In addition, this web app utilizes a third-party library - <a href="https://github.com/uuidjs/uuid">UUID</a> - to generate unique IDs',
    image: 'https://ksthehub.s3-us-west-1.amazonaws.com/img/neu-to-dos%400.1x.jpg',
    href: {
      git: 'https://github.com/mneumann-dev/neu-to-dos',
      site: 'https://mneumann-dev.github.io/neu-to-dos/'
    },
    tags: ['#html', '#webcomponents', '#bootstrap']
  },
  {
    name: 'the-hub (YOU ARE HERE)',
    description: 'The Hub ties it altogether. This website is made dynamic with the use of <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" rel="noopener noreferrer" target="_blank"><code>web components</code></a> and standard JavaScript. Features a dark mode toggle switch, search functionality by project name or project filtering via #tags, and more...',
    image: 'https://ksthehub.s3-us-west-1.amazonaws.com/img/the-hub%400.1x.jpg',
    href: {
      git: 'https://github.com/mneumann-dev/the-hub',
      site: '#'
    },
    tags: ['#html', '#css', '#webcomponents']
  }
]

module.exports = data

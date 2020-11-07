const data = [
  {
    name: 'covid-19-tracker',
    description: "This web app displays COVID-19 data that is retrieved with the <a href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' rel='noopener noreferrer' target='_blank'><code>fetch API</code></a>. It incorporates the <a href='https://fusejs.io' rel='noopener noreferrer' target='_blank'><code>fuse.js</code></a> library to search for countries. The latest version uses <a href='https://parceljs.org' rel='noopener noreferrer' target='_blank'><code>parcel.js</code></a> for bundling.",
    image: 'https://ksthehub.s3-us-west-1.amazonaws.com/img/covid-19-tracker%400.1x.jpg',
    href: {
      git: 'https://github.com/krabfish/covid-19-tracker/blob/master/README.md',
      site: 'https://krabfish.github.io/covid-19-tracker/'
    },
    tags: ['#html', '#javascript', '#css', '#api']
  },
  {
    name: 'giamedical-landing-page',
    description: "A landing page that utilizes standard web technologies and practices. The web page is bundled using <a href='https://parceljs.org' rel='noopener noreferrer' target='_blank'><code>parcel.js</code></a>. Development time was extremely constrained.",
    image: 'https://ksthehub.s3-us-west-1.amazonaws.com/img/giamedical-landing-page%400.1x.jpg',
    href: {
      git: 'https://github.com/krabfish/giamedical-landing-page/blob/master/README.md',
      site: 'https://giamedical.com'
    },
    tags: ['#html', '#javascript', '#bootstrap']
  },
  {
    name: 'neu-to-dos',
    description: 'A simple browser-base To-Do application. This project uses local storage to save and manipulate ' +
      'data. Written in standard HTML5, CSS3/Bootstrap, and JavaScript. In addition, this web app utilizes a third-party' +
      " library - <a href='https://github.com/uuidjs/uuid'>UUID</a> - to generate unique IDs",
    image: 'https://ksthehub.s3-us-west-1.amazonaws.com/img/neu-to-dos%400.1x.jpg',
    href: {
      git: 'https://github.com/krabfish/neu-to-dos',
      site: 'https://krabfish.github.io/neu-to-dos/'
    },
    tags: ['#webcomponents', '#bootstrap']
  },
  {
    name: 'the-hub (YOU ARE HERE)',
    description: 'The Hub is a website that is made dynamic with the use of web components and standard JavaScript.',
    image: 'https://ksthehub.s3-us-west-1.amazonaws.com/img/website%400.1x.jpg',
    href: {
      git: 'https://github.com/krabfish/the-hub',
      site: 'https://krabfishstudios.com'
    },
    tags: ['#html', '#css', '#webcomponents']
  }
]

module.exports = data

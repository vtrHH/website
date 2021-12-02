import eyebird from '../assets/eyebird.png';
import maskGame from '../assets/mask-game.png';
import mooseician from '../assets/mooseician.png';
import ownWebsite from '../assets/own_website.png';
import malraum from '../assets/malraum.png';
import anjasWebsite from '../assets/website-anja.png';

export const projects = [
  {
    projectName: 'EyeBird',
    projectAbstract: 'a plattform for bird lovers',
    techStack:
      'JavaScript, React, ExpressJS, NodeJS, MongoDB, Mongoose, Leaflet, Axios, SASS, React-Bootstrap, HTML & CSS',
    img: eyebird,
    githubURL: 'https://github.com/vtrHH/nature-app',
    demoURL: 'https://eyebird.netlify.app/'
  },
  {
    projectName: 'Mooseician',
    projectAbstract: 'a marketplace for musicians',
    techStack:
      'JavaScript, ExpressJS, NodeJS, Handlebars, MongoDB, Mongoose, SASS, Bootstrap, HTML & CSS',
    img: mooseician,
    githubURL: 'https://github.com/vtrHH/musicians-app',
    demoURL: 'https://mooseician.herokuapp.com/'
  },
  {
    projectName: 'My own website',
    projectAbstract: 'a little portfolio website',
    techStack:
      'JavaScript, Typescript, React, Material UI, React Typed, React PDF, HTML & CSS',
    img: ownWebsite,
    githubURL: 'https://github.com/vtrHH/website',
    demoURL: ''
  },
  {
    projectName: 'Website & Blog',
    projectAbstract: 'custom site and blog admin tool',
    techStack:
      'JavaScript, React, Material UI, React-Scroll, ExpressJS, NodeJS, MongoDB, Mongoose, Leaflet, Axios, HTML & CSS',
    img: anjasWebsite,
    githubURL: '',
    demoURL: 'https://anja-maisch.netlify.app/'
  },
  {
    projectName: 'MALraum Stuttgart',
    projectAbstract: 'a little portfolio homepage',
    techStack: 'NextJS with JavaScript, Material UI, HTML & CSS',
    img: malraum,
    githubURL: 'https://github.com/vtrHH/malraum',
    demoURL: 'https://malraum.vercel.app/'
  },
  {
    projectName: 'Mask Game',
    projectAbstract: 'an online game',
    techStack: 'HTML & CSS, HTML Canvas, Vanilla JavaScript',
    img: maskGame,
    githubURL: 'https://github.com/vtrHH/ironhack-project1-mask-game',
    demoURL: 'https://verena-mask-game.netlify.app/'
  }
];

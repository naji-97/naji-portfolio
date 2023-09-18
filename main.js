function mobileMenu() {
  const nonDisplay = document.getElementById('mobile-menu');
  const blur = document.getElementById('blur');
  const projects = document.getElementById('projects');
  const about = document.getElementById('about');
  const contact = document.getElementById('contact');

  blur.classList.toggle('blur');
  nonDisplay.classList.toggle('non-display');
  projects.classList.toggle('blur');
  about.classList.toggle('blur');
  contact.classList.toggle('blur');
}

const menu = document.querySelector('.menu');
menu.addEventListener('click', mobileMenu);

//    Start Modal Box
const projectDetails = [

  {
    name: 'developer conferences',
    // featured: ['CANOPY', 'Back End Dev', '2022'],
    description:
      'The website for the world\'s leading developer event is designed using modern CSS techniques like CSS Grid, Flexbox, and pseudo-selectors. Made JavaScript ES6 , HTML5 and CSS3.',
    image: './assest/img/js-project/we-are-dev.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Webpack'],
    live: 'https://naji-97.github.io/CapstonePrj1-ConferencePage/index.html',
    source: 'https://github.com/naji-97/CapstonePrj1-ConferencePage',
  },
  {
    name: 'Holiday Finder',
    description:
      'The Holiday Finder is a single-page website where users can get information about countries, search for specific countries, and find country holidays from previous years.',
    image: './assest/img/js-project/holiday-finder.png',
    technologies: ['React', 'Redux', 'API', 'GitHub', 'Sass'],
    live: 'https://holiday-finder.onrender.com',
    source: 'https://github.com/naji-97/holiday-finder',
  },
  {
    name: 'Space Traveler\'s Hub',
    // featured: ['CANOPY', 'Back End Dev', '2022'],
    description:
    'Web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. Using React, Redux & REST APIs',
    image: './assest/img/js-project/space-travel.png',
    technologies: ['React', 'Redux', 'API', 'GitHub', 'Sass', 'Bootstrap', 'Jest'],
    live: 'https://spacehub.onrender.com',
    source: 'https://github.com/naji-97/sec-space-travels-hub',
  },
  {
    name: 'Money-Tracker',
    // featured: ['CANOPY', 'Back End Dev', '2022'],
    description:
      'Money-Tracker is a mobile web application where you can manage your budget, you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    image: './assest/img/js-project/mony-tracker.png',
    technologies: ['Ruby', 'Rails', 'github', 'CSS', 'Bootstrap', 'PostgreSQL', 'RSpec', 'Selenium', 'Capybara'],
    live: 'https://money-tracker-rails-6abdef4b7828.herokuapp.com',
    source: 'https://github.com/naji-97/Budget-app',
  },
  {
    name: 'Movies.com',
    // featured: ['CANOPY', 'Back End Dev', '2022'],
    description:
      'MOVIES.COM is the 2nd Capstone Project in the Microverse curriculum.Our project is a webpage that give us sugestion about movies and also we can comment and like movies.',
    image: './assest/img/js-project/movies.png',
    technologies: ['HTML', 'JavaScript', 'CSS', 'API', 'SASS', 'JS6'],
    live: 'https://tamaradimov.github.io/GROUP-CAPSTONE-PROJECT/dist/',
    source: 'https://github.com/naji-97/GROUP-CAPSTONE-PROJECT',
  },
];

const projectCard = document.querySelectorAll('.project');
const boxModal = document.getElementById('modal');
const pjName = boxModal.querySelector('.pjname');
// const lgLists = boxModal.querySelectorAll('.lg-lists li');
const mainImage = boxModal.querySelector('.main-img img');
const modalContent = boxModal.querySelector('.modal-content');
const technologiesList = document.getElementById('technologies-list');
const liveLink = boxModal.querySelector('#liveLink');
const sourceLink = boxModal.querySelector('#sourceLink');
const closeButton = boxModal.querySelector('.close-btn');

const blur = document.getElementById('blur');

for (let i = 0; i < projectCard.length; i += 1) {
  const pjBtn = projectCard[i].querySelector('#project-btn');
  const project = projectDetails[i];
  pjBtn.addEventListener('click', () => {
    blur.classList.toggle('blur');
    boxModal.classList.add('active');
    pjName.innerText = project.name;
    mainImage.src = project.image;
    modalContent.innerText = project.description;
    liveLink.href = project.live;
    sourceLink.href = project.source;

    // for (let j = 0; j < lgLists.length; j += 1) {
    //   lgLists[j].innerText = project.featured[j];
    // }
    technologiesList.innerHTML = '';
    // Loop through the project technologies and create <li> elements
    project.technologies.forEach((tech) => {
      const technologyList = document.createElement('li');
      technologyList.innerText = tech;
      technologiesList.appendChild(technologyList);
    });

    // const outModal = document
    boxModal.addEventListener('click', () => {
      boxModal.classList.remove('active');
    });

    closeButton.addEventListener('click', () => {
      blur.classList.toggle('blur');

      boxModal.classList.remove('active');
    });
  });
}

// Start Form Validation
const getForm = document.querySelector('.form');
const getEmail = document.querySelector('input[type="email"');
const getMesg = document.querySelector('form .message');

const errorMesg = (msg) => {
  getMesg.style.display = 'block';
  getMesg.innerText = msg;
};

const successMesg = (msg) => {
  getMesg.style.display = 'block';
  getMesg.style.color = 'green';
  getMesg.style.borderColor = 'green';
  getMesg.innerText = msg;
};

const checkLowerCase = (input, event) => {
  if (input.value !== input.value.toLowerCase()) {
    errorMesg(`${input.type} should be in lowercase. Please resubmit again`);
    event.preventDefault();
  } else {
    successMesg('Thank You. We will consider it.');
  }
  getForm.submit();
};

getForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkLowerCase(getEmail);
});

// Start LocalStorage

const getName = document.querySelector('input[type="text"]');
const getTextArea = document.querySelector('textarea');

const dataStore = () => {
  const visitor = {
    userName: getName.value,
    userEmail: getEmail.value,
    userMesg: getTextArea.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
};

// Trigger for populating local storage
getName.addEventListener('focusout', dataStore);
getEmail.addEventListener('focusout', dataStore);
getTextArea.addEventListener('focusout', dataStore);
// Parse data from local storage
const userDataObject = JSON.parse(localStorage.getItem('visitor'));

// Refilling form inputs
if (userDataObject) {
  getName.value = userDataObject.userName;
  getEmail.value = userDataObject.userEmail;
  getTextArea.value = userDataObject.userMesg;
}

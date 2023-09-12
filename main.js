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
      `The website for the world's leading developer event is designed using modern CSS techniques like CSS Grid, Flexbox, and pseudo-selectors. Made JavaScript ES6 , HTML5 and CSS3.`,
    image: './assest/img/js-project/we-are-dev.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Webpack'],
    live: 'https://naji-97.github.io/CapstonePrj1-ConferencePage/index.html',
    source: 'https://github.com/naji-97/CapstonePrj1-ConferencePage',
  },
  {
    name: `Space Traveler's Hub`,
    // featured: ['CANOPY', 'Back End Dev', '2022'],
    description:
    `Web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. Using React, Redux & REST APIs`,
    image: './assest/img/js-project/space-travel.png',
    technologies: ['React', 'Redux', 'API', 'GitHub', 'Sass', 'Bootstrap', 'Jest'],
    live: 'https://github.com/naji-97/sec-space-travels-hub',
    source: 'https://github.com/naji-97/sec-space-travels-hub',
  },
  {
    name: 'Recipe Food',
    // featured: ['CANOPY', 'Back End Dev', '2022'],
    description:
      'keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe',
    image: './assest/img/js-project/recipedetail (1).png',
    technologies: [ 'Ruby', 'Rails', 'github', 'CSS', 'Bootstrap', 'PostgreSQL', 'RSpec', 'Selenium', 'Capybara'],
    live: 'https://github.com/naji-97/RoR_Group_Project',
    source: 'https://github.com/naji-97/RoR_Group_Project',
  },
  {
    name: 'Airline Reservation Management System',
    // featured: ['CANOPY', 'Back End Dev', '2022'],
    description:
      'For the Front-end, React is used while the Back-end is powered by Ruby on Rails. Postgresql serves as the database. Proper user authorization and authentication are implemented for role-based creation, flight reservations, and cancellations.',
    image: './assest/img/js-project/filght.png',
    technologies: ['Ruby', 'Rails', 'github', 'CSS', 'Bootstrap', 'PostgreSQL', 'RSpec', 'Selenium', 'Capybara', 'React', 'Redux', 'API', 'Bootstrap', 'Jest'],
    live: 'https://github.com/naji-97/final-group-capstone',
    source: 'https://github.com/naji-97/final-group-capstone',
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
    project.technologies.forEach(tech => {
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

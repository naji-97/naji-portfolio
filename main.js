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
      `The website for the world's leading developer event is designed using modern CSS techniques like CSS Grid, Flexbox, and pseudo-selectors.`,
    image: './assest/img/js-project/we-are-dev.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
    live: 'https://naji-97.github.io/CapstonePrj1-ConferencePage/index.html',
    source: 'https://github.com/naji-97/CapstonePrj1-ConferencePage',
  },
  {
    name: 'Multi-Post Stories',
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description:
      'Loreme ipsum dolor sit, amet consectetur adipisicing elit. Dolores mollitia, sapiente deleniti voluptas exercitationem dolore, nihil facilis doloremque dicta dignissimos, fugit maxime culpa obcaecati nisi corrupti id sunt vel sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iure pariatur dolores, voluptate natus modi vel architecto enim accusantium accusamus sed sapiente at laborum quas quo quam? Corporis, ab dolorem!',
    image: './assest/img/Snapshoot Portfolio (1).png',
    technologies: ['html', 'css', 'havascript', 'github', 'ruby', 'Bootstrap'],
    live: 'https://naji-97.github.io/Portfolio-/',
    source: 'https://github.com/naji-97',
  },
  {
    name: 'Facebook 360',
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description:
      'Loreme ipsum dolor sit, amet consectetur adipisicing elit. Dolores mollitia, sapiente deleniti voluptas exercitationem dolore, nihil facilis doloremque dicta dignissimos, fugit maxime culpa obcaecati nisi corrupti id sunt vel sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iure pariatur dolores, voluptate natus modi vel architecto enim accusantium accusamus sed sapiente at laborum quas quo quam? Corporis, ab dolorem!',
    image: './assest/img/Snapshoot Portfolio (2).png',
    technologies: ['html', 'css', 'havascript', 'github', 'ruby', 'Bootstrap'],
    live: 'https://naji-97.github.io/Portfolio-/',
    source: 'https://github.com/naji-97',
  },
  {
    name: 'Uber Navigation',
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description:
      'Loreme ipsum dolor sit, amet consectetur adipisicing elit. Dolores mollitia, sapiente deleniti voluptas exercitationem dolore, nihil facilis doloremque dicta dignissimos, fugit maxime culpa obcaecati nisi corrupti id sunt vel sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iure pariatur dolores, voluptate natus modi vel architecto enim accusantium accusamus sed sapiente at laborum quas quo quam? Corporis, ab dolorem!',
    image: './assest/img/Snapshoot Portfolio (3).png',
    technologies: ['html', 'css', 'havascript', 'github', 'ruby', 'Bootstrap'],
    live: 'https://naji-97.github.io/Portfolio-/',
    source: 'https://github.com/naji-97',
  },
];

const projectCard = document.querySelectorAll('.project');
const boxModal = document.getElementById('modal');
const pjName = boxModal.querySelector('.pjname');
// const lgLists = boxModal.querySelectorAll('.lg-lists li');
const mainImage = boxModal.querySelector('.main-img img');
const modalContent = boxModal.querySelector('.modal-content');
const technologiesList = boxModal.querySelectorAll('#technologies-list li');
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
    //   // lgLists[j].innerText = project.featured[j];
    // }
    for (let n = 0; n < technologiesList.length; n += 1) {
      technologiesList[n].innerText = project.technologies[n];
    }

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

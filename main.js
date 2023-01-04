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
    name: 'Tonic',
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description:
      'Loreme ipsum dolor sit, amet consectetur adipisicing elit. Dolores mollitia, sapiente deleniti voluptas exercitationem dolore, nihil facilis doloremque dicta dignissimos, fugit maxime culpa obcaecati nisi corrupti id sunt vel sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iure pariatur dolores, voluptate natus modi vel architecto enim accusantium accusamus sed sapiente at laborum quas quo quam? Corporis, ab dolorem! NAJI',
    image: './assest/img/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'havascript', 'github', 'ruby', 'Bootstrap'],
    live: 'https://naji-97.github.io/Portfolio-/',
    source: 'https://github.com/naji-97',
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
const lgLists = boxModal.querySelectorAll('.lg-lists li');
const mainImage = boxModal.querySelector('.main-img img');
const modalContent = boxModal.querySelector('.modal-content');
const technologiesList = boxModal.querySelectorAll('#technologies-list li');
const liveLink = boxModal.querySelector('#liveLink');
const sourceLink = boxModal.querySelector('#sourceLink');
const closeButton = boxModal.querySelector('.close-btn');

for (let i = 0; i < projectCard.length; i += 1) {
  const pjBtn = projectCard[i].querySelector('#project-btn');
  const project = projectDetails[i];

  pjBtn.addEventListener('click', () => {
    boxModal.classList.add('active');
    pjName.innerText = project.name;
    mainImage.src = project.image;
    modalContent.innerText = project.description;
    liveLink.href = project.live;
    sourceLink.href = project.source;

    for (let j = 0; j < lgLists.length; j += 1) {
      lgLists[j].innerText = project.featured[j];
    }
    for (let n = 0; n < technologiesList.length; n += 1) {
      technologiesList[n].innerText = project.technologies[n];
    }

    closeButton.addEventListener('click', () => {
      boxModal.classList.remove('active');
    });
  });
}

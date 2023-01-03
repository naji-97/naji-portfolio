function mobileMenu() {
    const nonDisplay = document.getElementById('mobile-menu')
    const blur = document.getElementById('blur')
    const projects = document.getElementById('projects')
    const about = document.getElementById('about')
    const contact = document.getElementById('contact')

   
    blur.classList.toggle("blur")
    nonDisplay.classList.toggle('non-display')
    projects.classList.toggle("blur")
    about.classList.toggle("blur")
    contact.classList.toggle("blur")
   }
   

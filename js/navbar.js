//navigation bar toggle on phone devises
const navbar = document.querySelector('.navbar')
const navbarToggle = document.querySelector('.mobile-navbar-toggle')
let isOpen = false

navbarToggle.addEventListener('click', ()=> {
    const visibility = navbar.getAttribute('data-visible')
    
    if(visibility === "false"){
        navbar.setAttribute('data-visible', true)
        navbarToggle.setAttribute('aria-expanded', true)
        isOpen = true
    } else{
        navbar.setAttribute('data-visible', false)
        navbarToggle.setAttribute('aria-expanded', false)
        isOpen = false
    }
})

let bodyElement = document.getElementById("body")
bodyElement.addEventListener("click", ()=>{
  const visibility = navbar.getAttribute('data-visible')

  if(visibility === "true"){
    console.log("navbaropen")
    navbar.setAttribute('data-visible', false)
    navbarToggle.setAttribute('aria-expanded', false)
  }
  
  if(langListToggle){
    const languagesEl = document.getElementById("languages");
    if(languagesEl) languagesEl.style.display = "none";
    langListToggle = false
  }

})

//language choice button click on mobile

const languageIcon = document.querySelector(".selected-lang")
let langListToggle = false

if(languageIcon) {
  languageIcon.addEventListener('click', ()=>{
      if(!langListToggle){
          document.getElementById("languages").style.display = "block";
          langListToggle = true
      }else if(langListToggle){
          document.getElementById("languages").style.display = "none";
          langListToggle = false
      }
  })

  navbarToggle.addEventListener('click', ()=>{
      const languagesEl = document.getElementById("languages");
      if(languagesEl) languagesEl.style.display = "none";
  })
}




//navbar closing on scroll
let theEnd = 0
let navbarElement = document.getElementById("header")
let navbarButtons = document.querySelectorAll(".active")
let moon = document.querySelector('#theme-toggle')

window.addEventListener("scroll", ()=>{
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop
  if(scrollTop > theEnd){
    if(!isOpen){
      if(navbarElement) navbarElement.style.top = '-70px'
      if(moon) moon.style.right = '-60px'
    }
  } else{
    if(navbarElement) navbarElement.style.top = '0'
    if(moon) moon.style.right = '0px'
  }
  theEnd = scrollTop
})

// Desktop dropdown menu - prevent default link behavior and handle theme toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const themeToggleDropdown = document.getElementById('theme-toggle-dropdown');
  
  // Prevent default click on menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }

  // Handle theme toggle in dropdown
  if (themeToggleDropdown) {
    themeToggleDropdown.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Directly toggle theme instead of clicking moon icon
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      
      const sunPath = './img/sun.png';
      const moonPath = './img/moon.png';
      const imageSrc = isDark ? sunPath : moonPath;
      
      // Update all theme icons
      const icon = document.getElementById('moon');
      const iconNavbar = document.getElementById('moon-navbar');
      const iconDropdown = document.querySelector('.dropdown-theme-icon');
      
      if (icon) icon.src = imageSrc;
      if (iconNavbar) iconNavbar.src = imageSrc;
      if (iconDropdown) iconDropdown.src = imageSrc;
    });
  }

  // Prevent dropdown language menu link from default behavior
  const langDropdownToggle = document.querySelector('.dropdown-lang-menu > .dropdown-item');
  if (langDropdownToggle) {
    langDropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
});

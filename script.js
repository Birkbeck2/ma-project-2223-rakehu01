// This element identifies toggle button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
// This element identifies nav links
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
// This event activates when toggle button is clicked, it activates the flex display on the css document making the menu visible
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
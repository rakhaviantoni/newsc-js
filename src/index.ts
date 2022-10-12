const currBoxLink = document.getElementById('current-box_link')?.getAttribute("href") || ''
let learnMoreButtons = document.getElementsByClassName('button-cta cta outline-new')
for(let button of learnMoreButtons) {
  button.setAttribute("href", currBoxLink)
}
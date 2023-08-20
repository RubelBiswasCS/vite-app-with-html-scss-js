import './style.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const navMenuButtons = document.getElementsByClassName('navmenu-btn')
const searchButton = document.getElementById('search-btn')
const searchCloseButton = document.getElementById('close-search-btn')

for (let btn of navMenuButtons) {
    btn?.addEventListener("click", () => {
        console.log('clicked')
    })
    btn?.addEventListener("mouseenter", () => {
        console.log('mouse enter')
    })
}

// On Seach Button Click
searchButton.addEventListener('click', () => {
    document.getElementById('navmenu').classList.add('search-mode')
    document.getElementById('search-container').classList.add('search-mode')
}) 

// On Search Close Button Click
searchCloseButton.addEventListener('click', () => {
    document.getElementById('navmenu').classList.remove('search-mode')
    document.getElementById('search-container').classList.remove('search-mode')
}) 

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

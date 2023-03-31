import { model } from './model'
// import { templates } from './templates'
import './styles/main.css'
// https://github.com/vladilenm/js-constructor/blob/master/src/model.js
const site = document.querySelector('#site')

model.forEach(block => {
    site.insertAdjacentHTML('beforeend', block.toHTML())

})

import { model } from './model'
import { templates } from './templates'
import './styles/main.css'
// https://github.com/vladilenm/js-constructor/blob/master/src/model.js
const site = document.querySelector('#site')

model.forEach(block => {
    const toHTML = templates[block.type]
    if (toHTML) {
        site.insertAdjacentHTML('beforeend', toHTML(block))
    }
})

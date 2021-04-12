// if statement for if the button is pressed the following function will run
// create a function that saves the text
// if statement for if the button is pressed the following function will run
// create a funciton that loads a saved note
// if statement for if the button is pressed the following function will run
// create a function that removes the saved text and clears the page.
const notesArray = []

function defineNoteWritingSection() {
    html = '\
    <div id="note-area">\
        <div id="note" contenteditable="true"></div>\
        <button onclick="saveNote()" class="button" id="horizontal"><a>save</a></button>\
        <button onclick="cleanUp()" class="button" id="horizantal"><a>cancel</a></button>\
    </div>\
    '
    return html
}

function createContentWritingArea() {
    const div = document.querySelector('#content')
    div.insertAdjacentHTML('beforeend', defineNoteWritingSection())
    setCursor()
    console.log('writing area created')
}

function setCursor() {
    const div = document.querySelector('#note')
    div.focus()
}

function saveNote() {
    const div = document.querySelector('#note')
    const title = div.firstChild.textContent
    const body = convertDivsToString()
    notesArray.push(createNote(title, body))
    cleanUp()
}

function createNote(title, body) {
    return { title, body }
}

function convertDivsToString() {
    let str = ""
    const divs = [...document.querySelectorAll('[contenteditable] > div:not(:first-child)')]
    for (const i of divs) {
        str += '${i.textContent}\n'
    }
    return str
}

function cleanUp() {
    const div = document.querySelector('#note-area')
    div.remove()
}

// const btn = document.querySelector('#dark_Theme');

// const current_theme = 'light';

// function theme(element) {
//     if (current_theme == 'light') {
//         const header_bcolor, footer_bcolor = '#191724';
//         const body_bcolor = '#1f1d2e';
//         const body_color = '#e0def4';
//     }
//     else {
//         const header_bcolor, footer_bcolor = '#faf4ed';
//         const body_bcolor = '#fffaf3';
//         const body_color = '#575279';
//     }
//     if (element == 'header_bcolor') {
//         return header_bcolor
//     }
//     if (element == 'footer_bcolor') {
//         return footer_bcolor
//     }
//     if (element == 'body_bcolor') {
//         return body_bcolor
//     }
//     if (element == 'body_color') {
//         return body_color
//     }
//     return header_bcolor, body_bcolor, body_color
// }
// btn.onclick = function() {
//     document.querySelector('header').style.backgroundColor = '#191724';
//     document.body.style.backgroundColor = '#1f1d2e';
//     document.querySelector('footer').style.backgroundColor = '#191724';
//     document.body.style.color = '#e0def4';
//     document.querySelectorAll('button > a').style.color = '#9ccfd8';
// }

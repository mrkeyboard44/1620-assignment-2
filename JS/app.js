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

function saveTextArea() {
    const note = document.querySelector('textarea').value
    console.log(note)
    const notearr = note.split('\n\n')
    notesArray.push(createNoteObject(notearr))
    document.querySelector('textarea').value = ""
    console.log(notesArray)
}

function createNoteObject(arr) {
    return newObject = { title: arr[0], body: arr[1] }
}

function defineSavedNotesSection() {
    html = '\
        <ul class="button" id="column">\
            <button><a class="active">Untitled Document</a></button>\
            <button><a>Yesterday</a></button>\
            <button><a>The day before</a></button>\
        </ul>\
        '
    return html
}

var asideStatus = "closed"

function toggleSavedNotesSection() {
    if (asideStatus == 'closed') {
        openSavedNotesSection()
    }
    else {
        closeSavedNotesSection()
    }
}

function openSavedNotesSection() {
    const div = document.querySelector('#view-note');
    div.insertAdjacentHTML('beforeend', defineSavedNotesSection());
    document.querySelector('aside').style.backgroundColor = aside_bcolor;
    document.querySelector('#view-note').style.backgroundColor = aside_bcolor;
    console.log('aside open');
    asideStatus = "open";
}

function closeSavedNotesSection() {
    const div = document.querySelector('#view-note')
    div.remove()
    document.querySelector('aside').style.backgroundColor = body_bcolor
    // document.querySelector('#view-note').style.backgroundColor = '#fffaf3'
    asideStatus = 'closed'
}

var themeColor = 'light'

var header_bcolor = '#faf4ed'

var body_bcolor = '#1f1d2e'

var footer_bcolor = '#191724'

var aside_bcolor = '#faf4ed'

var text_color = '#e0def4'

function defineDarkModeButton() {
    html = '\
    <button onclick="toggleTheme()" class="button" id="dark_mode"><a>Dark Theme</a></button>\
    '
    return html
}

function defineLightModeButton() {
    html = '\
    <button onclick="toggleTheme()" class="button" id="light_mode"><a>Light Theme</a></button>\
    '
    return html
}

function toggleTheme() {
    const theme = document.getElementById("dark_mode")
    console.log(theme.firstChild.nodeValue)
    if (theme.firstChild.nodeValue == 'Dark Theme') {
        darkTheme(theme)
    }
    else {
        lightTheme(theme)
    }
}

function darkTheme(theme) {
    header_bcolor = '#191724'
    body_bcolor = '#1f1d2e'
    footer_bcolor = '#191724'
    aside_bcolor = '#26233a'
    text_color = '#e0def4'
    document.querySelector('header').style.backgroundColor = header_bcolor;
    document.body.style.backgroundColor = body_bcolor;
    document.querySelector('footer').style.backgroundColor = footer_bcolor;
    if (asideStatus == 'closed') {
        document.querySelector('aside').style.backgroundColor = body_bcolor;
    }
    else {
        document.querySelector('aside').style.backgroundColor = aside_bcolor;
    }
    document.body.style.color = text_color;
    // document.querySelectorAll('button > a').style.color = '#9ccfd8';
    theme.firstChild.nodeValue = 'Light Theme'
}

function lightTheme(theme) {
    header_bcolor = '#faf4ed'
    body_bcolor = '#faf4ed'
    footer_bcolor = '#faf4ed'
    aside_bcolor = '#fffaf3'
    text_color = '#575279'
    document.querySelector('header').style.backgroundColor = '#faf4ed';
    document.body.style.backgroundColor = '#faf4ed';
    document.querySelector('footer').style.backgroundColor = '#faf4ed';
    document.querySelector('aside').style.backgroundColor = '#fffaf3';
    document.body.style.color = '#575279';
    // document.querySelectorAll('button > a').style.color = '#9ccfd8';
    theme.firstChild.nodeValue = 'Dark Theme'
}

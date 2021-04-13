//TEXT AREA

const notesArray = []

function defineNoteWritingSection() {
    html = '\
    <div id="note-area">\
        <div id="note" contenteditable="true"></div>\
        <div id="save-n-cancel">\
            <button onclick="saveNote()" class="button" id="left_button"><a>save</a></button>\
            <button onclick="cleanUp()" class="button"><a>cancel</a></button>\
        </div>\
    </div>\
    '
    return html
}

function defineCreateNoteMessage() {
    html = '<a id="create_message">create a new note</a>'
    return html
}

function createContentWritingArea() {
    const createMessage = document.querySelector('#create_message')
    createMessage.remove()
    const div = document.querySelector('#content')
    div.insertAdjacentHTML('beforeend', defineNoteWritingSection())
    setCursor()
    console.log('writing area created')
    toggleTheme()
    toggleTheme()
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
    toggleSavedNotesSection()
    toggleSavedNotesSection()
}

function createNote(title, body) {
    return { title, body }
}

function convertDivsToString() {
    let str = ""
    const divs = [...document.querySelectorAll('[contenteditable] > div')]
    for (const i of divs) {
        str += `${i.textContent}\n`
    }
    return str
}

function cleanUp() {
    const div = document.querySelector('#note-area')
    div.remove()
    const createMessage = document.querySelector('.create_box')
    createMessage.insertAdjacentHTML('beforeend', defineCreateNoteMessage())
    toggleTheme()
    toggleTheme()
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

// SIDEBAR

function noteTitles() {
    html = ''
    for (const index in notesArray) {
        html += '<button onclick="openNote(' + index + ')"><a>' + notesArray[index].title + '</a></button>\n'
    }
    return html
}

function defineSavedNotesSection() {
    html = '\
        <ul class="button" id="column">\
            ' + noteTitles() + '\
        </ul>\
        '
    return html
}

function openButton() {
    return '<i class="fas fa-chevron-right" id="open"></i>'
}

function closeButton() {
    return '<i class="fas fa-chevron-left" id="close"></i>'
}

var asideStatus = "closed"

function toggleSavedNotesSection() {
    const aside = document.getElementById('aside_toggle')
    console.log(aside.firstElementChild.className)
    if (aside.firstElementChild.className == 'fas fa-chevron-right') {
        openSavedNotesSection()
    }
    else {
        closeSavedNotesSection()
    }
    console.log(asideStatus)
}

function openSavedNotesSection() {
    const div = document.querySelector('#view-note');
    console.log(div)
    div.insertAdjacentHTML('beforeend', defineSavedNotesSection());
    document.querySelector('aside').style.backgroundColor = aside_bcolor;
    document.querySelector('#view-note').style.backgroundColor = aside_bcolor;
    asideStatus = "open";
    const i = document.querySelector('#open')
    i.remove()
    const span = document.querySelector('#aside_toggle')
    span.insertAdjacentHTML('beforeend', closeButton())
    // document.querySelector('.container').style.gridTemplateColumns = '250px 1fr';
}

function closeSavedNotesSection() {
    const div = document.querySelector('#column')
    div.remove()
    document.querySelector('aside').style.backgroundColor = body_bcolor
    console.log(body_bcolor)
    // document.querySelector('#view-note').style.backgroundColor = '#fffaf3'
    asideStatus = 'closed'
    const i = document.querySelector('#close')
    i.remove()
    const span = document.querySelector('#aside_toggle')
    span.insertAdjacentHTML('beforeend', openButton())
    // document.querySelector('.container').style.gridTemplateColumns = '50px 1fr';
}

//OPEN SAVED NOTE

function defineSavedNoteSection() {
    html = '\
    <div id="note-area">\
        <div id="note" contenteditable="false"></div>\
        <button onclick="cleanUp()" class="button" id="left_button"><a>close</a></button>\
    </div>\
    '
    return html
}

function defineOpenNoteContent(index) {
    console.log(notesArray[index].body);
    html =  '<h3>' + notesArray[index].title + '</h3>\n'
    bodyArray = notesArray[index].body.split("\n")
    for (const i of bodyArray) {
        html += '<p>' + i + '</p>\n'
    }
    return html
}

function openNote(index) {
    const createMessage = document.querySelector('#create_message')
    createMessage.remove()
    const div = document.querySelector('#content')
    div.insertAdjacentHTML('beforeend', defineSavedNoteSection())
    const noteArea = document.querySelector('#note')
    noteArea.insertAdjacentHTML('beforebegin', defineOpenNoteContent(index))
    console.log('writing area created')
    applyTheme()
}

//DARK AND LIGHT THEME BUTTON

var themeColor = 'light'

var header_bcolor = '#faf4ed'

var body_bcolor = '#fffaf3'

var footer_bcolor = '#faf4ed'

var aside_bcolor = '#f2e9de'

var text_color = '#575279'

var button_color = '#56949f'

var note_heading_color = '#eb6f92'

const darkThemeColors = {
    header_bcolor: '#191724', body_bcolor: '#1f1d2e', footer_bcolor: '#191724',
    aside_bcolor: '#26233a', text_color: '#e0def4', button_color: '#9ccfd8',
    note_heading_color: '#c4a7e7'
}

const lightThemeColors = {
    header_bcolor: '#faf4ed', body_bcolor: '#fffaf3', footer_bcolor: '#faf4ed',
    aside_bcolor: '#f2e9de', text_color: '#575279', button_color: '#56949f',
    note_heading_color: '#907aa9'
}

function toggleTheme() {
    const theme = document.getElementById("theme_button")
    console.log(theme.firstChild.nodeValue)
    if (theme.firstChild.nodeValue == 'Dark Theme') {
        darkTheme(theme)
    }
    else {
        lightTheme(theme)
    }
}

function darkTheme(theme) {
    header_bcolor = darkThemeColors.header_bcolor
    body_bcolor = darkThemeColors.body_bcolor
    footer_bcolor = darkThemeColors.footer_bcolor
    body_bcolor = darkThemeColors.body_bcolor
    aside_bcolor = darkThemeColors.aside_bcolor
    text_color = darkThemeColors.text_color
    button_color = darkThemeColors.button_color
    note_heading_color = darkThemeColors.note_heading_color
    theme.firstChild.nodeValue = 'Light Theme'
    applyTheme()
}

function lightTheme(theme) {
    header_bcolor = lightThemeColors.header_bcolor
    body_bcolor = lightThemeColors.body_bcolor
    footer_bcolor = lightThemeColors.footer_bcolor
    body_bcolor = lightThemeColors.body_bcolor
    aside_bcolor = lightThemeColors.aside_bcolor
    text_color = lightThemeColors.text_color
    button_color = lightThemeColors.button_color
    note_heading_color = lightThemeColors.note_heading_color
    theme.firstChild.nodeValue = 'Dark Theme'
    applyTheme()
}

function applyTheme() {
    document.querySelector('header').style.backgroundColor = header_bcolor;
    document.body.style.backgroundColor = body_bcolor;
    document.querySelector('footer').style.backgroundColor = footer_bcolor;
    document.body.style.color = text_color;
    const main_text = document.querySelectorAll('a');
        main_text.forEach(
            el => { el.style.color = button_color
    });
    const buttons = document.querySelectorAll('i');
        buttons.forEach(
            el => { el.style.color = button_color
    });
    const open_note_text = document.querySelectorAll('p');
        open_note_text.forEach(
            el => { el.style.color = text_color
    });
    const create_note_text = document.querySelectorAll('[contenteditable] > div');
        create_note_text.forEach(
            el => { el.style.color = text_color
    });
    const open_note_heading = document.querySelectorAll('[contenteditable]');
        open_note_heading.forEach(
            el => { el.style.color = note_heading_color
    });
    const create_note_heading = document.querySelectorAll('h3');
        create_note_heading.forEach(
            el => { el.style.color = note_heading_color
    });
    if (asideStatus == 'closed') {
        document.querySelector('aside').style.backgroundColor = body_bcolor;
    }
    else {
        document.querySelector('aside').style.backgroundColor = aside_bcolor;
    }
    toggleSavedNotesSection()
    toggleSavedNotesSection()
}
const express = require('express')
const path = require('path')

const app = express()

const PORT = 7865
const STATIC_DIR = 'public'

app.use(express.static(path.join(__dirname, STATIC_DIR)))

app.get(['/', '/main', '/index'], (req, res) => 
    res.sendFile(`${__dirname}/${STATIC_DIR}/index.html`))

app.get(['/about', '/about.html'], (req, res) => 
    res.sendFile(`${__dirname}/${STATIC_DIR}/about.html`))

const startedApp = app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${startedApp.address().port}!`)
})
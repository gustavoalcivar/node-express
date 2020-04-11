const express = require('express')
const puerto = process.env.PORT || 8080
const app = express()

const hbs = require('hbs')
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    /*const resp = {
        nombre: 'Gustavo',
        apellido: 'Alcívar',
        ciudad: 'Portoviejo',
        url: req.url
    }
    res.send(resp)*/
    res.render('home', {
        nombre:'gustavo'
    })

})

app.get('/about', (req, res) => {
    res.render('about')

})

app.listen(puerto, () => console.log(`Escuchando el puerto ${puerto}`))
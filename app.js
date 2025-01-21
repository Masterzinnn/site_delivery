const express = require('express'); 
const app = express()
const path = require('path');
const { engine } = require('express-handlebars');
const handlebars = require('express-handlebars');
// Handlebars

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// Public
app.use(express.static(path.join(__dirname, 'public')));
// Rotas
app.get('/', (req, res) => {
    res.render('inicial')
})
app.get('/planos', (req, res) => {
    res.render('planos')
})
app.get('/login', (req, res) => {
    res.render('login')
})
// Porta
app.listen(9091, () => {
    console.log('Servidor aberto na porta 9091!');
})
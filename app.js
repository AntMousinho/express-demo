const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('pages/index')
})

app.post('/name', (req, res) => {
	res.render('pages/name', { inputName: req.body.inputName });
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
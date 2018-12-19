const reload = require('reload')
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var compression = require('compression')
var helmet = require('helmet')
const path = require('path')
var PORT = process.env.PORT || 8000


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(helmet())


// STATIC FOLDER
app.use(express.static(path.join(__dirname, 'purplebricks/build')))


// ROUTES
app.use(require('./routes/search'))
app.use(compression())


// SERVER
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
})


// LIVERELOAD
reload(app, {
  verbose: true
})
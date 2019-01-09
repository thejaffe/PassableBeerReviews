const express     = require('express'),
      app         = express();
      ejs         = require('ejs');
      bodyParser  = require('body-parser'),
      PORT        = process.env.PORT || 8080,
      compression = require('compression');

const routes  = require('./routes/routes');

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(compression());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});

const express = require('express'),
      app     = express()
      ejs     = require('ejs');

const indexRoutes  = require('./routes/index'),
      reviewRoutes = require('./routes/reviews');

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/public'));

app.use(indexRoutes);
app.use('/reviews', reviewRoutes);

app.listen(3000, function(){
  console.log('Server is listening on port 3000');
});

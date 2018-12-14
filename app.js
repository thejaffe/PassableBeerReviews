const express = require('express'),
      app     = express()
      ejs     = require('ejs');
      PORT    = process.env.PORT || 8080

const indexRoutes  = require('./routes/index'),
      reviewRoutes = require('./routes/reviews');

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/public'));

app.use(indexRoutes);
app.use('/reviews', reviewRoutes);

app.listen(PORT, () => {
  console.log('Server is listening on port ${PORT}...');
});

const testModules = require('./test-module');
// require('../css/app.css');
require('../scss/index.scss');

/********** Paste your code here! ************/

$(".ui.rating").rating({
  initialRating: 3,
  maxRating: 5
});

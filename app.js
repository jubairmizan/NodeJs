const express = require('express'); // import express js library
const path = require('path'); // import nodejs path for assign view file
const bodyParser = require('body-parser'); // import bodyParser for getting input data on terminal
const adminRoutes = require('./routes/admin'); // import admin routes file
const shop = require('./routes/shop'); // import shop/website routes file
const OtherController = require('./controllers/OtherController');

// Express Js Starting
const app = express();

// PUG library template engine setup for views engine extension
app.set('view engine','ejs');
// PUG library template engine views folder assigned default is views folder we have to call that if we called views folder with another name
app.set('views','views');

// BodyParser library called for getting input data on browser with terminal 
app.use(bodyParser.urlencoded({extended:false}));
// Below code written for all assets assign in public folder for that we dont write public folder while link with any css/js/image or any other file 
app.use(express.static(path.join(__dirname,'public')));

// Admin Routes called with /admin middleware
app.use('/admin',adminRoutes);

// Website/Shop page routes called
app.use(shop);

// If above routes are not called than called this routes.
app.use(OtherController.notFound);

// Node server port assign 
app.listen(3000);

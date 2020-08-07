const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Product');

console.log("Env: " + process.env.toString());
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: { authSource: 'admin'},
    user: keys.mongoUser,
    pass: keys.mongoPass
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("connected");
});

const app = express();

require('./routes/productRoutes')(app);
if (process.env.NODE_ENV == 'production'){
    //Express will serve up production assets
    app.use(express.static('client/build'));
    //Express will server index.html file if doesn't recognize de file
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});

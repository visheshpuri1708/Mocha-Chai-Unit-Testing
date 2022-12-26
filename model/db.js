const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);

mongoose.connect(process.env.localdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log("Database Connected")
    } else {
        console.log("Error connecting to database", +err)
    }
}
);
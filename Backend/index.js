const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const hotelsRoutes = require('./routes/hotelsRoutes');
const placesRoutes = require('./routes/placesRoutes')

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// database connection
mongoose.set('strictQuery', false);
const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Mongodb connection established');
    } catch (error) {
        console.error('Error connecting to Mongo', error);
    }
};
// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/api', hotelsRoutes);
app.use('/api', placesRoutes);

app.listen(port, () => {
    connectdb();
    console.log(`app listening on ${port}`);
});

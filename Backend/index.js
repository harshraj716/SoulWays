const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./models'); 
const hotelsRoutes = require('./routes/hotelsRoutes');
const placesRoutes = require('./routes/placesRoutes');
const userRoutes =require('./routes/userRoute')
const guideRoutes = require('./routes/guideRoutes')
const bookingRoutes = require('./routes/bookingRoute')
const userReviewRoutes = require('./routes/reviewRoute');
const userRestroRoutes = require('./routes/restaurantRoutes');


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


// Routes
app.use('/api', hotelsRoutes);
app.use('/api', placesRoutes);
app.use('/api', userRoutes);
app.use('/api', guideRoutes);
app.use('/api', bookingRoutes);
app.use('/api',userReviewRoutes)
app.use('/api', userRestroRoutes)

// Connect to Sequelize
async function connectdb() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Start the server
app.listen(port, async () => {
  await connectdb();
  console.log(`App listening on port ${port}`);
});

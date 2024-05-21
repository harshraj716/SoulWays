const { HotelBooking,Hotel,User,TourBooking,Place,Tourist,Guide } = require('../models');

const createHotelBooking = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, checkInDate, checkOutDate, members, hotelId ,userId,totalPrice} = req.body;
    const HotelBookings = await HotelBooking.create({
      fullName,
      email,
      phoneNumber,
      checkInDate,
      checkOutDate,
      members,
      totalPrice,
      hotelId,
      userId 
    });

    return res.status(201).json({ HotelBookings });
  } catch (error) {
    console.error('Error creating booking:', error);
    return res.status(500).json({ error: 'An error occurred while creating the booking' });
  }
};

const createTourBooking = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      tourDate,
      guide,
      userId,
      placeId,
      tourGuideId,
      touristId,
    } = req.body;

    const booking = await TourBooking.create({
      fullName,
      email,
      phoneNumber,
      tourDate,
      guide,
      userId,
      placeId,
      tourGuideId,
      touristId
    });

    return res.status(201).json({ booking });
  } catch (error) {
    console.error('Error creating tour booking:', error);
    return res.status(500).json({ error: 'An error occurred while creating the tour booking' });
  }
};



const getBookings = async (req, res) => {
    try {
      const userId = req.params.id;
      const HotelBookings = await HotelBooking.findAll({
        where: { userId },
        include: [
            { model: Hotel, as: 'hotels' }, 
            { model: User, as: 'users' }   
        ]
    });
  
      return res.status(200).json({ HotelBookings });
    } catch (error) {
      console.error('Error fetching user bookings:', error);
      return res.status(500).json({ error: 'An error occurred while fetching user bookings' });
    }
  };

  const getTourBookings = async (req, res) => {
    try {
      const userId = req.params.id;
      const TourBookings = await TourBooking.findAll({
        where: { userId },
        include: [
            { model: Place, as: 'TourBookingPlace' }, 
            { model: User, as: 'TourBookingUsers' }  ,
            { model: Tourist, as: 'TourBookingTouristPlace' }   ,
            { model: Guide, as: 'TourBookingGuide' }   ,
        ]
    });
  
      return res.status(200).json({ TourBookings });
    } catch (error) {
      console.error('Error fetching user bookings:', error);
      return res.status(500).json({ error: 'An error occurred while fetching user bookings' });
    }
  };

module.exports = {
  createHotelBooking,getBookings,createTourBooking,getTourBookings
};

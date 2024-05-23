import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './context/AuthContext';
import Header from './component/Header';
import Footer from './component/Footer/Footer';
import LoginOrSign from './Page/LoginOrSign';
import HomeLayout from './Page/HomeLayout'
import Home from './component/HomeSection/Home'
import ContactUs from './Page/ContactPage/ContactUs'
import ProtectedRoute from './CommomData/ProtectedRoute'
import HotelCard from './Page/HotelsPage/HotelCard'
import AboutPage from './Page/AboutSection/AboutPage'
import HotelDetails from './Page/HotelsPage/HotelDetails'
import HotelTour from './component/HotelBookingList/HotelTour';
import UserProfile from './component/UserProfile';
import PlaceCard from './Page/PlacesPage/placeCard';
import PlaceDetails from './Page/PlacesPage/placeDetails';
import TourBookingList from './component/TourBookingsList.js/TourList'
import GuideCard from './Page/GuidePage/GuideCard';
import Restaurant from './Page/RestaurantPage/Home';
import RestroDishes from './Page/RestaurantPage/RestroDishes'


const App = () => {
    return (
        <div>
            <AuthContextProvider>
                <Router>
                    <Toaster position="top-center" reverseOrder={false} />
                    <AppContent />
                </Router>
            </AuthContextProvider>
        </div>
    );
}

const AppContent = () => {
    const location = useLocation()
    
    return (
        <div>
            {location.pathname !== '/login' && <Header />}
            <Routes>
                <Route path="/login" element={<LoginOrSign/>} />
                <Route path="/" element={<HomeLayout><Home /></HomeLayout>} />
                <Route path="/about" element={<AboutPage />} /> 
                 <Route path="/hotels" element={<ProtectedRoute><HotelCard /></ProtectedRoute>} />
                <Route path="/hotels/:id" element={<ProtectedRoute><HotelDetails/></ProtectedRoute>} />
                 <Route path="/user/hoteltour" element={<ProtectedRoute><HotelTour/></ProtectedRoute>} />
                <Route path="/user/profile" element={<ProtectedRoute><UserProfile/></ProtectedRoute>} />
                <Route path="/places-to-visit" element={<ProtectedRoute><PlaceCard/></ProtectedRoute>} />
                <Route path="/places-to-visit/:id" element={<ProtectedRoute><PlaceDetails/></ProtectedRoute>} />
                <Route path="/user/tour-list" element={<ProtectedRoute><TourBookingList/></ProtectedRoute>} />
                <Route path="/guides" element={<ProtectedRoute><GuideCard/></ProtectedRoute>} />
                <Route path="/restaurants" element={<ProtectedRoute><Restaurant/></ProtectedRoute>} />
                <Route path="/restaurants/dishes/:id" element={<ProtectedRoute><RestroDishes/></ProtectedRoute>} />   
                 <Route path="/contact-us" element={<ProtectedRoute><ContactUs/></ProtectedRoute>} />
            </Routes>
            {location.pathname !== '/login' && <Footer />}
        </div>
    );
}

export default App;

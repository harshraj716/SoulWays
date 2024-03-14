import "./App.css";
import { Toaster } from "react-hot-toast";
import LoginOrSign from "./Page/LoginOrSign";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeLayout from "./Page/HomeLayout";
import Home from "./component/HomeSection/Home";
import AboutPage from "./component/AboutSection/AboutPage";
import Header from "./component/Header";
import Footer from "./component/Footer/Footer";
import HotelCard from "./Page/HotelsPage/HotelCard";
import HotelDetails from "./Page/HotelsPage/HotelDetails";

function App() {
  return (
    <>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
         <Header/>
        <Routes>
          <Route path="/login" element={<LoginOrSign />} />
          <Route
            path="/"
            element={
              <HomeLayout>
                <Home />
              </HomeLayout>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hotels" element={<HotelCard />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

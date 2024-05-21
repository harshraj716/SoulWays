import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const BASE_URL = "http://localhost:8000";

const Review = ({ hotelDetails }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    reviews: "",
  });
  const [showAllReviews, setShowAllReviews] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/users/review`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`${BASE_URL}/api/users/review`, {
        ...newReview,
        hotelId: hotelDetails.id,
        userId: user.id
      });
      window.location.reload();
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };
  
  

  const displayReviews = showAllReviews ? reviews : reviews.slice(0, 5);

  return (
    <div>
      <div>
        <div className="flex flex-col gap-3 mb-[2.5rem] p-[2rem] rounded-lg border border-solid">
          <div>
            <h4 className="text-xl font-bold">Reviews</h4>
          </div>
          <div className="flex items-center justify-between pl-4 pr-4 rounded-[2rem] border border-orange">
            <input
              type="text"
              placeholder="Share your thoughts"
              className="w-3/4 border-none focus:outline-none"
              value={newReview.reviews}
              onChange={(e) => setNewReview({ reviews: e.target.value })} 
            />

            <button className="btn !w-25 !h-30" onClick={handleReviewSubmit}>
              Submit
            </button>
          </div>
          {displayReviews.map((review, index) => (
            <div key={index} className="flex items-center p-4 rounded-lg mb-4">
              <Avatar
                name={review?.usersReviews?.username}
                size="40"
                round={true}
                className="mr-4"
              />
              <div className="flex flex-col">
                <div>
                  <h3 className="text-md font-semibold">
                    {review?.usersReviews?.username}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {formatDate(review.createdAt)}
                  </p>
                </div>
                <p className="text-gray-600 mt-2">{review.reviews}</p>
              </div>
            </div>
          ))}
                {reviews.length > 5 && (
            <button
              className="btn !w-25 !h-30 !text-sm"
              onClick={() => setShowAllReviews(!showAllReviews)}
            >
              {showAllReviews ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;

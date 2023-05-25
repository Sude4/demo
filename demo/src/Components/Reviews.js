import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    userId: '',
    productId: '',
    rating: '',
    comments: ''
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:3002/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Reviews getirilirken hata oluştu:', error);
    }
  };

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3002/reviews', newReview);
      fetchReviews(); // Güncel review'ları tekrar getir
      setNewReview({ // Yeni review formunu sıfırla
        userId: '',
        productId: '',
        rating: '',
        comments: ''
      });
    } catch (error) {
      console.error('Review eklenirken hata oluştu:', error);
    }
  };
//   yeni ürün eklenebiliyor  hepsini veritabanına kaydediyor
  return (
    <div className="flex justify-center">


      <div className="grid grid-cols-5 gap-4 mt-8">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`bg-pink-100 rounded p-4 ${
              index === 0 ? 'self-start' : 'self-center'
            }`}
          >
            <p className="mb-2">
              <span className="font-semibold">User ID:</span> {review.userId}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Product ID:</span> {review.productId}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Rating:</span> {review.rating}
            </p>
            <p>
              <span className="font-semibold">Comments:</span> {review.comments}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

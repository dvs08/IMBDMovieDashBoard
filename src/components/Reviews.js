import React from 'react';
import '../styles/movie.css';

const Review = ({author, revText, date}) => {
    return (
        <div className="review-card">
            <h3>A Review by <span style={{color:"yellow"}}>{author}</span></h3>
            <p className="review-text">"{revText}"</p>
            <p>Written on {date}</p>
        </div>
    );
};

export default Review;

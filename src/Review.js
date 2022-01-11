import React, { useState } from 'react';
import {data} from './data';

function Review() {
  let [slideIndex, setSlideIndex] = useState(0);
 
  const handleNextSlide = () => {
    let next = slideIndex === data.length - 1 ? 0 : slideIndex + 1;
    setSlideIndex(next);
  };

  const handlePrevSlide = () => {
    let prev = slideIndex === 0 ? data.length -1 : slideIndex - 1;
    setSlideIndex(prev);
  };
     
  return <>
      <h1 className="review-heading">Our Reviews</h1>
      <hr/>
      <section>
        <article className="content">
          <div className="image-container">
            <img className="person-image"
              src={data[slideIndex].image_url}
              alt="images"
              />
              <span className="quote-icon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z">
                </path>
                </svg>
              </span>
          </div>
          <h5 className="person-name">{data[slideIndex].name}</h5> 
          <h5 className="person-skill">{data[slideIndex].skill}</h5>
          <p className="person-desc">{data[slideIndex].description}</p>
          <div className="navigator">
          <button onClick={handlePrevSlide}><i className="fas fa-less-than"></i></button>
          <button onClick={handleNextSlide}><i className="fas fa-greater-than"></i></button>
          </div>      
        </article>
      </section>
  </>  
}

export default Review;
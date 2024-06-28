import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './EventPages.css'; // 스타일을 위한 CSS 파일

const EventPages = () => {
  const events = [
    { id: 1, image: 'https://i.ibb.co/FKvXbwS/2024-06-07-151150.png' },
    { id: 2, image: 'https://i.ibb.co/Pt6qx24/2024-06-07-152034.png' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="event-banner-slider">
      <Slider {...settings}>
        {events.map(event => (
          <div key={event.id}>
            <img src={event.image} alt={`Event ${event.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventPages;

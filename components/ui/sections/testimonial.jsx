"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample YouTube video data
const videoTestimonials = [
  {
    title: "Testimonial 1",
    videoUrl: "https://www.youtube.com/embed/kHxsdK24U-k?si=SNXAy3QX2MsQqCvo", // Replace with actual video URL
  },
  {
    title: "Testimonial 2",
    videoUrl: "https://www.youtube.com/embed/lsF2WBzwPcI?si=5Jx5OahClWkNDkrU", // Replace with actual video URL
  },
  {
    title: "Testimonial 3",
    videoUrl: "https://www.youtube.com/embed/Dyw_VrGNzT4?si=JyLhr67g2NVXbb4k", // Replace with actual video URL
  },
];

// Previous arrow for slider
const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <button className="slide-arrow optech-t-next" onClick={onClick}>
      <i className="ri-arrow-left-s-line"></i>
    </button>
  );
};

// Next arrow for slider
const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <button className="slide-arrow optech-t-prev" onClick={onClick}>
      <i className="ri-arrow-right-s-line"></i>
    </button>
  );
};

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 800,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="section optech-section-padding dark-bg" style={{ backgroundColor: "#06732a" }}>
      <div className="container">
        <Slider {...settings} className="optech-1column-slider">
          {/* Render video testimonials */}
          {videoTestimonials.map((item, i) => (
            <div key={i} className="video-wrapper">
              <iframe
                width="100%"
                height="400px"
                src={item.videoUrl}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

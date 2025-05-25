import { useEffect, useRef } from "react";
import "./SlideShow.css";

import CWImage1 from "../../assets/CWImage/CWImage1.png";
import CWImage2 from "../../assets/CWImage/CWImage2.png";
import CWImage3 from "../../assets/CWImage/CWImage3.png";
import CWImage4 from "../../assets/CWImage/CWImage4.png";
import CWImage5 from "../../assets/CWImage/CWImage5.png";
import CWImage6 from "../../assets/CWImage/CWImage6.png";
import CWImage7 from "../../assets/CWImage/CWImage7.png";
import CWImage8 from "../../assets/CWImage/CWImage8.png";
import CWImage9 from "../../assets/CWImage/CWImage9.png";
import CWImage10 from "../../assets/CWImage/CWImage10.png";

const images = [
  CWImage1,
  CWImage2,
  CWImage3,
  CWImage4,
  CWImage5,
  CWImage6,
  CWImage7,
  CWImage8,
  CWImage9,
  CWImage10,
];

const SlideShow = () => {
  const sliderRef = useRef(null);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;
    let x = 0;

    const animate = () => {
      x -= 1.8; // scroll speed
      if (x <= -slider.scrollWidth / 2) x = 0;
      slider.style.transform = `translateX(${x}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        {duplicatedImages.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;

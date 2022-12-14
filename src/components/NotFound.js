import { useRef } from "react";
import { useGsapNotFoundHeadline, useGsapNotFoundImg } from "../hooks/gsap";

const NotFound = () => {
  const leftHeadlineRef = useRef(null);
  const rightHeadlineRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useGsapNotFoundHeadline(leftHeadlineRef);
  useGsapNotFoundHeadline(rightHeadlineRef, "100vw");
  useGsapNotFoundImg(leftImgRef);
  useGsapNotFoundImg(rightImgRef);

  return (
    <div className="not-found wrapper">
      <div className="headline-1" ref={leftHeadlineRef}>
        Sorry, we couldn't
      </div>
      <div className="img-1" ref={rightImgRef}>
        <img
          src="https://i.pinimg.com/736x/70/83/da/7083da31183678926e161559436b5d22--vintage-cars-vintage-stuff.jpg"
          alt="Woman Sitting on a Hood of an Old Volkswagen Golf Car"
        />
      </div>
      <div className="img-2" ref={leftImgRef}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/431/023/non_2x/retro-items-on-brown-background-vector.jpg"
          alt="Woman showing retro photo camera and holding blooming flower"
        />
      </div>
      <div className="headline-2" ref={rightHeadlineRef}>
        Find that page
      </div>
    </div>
  );
};

export default NotFound;

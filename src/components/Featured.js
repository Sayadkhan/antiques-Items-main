import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnveil,
  useGsapFeatureRightShutterUnveil,
} from "../hooks/gsap";

const Featured = () => {
  const featureRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useGsapFeatureLeftShutterUnveil(featureLeftShutterRef, featureRef);
  useGsapFeatureRightShutterUnveil(featureRightShutterRef, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title">Featured</h2>
      <div className="features">
        <div className="feature-l">
          <span className="feature-text" style={{ color: "#d53f41" }}>
            THE FIRST ELECTRICT CAR
          </span>
          <img
            src="https://www.historyhit.com/app/uploads/2022/04/Electric-car-1910s-750px.jpg"
            alt="THE FIRST ELECTRICT CAR"
          />
          <span
            className="feature-shutter-l"
            ref={featureLeftShutterRef}
          ></span>
        </div>
        <div className="feature-r">
          <span className="feature-text" style={{ color: "#d53f41" }}>
            ANTIQUE CAST IRON
          </span>
          <img
            src="https://a.1stdibscdn.com/antique-cast-iron-amish-man-and-woman-couple-bookends-a-pair-for-sale/f_9341/f_298727121659712936141/f_29872712_1659712936684_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=1318"
            alt="ANTIQUE CAST IRON"
          />
          <span
            className="feature-shutter-r"
            ref={featureRightShutterRef}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;

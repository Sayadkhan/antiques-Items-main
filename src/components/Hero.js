import { useRef } from "react";

import { useGsapShutterUnveil } from "../hooks/gsap";
const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.2, heroRef);
  return (
    <section
      className="hero"
      ref={heroRef}
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/vintage-furniture-antique-store_23-2149640753.jpg?w=1380&t=st=1671025399~exp=1671025999~hmac=3f35b7b12f7464f8f5460eeaa9e63a9c3f6094eda8919110da7994818bcdf035)",
      }}
    >
      <h1 className="antique" style={{ color: "white" }}>
        Golden Era <span ref={shutter1}></span>
      </h1>
      <h1 className="collectibles" style={{ color: "white" }}>
        Antigues <span ref={shutter2}></span>
      </h1>
    </section>
  );
};

export default Hero;

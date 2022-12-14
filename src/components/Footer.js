import { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadlineRef = useRef(null);

  useGsapFooterHeadline(footerHeadlineRef, footerRef);

  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHeadlineRef}>Antiques</h1>
      <p>© {new Date().getFullYear()} Antiques. Crafted by yours truly</p>
    </section>
  );
};

export default Footer;

import React from "react";

const FadeInAnimation = (props) => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    const currentRef = domRef.current; 
    return () => {
      observer.unobserve(currentRef); 
    };
  }, []);

  return (
    <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
      {props.children}
    </div>
  );
};

export default FadeInAnimation;

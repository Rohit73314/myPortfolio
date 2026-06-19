import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const currentRef = counterRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return undefined;
    let startTime;
    let frame;

    // Parse number + suffix automatically from string values like "1.5+", "100%"
    const str = typeof end === "string" ? end : String(end);
    const match = str.match(/^(-?\d*\.?\d+)(.*)$/);
    const targetNum = match ? parseFloat(match[1]) : 0;
    const autoSuffix = match ? match[2] : "";
    const isFloat = targetNum % 1 !== 0;
    const finalSuffix = suffix || autoSuffix;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const pct = Math.min(progress / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - pct, 4);
      const value = easeOutQuart * targetNum;
      setCount(isFloat ? value.toFixed(1) : Math.floor(value));
      if (pct < 1) frame = requestAnimationFrame(animate);
      else setCount(isFloat ? targetNum.toFixed(1) : targetNum);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, [isVisible, end, duration, suffix]);

  // Use the extracted suffix when rendering
  const str = typeof end === "string" ? end : String(end);
  const match = str.match(/^(-?\d*\.?\d+)(.*)$/);
  const renderSuffix = suffix || (match ? match[2] : "");

  return (
    <span ref={counterRef}>
      {count}
      {renderSuffix}
    </span>
  );
};

AnimatedCounter.propTypes = {
  end: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  duration: PropTypes.number,
  suffix: PropTypes.string
};

export default AnimatedCounter;

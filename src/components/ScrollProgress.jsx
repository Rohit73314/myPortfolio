import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500"
        style={{ width: `${progress}%`, transition: "width 120ms linear" }}
      />
    </div>
  );
};

export default ScrollProgress;

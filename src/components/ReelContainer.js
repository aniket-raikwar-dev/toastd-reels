import React, { useRef, useState, useEffect } from "react";
import Reel from "./Reel";

const reelsData = [
  {
    title: "Green Signal Nature Vibes",
    videoSrc: "/videos/Green.mp4",
    link: "",
    products: [
      {
        name: "Signals",
        link: "/product/3",
        position: { top: "30%", left: "50%" },
      },
    ],
  },
  {
    title: "I loves mac products",
    videoSrc: "/videos/AppleIpad.mp4",
    link: "",
    products: [
      {
        name: "Macbook Pro",
        link: "/product/1",
        position: { top: "20%", left: "40%" },
      },
      {
        name: "Mac Ipad",
        link: "/product/2",
        position: { top: "50%", left: "60%" },
      },
    ],
  },
  {
    title: "Visual of Song",
    link: "",
    videoSrc: "/videos/Visual.mp4",
    products: [],
  },
  {
    title: "Disney Cars (2006)",
    link: "",
    videoSrc: "/videos/Cars.mp4",
    products: [
      {
        name: "Ligthning McQueen",
        link: "/product/2",
        position: { top: "70%", left: "40%" },
      },
    ],
  },
  {
    title: "Refreshment in Nature",
    link: "",
    videoSrc: "/videos/Refreshment.mp4",
    products: [],
  },
  {
    title: "Vintage Alaska",
    link: "",
    videoSrc: "/videos/VintageAlaska.mp4",
    products: [],
  },
];

const ReelContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = containerRef.current?.children;
    if (elements) {
      Array.from(elements).forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full md:w-[450px] lg:w-[450px] snap-y snap-mandatory overflow-y-scroll scroll-container"
    >
      {reelsData.map((reel, index) => (
        <div key={index} className="snap-start" data-index={index}>
          <Reel reel={reel} isActive={index === activeIndex} />
        </div>
      ))}
    </div>
  );
};

export default ReelContainer;

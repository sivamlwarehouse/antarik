"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ src, alt, title, points }) => (
  <div className="py-6  " data-aos="fade-up" data-aos-once="true">
    <div className="flex w-64 h-[300px]  flex-col justify-start pt-7 items-center border border-transparent border-b-0 rounded-lg hover:border-red-500">
      <Image src={src} alt={alt} width={60} height={60} />
      <div className="mt-6 gap-2 flex flex-col">
        <h1 className="w-48 text-center text-2xl font-medium">{title}</h1>
        <ul className="list-disc pl-[15px] font-extralight w-full  text-lg flex flex-col gap-[4px]">
          {points.map((point, index) => (
            <li key={index} >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

function CardsAntarik() {
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  const cardData = [
    {
      src: "/images/mingcute_earth.png",
      alt: "Global Coverage",
      title: "Global Coverage",
      points: ["Global Insights", "Forecast Precision", "Constellation Reach"],
    },
    {
      src: "/images/clipboard-data.png",
      alt: "Expert Team",
      title: "Expert Team",
      points: ["Field Specialists", "Analytical Expertise"],
    },
    {
      src: "/images/satellite-antenna.png",
      alt: "Technology",
      title: "Technology",
      points: ["AI Models", "Data Fusion", "Predictive Analytics"],
    },
    {
      src: "/images/Group 48.png",
      alt: "Solutions",
      title: "Solutions",
      points: ["Agro Recommendations", "Weather Insights", "Sector Analysis", "Implementation Strategy"],
    },
  ];

  return (
    <div className="bg-cover bg-center bg-black text-white lg:bg-[url('/images/Team_image.png')]">
      <div className="px-6 lg:px-24">
        <div className="py-5 flex flex-col md:flex-row flex-wrap items-center justify-between">
          {cardData.map((card, index) => (
            <Card
              key={index}
              src={card.src}
              alt={card.alt}
              title={card.title}
              points={card.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardsAntarik;

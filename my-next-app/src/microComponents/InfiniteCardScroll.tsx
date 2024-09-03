import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";

export interface Card {
  id: number;
  title: string;
  category: string;
  day: number;
  month: number;
  year: number;
  img: string;
  text: string;
}

const InfiniteCardScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrolling, setScrolling] = useState(true);
  const [cardsData, setCardsData] = useState<Card[] | null>(null);
  const router = useRouter();

  const macedonianMonths = [
    "Јануари",
    "Февруари",
    "Март",
    "Април",
    "Мај",
    "Јуни",
    "Јули",
    "Август",
    "Септември",
    "Октомври",
    "Ноември",
    "Декември",
  ];

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        setCardsData(data);
      });
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleMouseEnter = () => {
      setScrolling(false);
    };

    const handleMouseLeave = () => {
      setScrolling(true);
    };

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("wheel", handleScroll);

    const scrollInterval = setInterval(() => {
      if (scrolling && container) {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 2;
        }
      }
    }, 8); // Adjust speed

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("wheel", handleScroll);
      clearInterval(scrollInterval);
    };
  }, [scrolling]);

  return (
    <div className="shadersRefPoint">
      <div ref={containerRef} className="bgScroll">
        <div className="bgScroll"></div>
        <div className="bgScroll"></div>
        {cardsData &&
          cardsData.map((card) => (
            <div
              className="cardsContainer"
              key={card.id}
              style={{
                backgroundImage: `url(/eventsImg/${card.img})`,
              }}
              onClick={() => router.push(`/events/${card.id}`)}
            >
              <p>{card.category}</p>
              <p>{card.title}</p>
              <p className="monthP">{macedonianMonths[card.month - 1]}</p>
              <p className="dayP">{card.day}</p>
            </div>
          ))}
        {cardsData &&
          cardsData.map((card) => (
            <div
              className="cardsContainer"
              key={card.id}
              style={{
                backgroundImage: `url(/eventsImg/${card.img})`,
              }}
              onClick={() => router.push(`/events/${card.id}`)}
            >
              <p>{card.category}</p>
              <p>{card.title}</p>
              <p className="monthP">{macedonianMonths[card.month - 1]}</p>
              <p className="dayP">{card.day}</p>
            </div>
          ))}
        {cardsData &&
          cardsData.map((card) => (
            <div
              className="cardsContainer"
              key={card.id}
              style={{
                backgroundImage: `url(/eventsImg/${card.img})`,
              }}
              onClick={() => router.push(`/events/${card.id}`)}
            >
              <p>{card.category}</p>
              <p>{card.title}</p>
              <p className="monthP">{macedonianMonths[card.month - 1]}</p>
              <p className="dayP">{card.day}</p>
            </div>
          ))}
        {/* Repeat card elements as needed */}
      </div>
    </div>
  );
};

export default InfiniteCardScroll;

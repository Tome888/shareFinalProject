import AgendaConf from "@/components/AgendaConf";
import EventsDescriptionSection from "@/components/EventsDescriptionSection";
import FourCardsSection from "@/components/FourCardsSection";
import HeroSectionOne from "@/components/HeroSectionOne";
import PresentersConf from "@/components/PresentersConf";
import BreadCrumbs from "@/microComponents/BreadCrumbs";
import BuyTicket from "@/microComponents/BuyTicket";
import InfiniteCardScroll from "@/microComponents/InfiniteCardScroll";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export interface EventArticleProps {
  id: any;
  title: string;
  text: string;
  img: string;
  category: string;
  day: number;
  month: number;
  year: number;
}
function EventArticle() {
  const [eventData, setEventData] = useState<EventArticleProps | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.query.id) return;

    fetch(`http://localhost:5000/events?id=${router.query.id}`)
      .then((res) => res.json())
      .then((data: EventArticleProps[]) => {
        if (data.length > 0) {
          setEventData(data[0]);
        } else {
          setEventData(null);
        }
      })
      .catch((error) => {
        setEventData(null);
        console.error(error);
      });
  }, [router.query.id]);

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
  return eventData ? (
    <>
      <Head>
        <title>MHRA</title>
        <meta name="description" content="Event MHRA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSectionOne
        img={`/eventsImg/${eventData.img}`}
        smallTitle={"Настан"}
        title={eventData.category}
        smallTitleTwo={`${eventData.day} ${
          macedonianMonths[eventData.month - 1]
        } ${eventData.year}`}
      />
      <InfiniteCardScroll />
      <BreadCrumbs />

      <EventsDescriptionSection
        title={eventData.category}
        text={eventData.text}
      />
      <AgendaConf />
      <PresentersConf />

      <section className="section999">
        <div>
          <div>
            <h3>Цена за поединци</h3>
            <h3>500мкд</h3>
          </div>
          <div>
            <h3>Цена за компании</h3>
            <h3>5000мкд</h3>
          </div>
        </div>
        <div
          style={{ background: "url('/genericPhotos/croud.png')" }}
          className="bgDivEventId"
        >
          <BuyTicket />
          <button className="buttonAni">Предложи на пријател</button>
        </div>
      </section>
      <section>
        <h2>Слични настани</h2>
        <FourCardsSection typeCards={"events"} />
      </section>
    </>
  ) : (
    <h2>NOT FOUND</h2>
  );
}
export default EventArticle;

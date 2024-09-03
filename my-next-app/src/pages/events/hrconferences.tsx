import HeroSectionTwo from "@/components/HeroSectionTwo";
import CustomCalendar from "@/microComponents/Calendar";
import WhiteContainerText from "@/microComponents/WhiteContainerText";
import Head from "next/head";
import { useRouter } from "next/router";
import { Card } from "@/microComponents/InfiniteCardScroll";
import { useEffect, useState } from "react";
import EventCatDesc from "@/components/EventCatDesc";
import EventsCatIndividualPage from "@/components/EventsCatIndividualPage";
import BreadCrumbs from "@/microComponents/BreadCrumbs";

function HrConferences() {
  const router = useRouter();

  const [events, setEvents] = useState<Card[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data: Card[]) => setEvents(data));
  }, []);
  return (
    <>
      <Head>
        <title>MHRA</title>
        <meta name="description" content="Events MHRA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSectionTwo img1="/eventsImg/img5.jpg" img2="/eventsImg/img5.jpg">
        <>
          <WhiteContainerText
            title="ЧР Конференција"
            customClass="blogHeroWhiteWrapper"
            text="Овој четврток кафе на тема како да примените техники и чекори од селф коучинг за подобро да се водите себеси... | 25 Јули, 2024"
            miniTitle="Настан"
          />
          <button className="buttonAni" onClick={() => router.push("/")}>
            Купи карта
          </button>
        </>
      </HeroSectionTwo>
      <section className="calendarSection">
        <div className="calendarSecTextWrapper">
          <h2>Календар со датуми за сите претстојни настани</h2>
          <p>
            Погледни ги сите настани распоредени на календар. Со клик на
            обележаните настани можеш да дознаеш повеќе информации за секој од
            настаните но за целосни информации упатете се до индивидуалната
            страна на настанот
          </p>
        </div>
        <CustomCalendar arrEvents={events} />
      </section>
      <EventCatDesc titleCat={"ЧР Конференција"} />
      <EventsCatIndividualPage getCategory={"HR conferences"} />
    </>
  );
}

export default HrConferences;

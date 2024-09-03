import AgendaConf from "@/components/AgendaConf";
import FourCardsSection from "@/components/FourCardsSection";
import HeroSectionOne from "@/components/HeroSectionOne";
import BreadCrumbs from "@/microComponents/BreadCrumbs";
import BuyTicket from "@/microComponents/BuyTicket";
import InfiniteCardScroll from "@/microComponents/InfiniteCardScroll";
import PacketsCard from "@/microComponents/PacketsCard";
import Head from "next/head";

function YearlyConference() {
  const personalArr = ["1 седиште", "Пауза за ручек", "WiFi"];
  const corpArr = [
    "20 седишта",
    "Паузи за чај и кафе",
    "Пауза за ручек",
    "WiFi",
  ];

  return (
    <>
      <Head>
        <title>MHRA</title>
        <meta name="description" content="Conference MHRA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSectionOne
        img={"/genericPhotos/croud.png"}
        smallTitle={"Настан"}
        title={"13та меѓународна МАЧР конференција"}
        smallTitleTwo={"| 24-25 Декември, 2024"}
      />
      <InfiniteCardScroll />
      <BreadCrumbs />

      <section className="ConfFirst">
        <div className="leftConfFirst">
          <h2>13та меѓународна МАЧР конференција</h2>
          <div className="detailsConf">
            <div>
              <i className="fa-solid fa-calendar-days"></i>
              <p>24-25 Декември, 2024</p>
            </div>
            <div>
              <i className="fa-solid fa-location-pin"></i>
              <p>Хотел Континентал, Скопје</p>
            </div>
          </div>

          <p>
            Годишната меѓународна HR конференција, организирана од страна на
            Македонска асоцијација за човечки ресурси, има за цел да ги истражи
            и презентира најновите трендови и практики во областа на човечките
            ресурси кои ќе им помогнат на организациите да станат "future fit".
            Оваа конференција ќе ги собере најдобрите умови и лидери во HR за да
            дискутираат и разменат идеи за проактивни стратегии кои можат да ја
            трансформираат работната сила и да ја унапредат организациската
            ефикасност.
          </p>

          <BuyTicket />
        </div>
        <div className="rightConfFirst">
          <img
            className="bigPicConf"
            src="/genericPhotos/generic9.jpg"
            alt=""
          />
          <div className="bubbleConfDiv firstBubble">
            <img src="/genericPhotos/generic8.jpg" alt="" />
          </div>
          <div className="bubbleConfDiv secondBubble">
            <img src="/genericPhotos/generic6.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="ConfSecond">
        <div className="ConfSecondWhiteContainer">
          <div>
            <i className="fa-regular fa-calendar-days"></i>
            <div>
              <h3>2</h3>
              <p>Дена</p>
            </div>
          </div>
          <div>
            <i className="fa-regular fa-user"></i>

            <div>
              <h3>9</h3>
              <p>Неверојатни Спикери</p>
            </div>
          </div>
          <div>
            <i className="fa-solid fa-mug-saucer"></i>
            <div>
              <h3>6</h3>
              <p>Ресторани</p>
            </div>
          </div>
          <div>
            <i className="fa-solid fa-book"></i>

            <div>
              <h3>28</h3>
              <p>Едукативни книги</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ConfThird">
        <h2>Специјални гости</h2>
        <p>
          Ова се луѓе од кои дефинитивно има што да се научи. Нивните
          достигнувања се огромни и со нивна помош секторот на HR успеа да
          достигне нови височини. Не пропуштајте ја оваа прилика да ка слушнете,
          а и да научите нешто од нивната мудрост.
        </p>

        <div className="personWrapperConf">
          <div>
            <img
              className="firstTwoPhotos"
              src="/genericPhotos/generic9.jpg"
              alt=""
            />
            <div className="linkBuyTicket firstLink imDone">
              <i className="fa-brands fa-linkedin linkedinLink"></i>
              <div>
                <h4>Мајк Вазауски</h4>
                <p>CEO на “Монстер Инк”</p>
              </div>
            </div>
          </div>
          <div>
            <img className="firstTwoPhotos" src="/pfps/pfp2.jpg" alt="" />
            <div className="linkBuyTicket secondLink imDone">
              <div>
                <h4>Оливиа Оил</h4>
                <p>CO на “Спинак”</p>
              </div>
              <i className="fa-brands fa-linkedin linkedinLink"></i>
            </div>
          </div>
          <div>
            <img className="lastTwoPhotos" src="/pfps/pfp3.jpg" alt="" />
            <div className="linkBuyTicket thirdLink imDone">
              <i className="fa-brands fa-linkedin linkedinLink"></i>
              <div>
                <h4>Џејмс Суливан</h4>
                <p>Основач на “М.И.”</p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="lastTwoPhotos"
              src="/genericPhotos/generic3.jpg"
              alt=""
            />
            <div className="linkBuyTicket forthLink imDone">
              <div>
                <h4>Една Моде</h4>
                <p>Oсновач на “E”</p>
              </div>
              <i className="fa-brands fa-linkedin linkedinLink"></i>
            </div>
          </div>
        </div>
        <button className="buttonAni">Сите спикери</button>
      </section>
      <AgendaConf />

      <section className="quoteSection">
        <div className="quoteSectionLeft">
          <img src="/genericPhotos/generic9.jpg" alt="" />
          <i className="fa-solid fa-quote-right"></i>
        </div>
        <div className="quoteSectionRight">
          <h2>Mајк Вазауски</h2>

          <p>CEO на “Монстер Инк”</p>
          <p className="paraASD">
            Придружете се на нас за оваа исклучителна прилика да бидете дел од
            глобалната HR заедница и да придонесете за создавање на организации
            кои се подготвени за иднината преку проактивни HR стратегии.
            Конференцијата е дизајнирана да обезбеди инспирација, знаење и
            мрежни можности кои ќе им помогнат на HR професионалците да бидат
            подготвени за иднината.
          </p>
        </div>
      </section>

      <section className="packetSection">
        <h2>Пакети за поединци и корпорации</h2>
        <div>
          <PacketsCard
            type={"Поединци"}
            money={"1500ден"}
            benefits={personalArr}
            // key={0}
          />
          <PacketsCard
            type={"Корпорации"}
            money={"20 000ден"}
            benefits={corpArr}
            // key={1}
          />
        </div>
        <button className="buttonAni">Предложи на пријател</button>
      </section>

      <section className="mapSection">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4193.32150685164!2d21.450219269038495!3d41.997569783012935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415986f9f2cd7%3A0x61669f4d3a9aa58c!2sHotel%20Continental!5e0!3m2!1sen!2smk!4v1724686952664!5m2!1sen!2smk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Embed"
          className="theMap"
        ></iframe>
        <button className="buttonAni mapBtn">Насоки</button>
      </section>

      <section>
        <h2>Најнови блогови</h2>
        <FourCardsSection typeCards={"blogs"} />
      </section>

      <section>
        <h2>Најнови настани</h2>
        <FourCardsSection typeCards={"events"} />
      </section>
    </>
  );
}

export default YearlyConference;

import HeroSectionTwo from "@/components/HeroSectionTwo";
import BreadCrumbs from "@/microComponents/BreadCrumbs";
import InfiniteCardScroll from "@/microComponents/InfiniteCardScroll";
import TeamCompCards from "@/microComponents/TeamCompCards";
import WhiteContainerText from "@/microComponents/WhiteContainerText";
import Head from "next/head";
import { useEffect, useState } from "react";

export interface TeamComProp {
  id: string;
  name: string;
  position: string;
}

function About() {
  const [teamArr, setTeamArr] = useState<TeamComProp[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/teamComp")
      .then((res) => res.json())
      .then((data) => setTeamArr(data));
  }, []);
  return (
    <>
      <Head>
        <title>MHRA</title>
        <meta name="description" content="About MHRA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSectionTwo
        img1="/genericPhotos/generic5.jpg"
        img2="/ourBlogImgs/firstImg.jpg"
      >
        <>
          <WhiteContainerText
            title="Запознај го тимот"
            text="Македонска Асоцијација за Човечки Ресурси"
          />
          <div className="secondLeftDivMain">
            <h5>Придружи ни се:</h5>
            <button className="buttonAni">Прочитај повеќе</button>
          </div>
        </>
      </HeroSectionTwo>
      <InfiniteCardScroll />
      <BreadCrumbs />

      <section className="section100">
        <div className="left100 about100L">
          <img className="img101" src="/pfps/pfp2.jpg" alt="" />
          <div>
            <h2>Цели и задачи:</h2>
            <p>
              <span>ПОДДРШКА</span>
              на највисоките идеали во областа на управувањето со човечки
              ресурси и посестрано прифаќање и ценење на професијата;
            </p>
            <p>
              <span>ПРИЗНАВАЊЕ</span>
              на управувањето со човечки ресурси поради неговиот придонес за
              успешно работење и зајакнување на способноста и кредибилитетот на
              професијата управување со човечки ресурси;
            </p>
            <p>
              <span>СТРЕМЕЖ</span>
              да бидеме водачи во развојот и промовирањето на добрите практики
              во професијата управување со човечки ресурси, што ќе ги
              применуваат и професионалните членови и нивните колеги и да ги
              поставиме основните национални стандарди за управување со човечки
              ресурси; Лобирање кај владата и поднесување на документи во име на
              членовите и трети лица.
            </p>
          </div>
        </div>
        <div className="right100 about100R">
          <div className="slideFromRightDiv">
            <h2>МИСИЈА И ВИЗИЈА</h2>
            <h3>Македонска Асоцијација за Човечки Ресурси</h3>
            <p>
              МАЧР е стручно, невладино, непартиско и непрофитно здружение на
              граѓани формирано на 22 април 2009 година, заради вршење на
              дејности и активности поврзани со развојот на работната сила,
              промоција на управувањето со човечките ресурси, како и
              унапредување на професијата управување со човечки ресурси.
            </p>
            <p>
              <span>Мисија</span>
              “Мисија на МАЧР е унапредување и развој на професијата менаџмент
              со човечките ресурси”.
            </p>
            <p>
              <span>Визија</span>
              “Визија на МАЧР е развој на луѓето и организациите!”
            </p>
          </div>
          <img className="img102" src="/pfps/pfp3.jpg" alt="" />
        </div>
      </section>

      <section className="ceoSection">
        <img src="/pfps/pfp1.jpg" alt="" />
        <div>
          <h2>Претседател на МАЧР</h2>
          <h3>м-р Дарко Петровски</h3>
          <p>
            Дарко е еден од основачите на МАЧР, каде придонесуваше како член на
            УО, претседател на Надзорниот одбор, генерален секретар и уредник на
            електронскиот весник на МАЧР, а на последното Собрание во декември
            2018 беше избран за Претседател на Македонската асоцијација за
            човечки ресурси. Дарко помина речиси 9 годишен работен ангажман како
            раководител на одделот за човечки ресурси и организација во ЕВН,
            еден од најголемите работодавачи во Македонија. Пред тоа, тој беше
            на чело на Канцеларијата за економски прашања при Австриската
            амбасада во Скопје.
          </p>
          <p>
            Дарко е основач на Талент бизнис инкубаторот Степ-ап кој нуди
            програми за стипендирање и развој на таленти, за практикантска
            работа и консултантски услуги во областа на стратегиски деловен
            развој, организациски развој и менаџмент со човечките ресурси. Тој е
            и ко-основач и партнер во Динамик Консалтинг и е вклучен во проекти
            како менаџмент консултант во различни области.
          </p>
          <p>
            Покрај професионалниот ангажман, Дарко бил и е сеуште активен во
            повеќе организации како Организацијата на работодавачи на
            Македонија, Националниот економско-социјален совет, Локалниот
            економско-социјален совет на град Скопје, Техничкиот комитет за
            менаџмент со човечките ресурси (ТК42) при Институтот за
            стандардизација на РМ, Националниот совет за претприемништво и
            конкурентност, советодавните одбори на Универзитетот за туризам и
            менаџмент во Скопје и на Универзитетот Американ Колеџ Скопје.
          </p>
          <p>
            Дарко магистрираше економски науки на Економскиот факултет во
            Љубљана и е магистер по бизнис администрација и организациски науки,
            со специјализација во менаџментот со човечките ресурси, а исто така
            е дипломиран машински инженер и автор на повеќе стручни и
            научно-истражувачки трудови.
          </p>
        </div>
      </section>

      <section className="teamCompSec">
        <h2>ОДБОР НА МАЧР</h2>

        <div className="cardsPersonWrapper">
          {teamArr &&
            teamArr.map((person) => {
              return (
                <TeamCompCards
                  name={person.name}
                  poss={person.position}
                  key={person.id}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}

export default About;

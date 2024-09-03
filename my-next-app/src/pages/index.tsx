import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import InfiniteCardScroll from "@/microComponents/InfiniteCardScroll";
import OurBlogSec from "@/components/OurBlogSec";
import BlogCard from "@/microComponents/BlogCard";
// import { BlogCardProps } from "@/microComponents/BlogCard";

import { useEffect, useState } from "react";
import FourCardsSection from "@/components/FourCardsSection";
import BenifitLi from "@/microComponents/BenifitLi";
import BuyTicket from "@/microComponents/BuyTicket";
export interface CardProps {
  id: any;
  title: string;
  text: string;
  img: string;
  category: string;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>MHRA</title>
        <meta name="description" content="Homepage MHRA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <InfiniteCardScroll />
      <OurBlogSec />

      {/* benifiti */}

      <section className="benifitsSec">
        <div className="leftDivBenf">
          <BenifitLi num={"01"} title={"Едукативни настани"} />
          <BenifitLi num={"02"} title={"Најнови информации и случувања"} />
          <BenifitLi num={"03"} title={"Ширење на мрежата на контакти"} />
          <BenifitLi num={"04"} title={"Вклучување во работењето на МАЧР"} />
          <BenifitLi num={"05"} title={"HR огласи за работа"} />
        </div>
        <div className="rightDivBenf">
          <h2>Бенефити од зачленување во МАЧР</h2>
          <p>
            Македонската асоцијација за човечки ресурси - МАЧР како невладино,
            непрофитно и непартиско здружение на граѓани, продолжува со
            остварување на својата мисија за промоција и унапредување на
            професијата управување со човечките ресурси, како и создавање и
            имплементирање на највисоките професионални стандарди и развој на
            човечкиот капитал во Република Македонија како единствен ентитет од
            овој вид во земјава.
          </p>
        </div>
      </section>
      {/* benifiti */}

      <section>
        <h2>Актуелни настани</h2>
        <FourCardsSection typeCards={"events"} />
      </section>
      <section>
        <section className="ConfFirst">
          <div className="leftConfFirst">
            <h2 className="heading1000">
              Најголемиот HR настан на нашите простори - Годишната HR
              конференција на МАЧР
            </h2>

            <p>
              Меѓународна размена на искуства во полето на човечки ресурси и
              константно движење во чекор со светските трендови.
            </p>
          </div>
          <div className="rightConfFirst">
            <img
              className="bigPicConf backupClassThree"
              src="/genericPhotos/generic3.jpg"
              alt=""
            />
            <div className="bubbleConfDiv firstBubble backupClassTwo">
              <BuyTicket />
            </div>
            <div className="bubbleConfDiv secondBubble">
              <img src="/genericPhotos/generic6.jpg" alt="" />
            </div>
          </div>
        </section>
        <h2>Популарни истражувања</h2>
        <FourCardsSection typeCards={"blogs"} />
      </section>
      <section className="section100">
        <div className="left100">
          <img className="img101" src="/pfps/pfp2.jpg" alt="" />
          <div className="cloudGray">
            Сакаш да бидес во тек со нас и најовите соджини што ги споделуваме?
          </div>
          <h2>Дознај повеќе за нас и нашите содржини</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            inventore cum adipisci pariatur amet fuga! adipisicing elit. Quod
            inventore cum adipisci pariatur amet fuga!
          </p>
          <button className="buttonAni button100">Повќе за нас</button>
        </div>
        <div className="right100">
          <img className="img102" src="/pfps/pfp3.jpg" alt="" />
          <div className="cloudOrange">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, ut
            quibusdam dignissimos officia quia commodi recusandae! Dignissimos,
            iusto! Laboriosam soluta assumenda amet voluptates sapiente
            similique! Veniam placeat possimus ea soluta!
          </div>
        </div>
      </section>
    </>
  );
}

import FilterBlog from "@/components/FilterBlog";
import HeroSectionTwo from "@/components/HeroSectionTwo";
import BreadCrumbs from "@/microComponents/BreadCrumbs";
import InfiniteCardScroll from "@/microComponents/InfiniteCardScroll";
import WhiteContainerText from "@/microComponents/WhiteContainerText";
import Head from "next/head";
import { useRouter } from "next/router";
function Blog() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>MHRA</title>
        <meta name="description" content="Blog MHRA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSectionTwo
        img1="/BlogCard/imgBlog1.jpg"
        img2="/BlogCard/imgBlog1.jpg"
      >
        <>
          <WhiteContainerText
            title="Иднината на работата: трендови и предизвици"
            customClass="blogHeroWhiteWrapper"
            miniTitle="Истакнат блог"
            text="Oд Ѓоко Вукановски l 20 Јуни, 2024   "
          />
          <button
            className="buttonAni customBtnClass"
            onClick={() => router.push("/blog/1jsdc92n8c")}
          >
            Прочитај повеќе
          </button>
        </>
      </HeroSectionTwo>

      <InfiniteCardScroll />
      <BreadCrumbs />
      <section className="blogsSectionActive">
        <img src="/genericPhotos/generic10.jpg" alt="" />
        <div>
          <h3>
            Биди активен/на, споделувај настани на социјаните медиуми, собирај
            поени, добивај значки и рамки, кани пријатели на настани и освојувај
            попусти за следната купена карта
          </h3>
          <p>
            Доколку овој месец си најактивен/а во форумот добиваш награди за да
            го направиш твојот профил уникатен, а ако каниш пријатели и тие
            купат карта преку твојот линк за покана добиваш попуст на следната
            купена карта за настан.
          </p>
        </div>
      </section>

      <FilterBlog />
    </>
  );
}

export default Blog;

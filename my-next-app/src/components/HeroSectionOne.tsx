import SocialsGreen from "@/microComponents/SocialsGreen";
import { useRouter } from "next/router";

interface HeroSectionOneprops {
  img: string;
  smallTitle: string;
  title: string;
  smallTitleTwo: string;
}

function HeroSectionOne({
  img,
  smallTitle,
  title,
  smallTitleTwo,
}: HeroSectionOneprops) {
  //   const router = useRouter();

  return (
    <>
      {/* <section className="blogArticleHeroSection">
        <div
          className="wrapperBlogArticleHero"
          style={{ backgroundImage: `url(/BlogCard/${blog.img})` }}
        >
          <p style={{ color: "white" }}>Блог</p>
          <h2>{blog.title}</h2>

          <p>Oд Ѓоко Вукановски | 20 Јуни, 2024 </p>
        </div>
        <SocialsGreen customClass="blogArticleSocialGreen" />
      </section> */}
      <section className="blogArticleHeroSection">
        <div
          className="wrapperBlogArticleHero"
          style={{ backgroundImage: `url(${img})` }}
        >
          <p style={{ color: "white" }}>{smallTitle}</p>
          <h2>{title}</h2>

          <p>|{smallTitleTwo}</p>
        </div>
        <SocialsGreen customClass="blogArticleSocialGreen" />
      </section>
    </>
  );
}

export default HeroSectionOne;

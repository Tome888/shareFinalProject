import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BlogCardProps } from "@/microComponents/BlogCard";
import SocialsGreen from "@/microComponents/SocialsGreen";
import InfiniteCardScroll from "@/microComponents/InfiniteCardScroll";
import HeroSectionOne from "@/components/HeroSectionOne";
import Comments from "@/components/Comments";
import FourCardsSection from "@/components/FourCardsSection";
import BreadCrumbs from "@/microComponents/BreadCrumbs";
import Head from "next/head";

function BlogArticle() {
  const [blog, setBlog] = useState<BlogCardProps | null>(null);
  const [like, setLike] = useState(0);
  const [liked, setLiked] = useState(false);
  const [heart, setHeart] = useState(0);
  const [hearted, setHearted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!router.query.id) return;

    const likeNumber = Math.floor(Math.random() * 350);
    setLike(likeNumber);
    const heartNumber = Math.floor(Math.random() * 350);
    setHeart(heartNumber);
    fetch(`http://localhost:5000/blogs?id=${router.query.id}`)
      .then((res) => res.json())
      .then((data: BlogCardProps[]) => {
        if (data.length > 0) {
          setBlog(data[0]);
        } else {
          setBlog(null);
        }
      })
      .catch((error) => {
        setBlog(null);
        console.error(error);
      });
  }, [router.query.id]);

  const handleLikeClick = () => {
    if (!hearted) {
      // Only update like if hearted is false
      setLike((like) => (liked ? like - 1 : like + 1));
      setLiked((prevLiked) => !prevLiked);
    }
  };

  const handleHeartClick = () => {
    if (!liked) {
      // Only update heart if liked is false
      setHeart((heart) => (hearted ? heart - 1 : heart + 1));
      setHearted((prevHearted) => !prevHearted);
    }
  };
  return (
    blog && (
      <>
        <Head>
          <title>MHRA</title>
          <meta name="description" content="Blog MHRA" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeroSectionOne
          img={`/BlogCard/${blog.img}`}
          smallTitle={"Блог"}
          title={blog.title}
          smallTitleTwo={"Oд Ѓоко Вукановски | 20 Јуни, 2024"}
        />
        <InfiniteCardScroll />
        <BreadCrumbs />

        {/* Display the blog text or other details here */}
        <section className="textWrapperBlogArticle">
          <div className="blogArticle200">
            <h2>{blog.title}</h2>
            <p>{blog.text}</p>
          </div>
          <img
            className="pfpUserBlogArticle"
            src={`/pfps/pfp${Math.floor(Math.random() * 4) + 1}.jpg`}
            alt="Profile Picture"
          />
        </section>
        <section className="blogMultiTextSec">
          <div className="wrapper99">
            <div className="left99">
              <div className="wrapperLeft">
                <h2>Blog Sample Text 1</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus esse earum similique facere cumque nisi accusantium
                  corrupti. Harum ipsam voluptatibus quaerat iusto debitis error
                  sapiente, aliquam deserunt nemo, eligendi quos!
                </p>
              </div>
              <div className="wrapperLeft">
                <h2>Blog Sample Text 2</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus esse earum similique facere cumque nisi accusantium
                  corrupti. Harum ipsam voluptatibus quaerat iusto debitis error
                  sapiente, aliquam deserunt nemo, eligendi quos!
                </p>
              </div>
              <div className="wrapperLeft">
                <h2>Blog Sample Text 3</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus esse earum similique facere cumque nisi accusantium
                  corrupti. Harum ipsam voluptatibus quaerat iusto debitis error
                  sapiente, aliquam deserunt nemo, eligendi quos!
                </p>
              </div>
              <div className="wrapperLeft">
                <h2>Blog Sample Text 4</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus esse earum similique facere cumque nisi accusantium
                  corrupti. Harum ipsam voluptatibus quaerat iusto debitis error
                  sapiente, aliquam deserunt nemo, eligendi quos!
                </p>
              </div>
            </div>
            <div className="right99">
              <h4>Ѓоко Вукановски</h4>
              <div className="faOrangeContainer smallOrange">
                <p className="shareWithAll">Сподели со колегите!</p>
                <div>
                  <i className="fa-brands fa-square-facebook"></i>
                  <i className="fa-brands fa-square-x-twitter"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
              <h4 className="shortDesc">Кратка Содржина</h4>
              <p>Blog Sample Text 1</p>
              <p>Blog Sample Text 2</p>
              <p>Blog Sample Text 3</p>
              <p>Blog Sample Text 4</p>
            </div>
          </div>
          <div className="interactionsBlogWrapper">
            <div onClick={handleLikeClick}>
              <i
                className={`fa-${liked ? "solid" : "regular"} fa-thumbs-up`}
              ></i>
              {like}
            </div>
            <div onClick={handleHeartClick}>
              <i className={`fa-${hearted ? "solid" : "regular"} fa-heart`}></i>
              {heart}
            </div>
            <div>
              <i className="fa-regular fa-comment"></i>
              365
            </div>
          </div>
          <div className="orangeShare1">
            <p style={{ color: "white" }}>
              Ти се допаѓа овој блог? Сподели го!
            </p>
            <div className="faOrangeContainer">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-x-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </section>

        <Comments />
        <section>
          <h2>Слични блогови</h2>
          <FourCardsSection typeCards={"blogs"} />
        </section>
      </>
    )
  );
}

export default BlogArticle;

import { useRouter } from "next/router";

function OurBlogSec() {
  const router = useRouter();
  return (
    <section className="ourBlogSec">
      <div className="firstDivOurBlog">
        <div
          className="leftFirstImgOurBlog"
          style={{ backgroundImage: `url(/ourBlogImgs/firstImg.jpg)` }}
        ></div>
        <div className="ourBlogDiv">
          <p>Упати се уште сега кон</p>
          <button className="buttonAni" onClick={() => router.push("/blog")}>
            Нашиот блог
          </button>
        </div>
        <div
          className="leftSecondImgOurBlog"
          style={{ backgroundImage: `url(/ourBlogImgs/secondImg.jpg)` }}
        ></div>
      </div>
      <div className="secondDivOurBlog">
        <div className="rightFirstDivOurBlog">
          <h2>
            Кажи ги своите мислења и поврзи се со останатите HR ентузијасти
          </h2>
          <p>
            Во нашиот блог одсега ќе можеш да разменуваш мислења на актуелни
            теми со останатите корисници
          </p>
        </div>
        <div
          className="rightSecondDivOurBlog"
          style={{ backgroundImage: `url(/ourBlogImgs/thirdImg.jpg)` }}
        ></div>
      </div>
    </section>
  );
}

export default OurBlogSec;

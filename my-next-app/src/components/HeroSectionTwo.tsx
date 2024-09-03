import SocialsGreen from "@/microComponents/SocialsGreen";

interface HeroTwoProps {
  children: React.ReactElement;
  img1: string;
  img2: string;
}

function HeroSectionTwo({ children, img1, img2 }: HeroTwoProps) {
  return (
    <section className="sectionTwo">
      <>
        <div
          className="firstImgHero"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>

        <div
          className="secondImgHero"
          style={{ backgroundImage: `url(${img2})` }}
        ></div>
        {/* <img src={img1} alt="" className="firstImgHero" />
        <img src={img2} alt="" className="secondImgHero" /> */}
        <div className="leftMain">
          {/* <div className="firstLeftDivMain">
            <h1>Луѓето пред се!</h1>
            <p>Македонска Асоцијација за Човечки Ресурси</p>
          </div>
          <div className="secondLeftDivMain">
            <h5>Придружи ни се:</h5>
            <button className="buttonAni">Зачлени се</button>
          </div> */}
          {children}
        </div>
        <div className="rightMain">
          <SocialsGreen />
        </div>
      </>
    </section>
  );
}

export default HeroSectionTwo;

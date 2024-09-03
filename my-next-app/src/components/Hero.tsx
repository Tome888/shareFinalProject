import MemebrBtn from "@/microComponents/MemberBtn";
import MemeberBtn from "@/microComponents/MemberBtn";
import SocialsGreen from "@/microComponents/SocialsGreen";
import HeroSectionTwo from "./HeroSectionTwo";
import WhiteContainerText from "@/microComponents/WhiteContainerText";

function Hero() {
  return (
    // <section className="sectionTwo">
    //   <div className="leftMain">
    //     <div className="firstLeftDivMain">
    //       <h1>Луѓето пред се!</h1>
    //       <p>Македонска Асоцијација за Човечки Ресурси</p>
    //     </div>
    //     <div className="secondLeftDivMain">
    //       <h5>Придружи ни се:</h5>
    //       <button className="buttonAni">Зачлени се</button>
    //     </div>
    //   </div>
    //   <div className="rightMain">
    //     <SocialsGreen />
    //   </div>
    // </section>

    <HeroSectionTwo
      img1="/genericPhotos/generic1.jpg"
      img2="/genericPhotos/generic2.jpg"
    >
      <>
        <WhiteContainerText
          title="Луѓето пред се!"
          text="Македонска Асоцијација за Човечки Ресурси"
        />
        <div className="secondLeftDivMain">
          <h5>Придружи ни се:</h5>
          <button className="buttonAni">Зачлени се</button>
        </div>
      </>
    </HeroSectionTwo>
  );
}

export default Hero;

interface SocialGreenProps {
  customClass?: string;
}

function SocialsGreen({ customClass }: SocialGreenProps) {
  return (
    <div className={`firstRightDivMain ${customClass}`}>
      <p className="firstRightDivMainP">Заследи не на социјалните медиуми</p>
      <div className="faWrapper">
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-square-youtube"></i>
      </div>
    </div>
  );
}

export default SocialsGreen;

interface EventCatDescProps {
  titleCat: string;
}

function EventCatDesc({ titleCat }: EventCatDescProps) {
  return (
    <section className="lSection">
      <div className="div1">
        <h2>{titleCat}</h2>
        <p>
          Специјализиран настан наменет за професионалци од областа на човечки
          ресурси (HR), каде што учесниците ќе имаат можност да се сретнат, да
          разменат искуства и идеи, како и да научат нови вештини и трендови во
          оваа динамична област. Овој настан се одржува во пријатна и неформална
          атмосфера, со цел да поттикне отворена дискусија и вмрежување помеѓу
          присутните.
        </p>
      </div>
      <div>
        <div className="div2">
          <div className="div3">
            <img src="/genericPhotos/generic3.jpg" alt="" />
            {/* <div
              className="img11"
              style={{ background: 'url("/genericPhotos/generic3.jpg")' }}
            ></div> */}
            <div className="ulWrapper00">
              <h3>Настанот ќе вклучува:</h3>
              <ul>
                <li>Интерактивни предавања од искусни HR професионалци</li>
                <li>
                  Панел дискусии на актуелни теми во областа на човечките
                  ресурси
                </li>
                <li>Работилници за развој на практични вештини</li>
                <li>
                  Можности за вмрежување и споделување на најдобри практики
                </li>
                <li>Кафе и неформални разговори во релаксирана атмосфера</li>
              </ul>
            </div>
          </div>
          <p className="lastTextL">
            {titleCat} е одлична можност за сите кои работат во HR секторот или
            се заинтересирани за оваа област, да го прошират своето знаење, да
            создадат нови професионални врски и да придонесат за унапредување на
            човечките ресурси во нивните организации. Придружете ни се за
            инспиративен и корисен ден исполнет со учење и вмрежување!
          </p>
          <div className="lastDiv">
            <img
              className="lastDivFirstImg"
              src="/genericPhotos/generic4.jpg"
              alt=""
            />
            <img
              className="lastDivSecondImg"
              src="/genericPhotos/generic5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="secondLeftDivMain lDivbutton">
        <p>Купи карта за следниот настан!</p>
        <button className="buttonAni">Купи карта</button>
      </div>
    </section>
  );
}

export default EventCatDesc;

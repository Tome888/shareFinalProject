interface EventDescProp {
  title: string;
  text: string;
}

function EventsDescriptionSection({ title, text }: EventDescProp) {
  return (
    <section>
      <div className="eventHeadingWrapper">
        <h2>{title}</h2>
        <p>Тема: ,,{text}"</p>
      </div>
      <div className="eventDescWrapper">
        <div className="descriptionHolderDiv">
          <div>
            <h2>Опис:</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              repellendus explicabo numquam dicta minus illum quas voluptatum
              harum quidem ipsa placeat architecto nam maiores quam veritatis,
              iure debitis! At, placeat. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aperiam repellendus explicabo numquam dicta
              minus illum quas voluptatum harum quidem ipsa placeat architecto
              nam maiores quam veritatis, iure debitis! At, placeat.
            </p>
          </div>
          <div>
            <h2>Цел:</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              repellendus explicabo numquam dicta minus illum quas voluptatum
              harum quidem ipsa placeat architecto nam maiores quam veritatis,
              iure debitis! At, placeat.
            </p>
          </div>
        </div>
        <img
          className="eventDescWrapperImg"
          src={`/genericPhotos/generic${Math.floor(Math.random() * 4) + 1}.jpg`}
          alt=""
        />
        {/* <div
          style={{
            background: `url(/genericPhotos/generic${
              Math.floor(Math.random() * 4) + 1
            }.jpg)`,
          }}
          className="eventDescWrapperImg"
        ></div> */}
      </div>
    </section>
  );
}
export default EventsDescriptionSection;

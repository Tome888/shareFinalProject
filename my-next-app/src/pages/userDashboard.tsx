import CustomCalendar from "@/microComponents/Calendar";
import CommentComp from "@/microComponents/CommentComp";
import InfiniteCardScroll, { Card } from "@/microComponents/InfiniteCardScroll";
import Head from "next/head";
import { useEffect, useState } from "react";

function userDashboard() {
  const [events, setEvents] = useState<Card[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data: Card[]) => setEvents(data));
  }, []);
  return (
    <>
      <Head>
        <title>MHRA</title>
        <meta name="description" content="Dashboard MHRA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="userDashFirstSec">
        <div
          className="settingsPopupBG"
          style={{ display: popup ? "flex" : "none" }}
        >
          <div className="settingsPopup">
            <div className="headerPopupSet">
              <h2>Поставки</h2>
              <div onClick={() => setPopup(false)}>
                <i className="fa-solid fa-x"></i>
              </div>
            </div>

            <div className="formsWrapperSett">
              <div className="leftFormSett">
                <div className="wrapperInputSett">
                  <legend>Име</legend>
                  <input type="text" placeholder="Anon" />
                </div>

                <div className="wrapperInputSett">
                  <legend>Email</legend>
                  <input type="email" placeholder="anon@hotmail.com" />
                </div>

                <div className="wrapperInputSett">
                  <legend>Password</legend>
                  <input type="password" placeholder="Промени Лозинка" />
                </div>

                <select id="dropdown" name="options">
                  {/* <option value="" disabled selected>
                    --Select an option--
                  </option> */}
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="rightFormSett">
                <div className="wrapperInputSett">
                  <legend>Lastname</legend>
                  <input type="text" placeholder="Anon" />
                </div>

                <form>
                  <fieldset>
                    <legend>Добивај нотификации на:</legend>
                    <label>
                      <input
                        type="checkbox"
                        name="notificationMethods"
                        value="platform"
                      />
                      Платформа
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="notificationMethods"
                        value="email"
                      />
                      E-маил
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="notificationMethods"
                        value="socialMedia"
                      />
                      Социјални медиуми
                    </label>
                  </fieldset>
                </form>

                <form>
                  <fieldset>
                    <legend>Добивај нотификации за:</legend>
                    <label>
                      <input
                        type="checkbox"
                        name="notificationTypes"
                        value="newContent"
                      />
                      Нови содржини
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="notificationTypes"
                        value="newEvents"
                      />
                      Нови настани
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="notificationTypes"
                        value="eventReminder"
                      />
                      Приближување на датум за настан
                    </label>
                  </fieldset>
                </form>
              </div>
            </div>
            <button className="buttonAni saveSettBtn">Зачувај</button>
          </div>
        </div>

        <div className="leftWrapperDash">
          <img src="/pfps/anon.png" alt="" />
          <h2>Anon</h2>
          <p>City</p>

          <hr />
          <div className="iconsWrapperDash">
            <i className="fa-regular fa-user"></i>
            <p>HR регрутер</p>
          </div>
          <div className="iconsWrapperDash moreMargin">
            <i className="fa-solid fa-paperclip"></i>
            <p>CV</p>
          </div>
          <div className="iconsWrapperDash">
            <i className="fa-solid fa-user-plus"></i>
            <p>+389 70 707 070</p>
          </div>
          <div className="iconsWrapperDash">
            <i className="fa-regular fa-envelope"></i>
            <p>anon@hotmail.com</p>
          </div>
          <div className="iconsWrapperDash" onClick={() => setPopup(true)}>
            <i className="fa-solid fa-gear"></i>
            <p>Поставки</p>
          </div>
        </div>
        <div className="rightWrapperDash">
          <div className="dashBiogrWrapper">
            <h2>Кратка биографија</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              nam dignissimos quod eligendi? Quia temporibus libero
              perspiciatis, quisquam ipsam cum amet consequatur non dolorum sunt
              praesentium blanditiis doloremque dignissimos placeat earum cumque
              repellat ex neque maiores repellendus. Rerum qui voluptate
              voluptas et dignissimos, illo quos inventore repudiandae hic
              pariatur doloribus quas neque itaque quasi error deleniti
              eligendi. Velit omnis, reiciendis explicabo quo sapiente maiores
              numquam doloribus corporis sequi, ipsam recusandae, aperiam quae
              voluptatibus ipsa fugit in suscipit ullam. Aspernatur sed officiis
              illum fuga beatae quasi veritatis pariatur at optio ab dolorum,
              cumque libero magni accusantium mollitia ipsam tenetur inventore
              voluptate ullam saepe. Neque facere iusto fugit, autem quibusdam
              sequi cumque esse veritatis aperiam eligendi velit obcaecati
              reiciendis ab eveniet maiores eos ullam et asperiores praesentium
              necessitatibus ipsa perferendis? Dolores obcaecati, exercitationem
              aut ratione impedit fugit corrupti consectetur, nisi eveniet modi
              beatae non velit dolorum sit. Voluptas inventore iusto quia quam!
            </p>
            <div className="recomWrapper">
              <h2>Препораки</h2>
              <CommentComp
                imgPath={"/pfps/pfp1.jpg"}
                userName={"User 99"}
                textOfComment={null}
              />
              <CommentComp
                imgPath={"/pfps/pfp2.jpg"}
                userName={"User 66"}
                textOfComment={null}
              />
              {showAll && (
                <>
                  <CommentComp
                    imgPath={"/pfps/pfp3.jpg"}
                    userName={"User 669"}
                    textOfComment={null}
                  />
                  <CommentComp
                    imgPath={"/pfps/pfp4.jpg"}
                    userName={"User 696"}
                    textOfComment={null}
                  />
                </>
              )}
              <p
                style={{ color: `${showAll ? "#e87b22" : "gray"}` }}
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Затвори" : "Види ги сите"}
              </p>
            </div>
          </div>
        </div>
      </section>
      <InfiniteCardScroll />
      {/* badges part */}
      <section className="badgesSection">
        <div className="leftWrapperBadges">
          <div className="badgeWrapperDash">
            <h3>Поени до следна рамка</h3>
            <div className="badgeHolderDiv">
              <div>
                <img src="/dashUserEl/Ellipse 92.png" alt="" />
                <div className="fittyBadge one">50</div>
              </div>
              <div>
                <img src="/dashUserEl/Ellipse 150.png" alt="" />
                <div className="fittyBadge two">50</div>
              </div>
              <div>
                <img src="/dashUserEl/Ellipse 151.png" alt="" />
                <div className="fittyBadge three">50</div>
              </div>
            </div>
          </div>

          <div className="badgeWrapperDashSecond">
            <div className="headerSecondBadge">
              <h3>Најнови беџови</h3>
              <p>Види ги сите</p>
            </div>
            <div className="holderOfBadgesSecond">
              <div className="badgeHolderSecond">
                <i className="fa-regular fa-comment com"></i>
                <p>Левел 2 беџ за активност во блог секцијата за корисници</p>
              </div>
              <div className="badgeHolderSecond">
                <i className="fa-solid fa-calendar-days calDash"></i>
                <p>Левел 3 беџ за редовно посетување на настани</p>
              </div>
            </div>
          </div>

          <div className="contactsWrapper">
            <h3>Листа на конекции</h3>
            <form>
              <label>Додади конекција</label>
              <input type="text" placeholder="Пребарај" />
            </form>
            <div className="headerHolderThird">
              <h3>Последно додадени</h3>
              <p>Види ги сите</p>
            </div>
            <div className="friendsWrapperThird">
              <div className="profileCard">
                <img src="/pfps/anon.png" alt="" />
                <p>Anon1</p>
              </div>
              <div className="profileCard">
                <img src="/pfps/anon.png" alt="" />
                <p>Anon2</p>
              </div>
              <div className="profileCard">
                <img src="/pfps/anon.png" alt="" />
                <p>Anon3</p>
              </div>
              <div className="profileCard">
                <img src="/pfps/anon.png" alt="" />
                <p>Anon4</p>
              </div>
              <div className="profileCard">
                <img src="/pfps/anon.png" alt="" />
                <p>Anon5</p>
              </div>
              <div className="profileCard">
                <img src="/pfps/anon.png" alt="" />
                <p>Anon6</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightWrapperBadges">
          <h2>Купени карти</h2>
          <div className="containerBilet">
            <img src="/dashUserEl/bilet.png" alt="" />
            <div>
              <p className="firstTextBilet">
                <b>ЧР кафе: </b>
                Пoтребата од зајакнување на соработ...
              </p>
              <p className="secondTextBilet">25.07.2024 Лабораториум, Скопје</p>
            </div>
          </div>
          <div className="containerBilet">
            <img src="/dashUserEl/bilet.png" alt="" />
            <div>
              <p className="firstTextBilet">
                <b>13та меѓународна МАЧР конференција</b>
              </p>
              <p className="secondTextBilet">25.07.2024 Лабораториум, Скопје</p>
            </div>
          </div>
          <div className="percentageWrapper">
            <div>
              <h3>Освоено:</h3>
              <p className="numberPerc">20%</p>
              <h3>попуст за следна карта</h3>
            </div>
            <div>
              <h3>Препорачано на:</h3>
              <p className="numberPerc">20</p>
              <h3>пријатели</h3>
            </div>
          </div>
          <div className="orangeBorderComm userDashCommWrapper">
            <div className="addCommPfpWrapper userDashComm">
              {/* <img src="/pfps/anon.png" alt="" className="commPfp addCommPfp" /> */}
              <i className="fa-solid fa-paperclip"></i>
            </div>

            <form className="commentForm" onSubmit={(e) => e.preventDefault()}>
              <textarea
                name="comment"
                placeholder="Остави фидбек за нешто што би можеле да подобриме на страната. Кажи ни што ти смета и ние ке се потрудиме да го подобриме."
              ></textarea>
              <button type="submit" className="buttonAni">
                Испрати
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="calendarSection">
        <div className="calendarSecTextWrapper">
          <h2>Календар со датуми за сите претстојни настани</h2>
          <p>
            Погледни ги сите настани распоредени на календар. Со клик на
            обележаните настани можеш да дознаеш повеќе информации за секој од
            настаните но за целосни информации упатете се до индивидуалната
            страна на настанот
          </p>
        </div>
        <CustomCalendar arrEvents={events} />
      </section>
    </>
  );
}
export default userDashboard;

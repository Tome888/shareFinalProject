import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Header() {
  const [dropDown, setDropDown] = useState("");
  const [notyBtn, setNotyBtn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log(dropDown);
  }, [dropDown]);
  return (
    <header>
      <nav>
        <Link href="/">
          <div className="logo"></div>
        </Link>

        <ul>
          <li
            className="liA"
            onMouseEnter={() => setDropDown("A")}
            onMouseLeave={() => setDropDown("")}
          >
            Информативни содржини
            <div className={dropDown === "A" ? "visible dropDown" : "dropDown"}>
              <ul>
                <li onClick={() => router.push("/about")}>За нас</li>
                <li>Членство</li>
                <li>Огранок на коучинг</li>
                <li>Огласи за работа</li>
                <li>HR Награди</li>

                <li>Е-весник</li>
                <li>Архива</li>
                <li>FAQ</li>
              </ul>
            </div>
          </li>
          <li
            className="liB"
            onMouseEnter={() => setDropDown("B")}
            onMouseLeave={() => setDropDown("")}
          >
            Едукативни содржини
            <div className={dropDown === "B" ? "visible dropDown" : "dropDown"}>
              <ul>
                <li>Статии</li>
                <li>Истражувања</li>
                <li>Интервјуа</li>
                <li>Обуки</li>
                <li>Македонски академии</li>
                <li>Проекти</li>
                <li>Експерти</li>
                <li>Трендови</li>
              </ul>
            </div>
          </li>
          {/* <li
            className="liC"
            onMouseEnter={() => setDropDown("C")}
            onMouseLeave={() => setDropDown("")}
          >
            Годишна Конференција
          </li> */}

          <Link className="liC" href={"/yearlyConference"}>
            Годишна Конференција
          </Link>

          <li
            className="liD"
            onMouseEnter={() => setDropDown("D")}
            onMouseLeave={() => setDropDown("")}
          >
            <Link href={"/events"}>Настани</Link>
            {/* <div className={dropDown === "D" ? "visible dropDown" : "dropDown"}>
              <ul>
                <li onClick={() => router.push("/events?category=HR caffee")}>
                  HR caffee
                </li>
                <li onClick={() => router.push("/events?category=HR weekend")}>
                  HR weekend
                </li>
                <li onClick={() => router.push("/events?category=HR webinar")}>
                  HR webinar
                </li>
                <li
                  onClick={() => router.push("/events?category=HR conferences")}
                >
                  HR conferences
                </li>
              </ul>
            </div> */}
            <div
              className={
                dropDown === "D" ? "visible dropDown hrDrop" : "dropDown hrDrop"
              }
            >
              <ul>
                <li onClick={() => router.push("/events/hrcaffee")}>
                  HR caffee
                </li>
                <li onClick={() => router.push("/events/hrweekend")}>
                  HR weekend
                </li>
                <li onClick={() => router.push("/events/hrwebinar")}>
                  HR webinar
                </li>
                <li onClick={() => router.push("/events/hrconferences")}>
                  HR conferences
                </li>
              </ul>
            </div>
          </li>

          <li
            className="liE"
            onMouseEnter={() => setDropDown("E")}
            onMouseLeave={() => setDropDown("")}
          >
            <Link href={"/blog"}>Блог</Link>
          </li>
          <li
            className="liF"
            onMouseEnter={() => setDropDown("F")}
            onMouseLeave={() => setDropDown("")}
          >
            <i className="fa-solid fa-magnifying-glass navSearchI"></i>
            <div className={dropDown === "F" ? "visible dropDown" : "dropDown"}>
              <form className="searchInputNav">
                <input type="text" placeholder="search..." />
              </form>
            </div>
          </li>
        </ul>

        <div className="btnsWrapper">
          <div
            onClick={() => setNotyBtn(!notyBtn)}
            className="firstDivBtnsWrapper"
          >
            <i className="fa-regular fa-bell"></i>
          </div>
          <div className={notyBtn ? "visible dropDown" : "dropDown"}>
            <ul>
              <li>Noty 1</li>
              <li>Noty 2</li>
              <li>Noty 3</li>
            </ul>
          </div>

          <div className="langDiv">MK/EN</div>
          {/* <MemberBtn btnClass={"navOrangeButton"} text={"зачлени се"} /> */}
          <div className="zacleniSeDiv">
            <button
              className="buttonAni"
              onClick={() => router.push("/signLogIn")}
            >
              зачлени се
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

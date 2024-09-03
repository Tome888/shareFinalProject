// import ScheduleItem from "@/microComponents/ScheduleItem";
// import { useState } from "react";

// function AgendaConf() {
//   const [day, setDay] = useState("one");

//   return (
//     <section className="agendaConfSec">
//           <h2>Агенда на конференција</h2>
//           {
//               day === 'one'?
//               (return <div className="dayTogglerWrapper">
//         <p
//           style={{ color: `${day === "one" ? "#e87b22" : "#21383e"}` }}
//           onClick={() => setDay("one")}
//           >
//           Ден 1
//         </p>

//         <p
//           style={{ color: `${day === "two" ? "#e87b22" : "#21383e"}` }}
//           onClick={() => setDay("two")}
//           >
//           Ден 2
//         </p>
//       </div>
//       <div className="schedule">
//         <ScheduleItem
//           time={"10:00"}
//           title={"Регистрација и утринско кафе"}
//           desc={"Приситигнување и неформално запознавање меѓу учесниците."}
//           presenter={null}
//           />
//         <ScheduleItem
//           time={"10:30"}
//           title={"Вовед и отворање на настанот"}
//           desc={
//               "Поздравен говор од организаторот и кратко претставување на агендата."
//             }
//             presenter={null}
//             />
//         <ScheduleItem
//           time={"11:00"}
//           title={
//               "Презентација: Важноста на соработката меѓу HR одделот и синдикатот"
//             }
//             desc={
//                 "Клучни точки: Значењето на заедничката работа, придобивки и предизвици."
//             }
//             presenter={"Оливија Оли"}
//             />
//         <ScheduleItem
//           time={"11:45"}
//           title={"Панел дискусија: Искусувања и предизвици во пракса"}
//           desc={
//               "Панелисти: Претставници од HR и синдикатот од различни индустрии."
//             }
//             presenter={"Марк Васкзурски"}
//             />
//         <ScheduleItem
//           time={"12:30"}
//           title={"Пауза за ручек и неформални разговори"}
//           desc={""}
//           presenter={null}
//           cusClass={"pauseOrangeLIne"}
//           />
//         <ScheduleItem
//           time={"13:00"}
//           title={"Работилница: Стратегии за подобрување на соработката"}
//           desc={
//               "Практични совети и техники за подобрување на комуникацијата и координацијата."
//             }
//             presenter={"Една Моде"}
//             />
//         <ScheduleItem
//           time={"14:00"}
//           title={"Клучни алатки и методи за успешна соработка"}
//           desc={
//               "Презентација на алатки и методи кои може да се применат веднаш."
//             }
//             presenter={"Џејмс Сулливан"}
//             />
//         <ScheduleItem
//           time={"14:45"}
//           title={"Завршни зборови и заклучоци"}
//           desc={
//               "Резиме на клучните точки од настанот и дискусија за понатамошни активности."
//             }
//             presenter={null}
//             />
//         <ScheduleItem
//           time={"15:00"}
//           title={"Мрежно поврзување и неформално завршување на настанот"}
//           desc={"Можност за неформални разговори и размена на контакти."}
//           presenter={null}
//           />
//       </div>):(return null)
// }
//     </section>
//   );
// }

// export default AgendaConf;

import ScheduleItem from "@/microComponents/ScheduleItem";
import { useState } from "react";

function AgendaConf() {
  const [day, setDay] = useState("one");

  return (
    <section className="agendaConfSec">
      <h2>Агенда на конференција</h2>
      <div className="dayTogglerWrapper">
        <p
          style={{ color: day === "one" ? "#e87b22" : "#21383e" }}
          onClick={() => setDay("one")}
        >
          Ден 1
        </p>
        <p
          style={{ color: day === "two" ? "#e87b22" : "#21383e" }}
          onClick={() => setDay("two")}
        >
          Ден 2
        </p>
      </div>
      {day === "one" && (
        <div className="schedule">
          <ScheduleItem
            time={"10:00"}
            title={"Регистрација и утринско кафе"}
            desc={"Приситигнување и неформално запознавање меѓу учесниците."}
            presenter={null}
          />
          <ScheduleItem
            time={"10:30"}
            title={"Вовед и отворање на настанот"}
            desc={
              "Поздравен говор од организаторот и кратко претставување на агендата."
            }
            presenter={null}
          />
          <ScheduleItem
            time={"11:00"}
            title={
              "Презентација: Важноста на соработката меѓу HR одделот и синдикатот"
            }
            desc={
              "Клучни точки: Значењето на заедничката работа, придобивки и предизвици."
            }
            presenter={"Оливија Оли"}
          />
          <ScheduleItem
            time={"11:45"}
            title={"Панел дискусија: Искусувања и предизвици во пракса"}
            desc={
              "Панелисти: Претставници од HR и синдикатот од различни индустрии."
            }
            presenter={"Марк Васкзурски"}
          />
          <ScheduleItem
            time={"12:30"}
            title={"Пауза за ручек и неформални разговори"}
            desc={""}
            presenter={null}
            cusClass={"pauseOrangeLIne"}
          />
          <ScheduleItem
            time={"13:00"}
            title={"Работилница: Стратегии за подобрување на соработката"}
            desc={
              "Практични совети и техники за подобрување на комуникацијата и координацијата."
            }
            presenter={"Една Моде"}
          />
          <ScheduleItem
            time={"14:00"}
            title={"Клучни алатки и методи за успешна соработка"}
            desc={
              "Презентација на алатки и методи кои може да се применат веднаш."
            }
            presenter={"Џејмс Сулливан"}
          />
          <ScheduleItem
            time={"14:45"}
            title={"Завршни зборови и заклучоци"}
            desc={
              "Резиме на клучните точки од настанот и дискусија за понатамошни активности."
            }
            presenter={null}
          />
          <ScheduleItem
            time={"15:00"}
            title={"Мрежно поврзување и неформално завршување на настанот"}
            desc={"Можност за неформални разговори и размена на контакти."}
            presenter={null}
          />
        </div>
      )}
      {day === "two" && (
        <div className="schedule">
          <ScheduleItem
            time={"16:00"}
            title={"Регистрација и утринско кафе"}
            desc={"Приситигнување и неформално запознавање меѓу учесниците."}
            presenter={null}
          />
          <ScheduleItem
            time={"16:30"}
            title={"Вовед и отворање на настанот"}
            desc={
              "Поздравен говор од организаторот и кратко претставување на агендата."
            }
            presenter={null}
          />
          <ScheduleItem
            time={"17:00"}
            title={
              "Презентација: Важноста на соработката меѓу HR одделот и синдикатот"
            }
            desc={
              "Клучни точки: Значењето на заедничката работа, придобивки и предизвици."
            }
            presenter={"Оливија Оли"}
          />
          <ScheduleItem
            time={"17:45"}
            title={"Панел дискусија: Искусувања и предизвици во пракса"}
            desc={
              "Панелисти: Претставници од HR и синдикатот од различни индустрии."
            }
            presenter={"Марк Васкзурски"}
          />
          <ScheduleItem
            time={"18:30"}
            title={"Пауза за вечера и неформални разговори"}
            desc={""}
            presenter={null}
            cusClass={"pauseOrangeLIne"}
          />
          <ScheduleItem
            time={"19:00"}
            title={"Работилница: Стратегии за подобрување на соработката"}
            desc={
              "Практични совети и техники за подобрување на комуникацијата и координацијата."
            }
            presenter={"Една Моде"}
          />
          <ScheduleItem
            time={"20:00"}
            title={"Клучни алатки и методи за успешна соработка"}
            desc={
              "Презентација на алатки и методи кои може да се применат веднаш."
            }
            presenter={"Џејмс Сулливан"}
          />
        </div>
      )}
    </section>
  );
}

export default AgendaConf;

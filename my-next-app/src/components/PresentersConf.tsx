import { useEffect, useState } from "react";
import { TeamComProp } from "@/pages/about";
import TeamCompCards from "@/microComponents/TeamCompCards";
function PresentersConf() {
  const [list, setList] = useState<TeamComProp[] | null>(null);
  useEffect(() => {
    fetch("http://localhost:5000/teamComp?_limit=3")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <section className="presentersConfSec">
      <h2>Говорници на настанот:</h2>
      <div>
        {list &&
          list.map((person) => {
            return (
              <TeamCompCards
                name={person.name}
                poss={person.position}
                key={person.id}
              />
            );
          })}
      </div>
    </section>
  );
}

export default PresentersConf;

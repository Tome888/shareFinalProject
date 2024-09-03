// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { Card } from "@/microComponents/InfiniteCardScroll";
// import BlogCard from "@/microComponents/BlogCard";

// // interface Event {
// //   id: string;
// //   title: string;
// //   category: string;
// //   date: string;
// // }

// function EventsFilter() {
//   const router = useRouter();
//   const [events, setEvents] = useState<Card[]>([]);
//   const [filteredEvents, setFilteredEvents] = useState<Card[]>([]);
//   const [activeFilters, setActiveFilters] = useState<string[]>([]);
//   const [searchInput, setSearchInput] = useState<string>("");

//   useEffect(() => {
//     fetch("http://localhost:5000/events")
//       .then((res) => res.json())
//       .then((data: Card[]) => setEvents(data));
//   }, []);

//   useEffect(() => {
//     if (router.query.category) {
//       const categoryParam = decodeURIComponent(router.query.category as string);
//       setActiveFilters([categoryParam]);
//     }
//   }, [router.query]);

//   useEffect(() => {
//     const filtered = events.filter((event) => {
//       const matchesFilters =
//         activeFilters.length === 0 || activeFilters.includes(event.category);
//       const matchesSearch = event.title
//         .toLowerCase()
//         .includes(searchInput.toLowerCase());
//       return matchesFilters && matchesSearch;
//     });
//     setFilteredEvents(filtered);
//   }, [events, activeFilters, searchInput]);

//   const handleFilterClick = (category: string) => {
//     setActiveFilters((prevFilters) =>
//       prevFilters.includes(category)
//         ? prevFilters.filter((filter) => filter !== category)
//         : [...prevFilters, category]
//     );
//     // Update URL parameters when a filter is clicked
//     router.push(
//       {
//         pathname: "/events",
//         query: { category },
//       },
//       undefined,
//       { shallow: true }
//     );
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchInput(e.target.value);
//   };

//   return (
//     <section>
//       <div className="buttonsWrapperFilter">
//         <button
//           onClick={() => {
//             setActiveFilters([]);
//             router.push("/events", undefined, { shallow: true });
//           }}
//           className={activeFilters.length === 0 ? "activeFilterBtn" : ""}
//         >
//           Сите
//         </button>
//         <button
//           onClick={() => handleFilterClick("HR caffee")}
//           className={
//             activeFilters.includes("HR caffee") ? "activeFilterBtn" : ""
//           }
//         >
//           HR caffee
//         </button>
//         <button
//           onClick={() => handleFilterClick("HR weekend")}
//           className={
//             activeFilters.includes("HR weekend") ? "activeFilterBtn" : ""
//           }
//         >
//           HR weekend
//         </button>
//         <button
//           onClick={() => handleFilterClick("HR webinar")}
//           className={
//             activeFilters.includes("HR webinar") ? "activeFilterBtn" : ""
//           }
//         >
//           HR webinar
//         </button>
//         <button
//           onClick={() => handleFilterClick("HR conferences")}
//           className={
//             activeFilters.includes("HR conferences") ? "activeFilterBtn" : ""
//           }
//         >
//           HR conferences
//         </button>
//       </div>

//       <form action="submit">
//         <label>Сите настани</label>
//         <input
//           type="text"
//           placeholder="search"
//           value={searchInput}
//           onChange={handleSearchChange}
//         />
//       </form>

//       {/* Render filtered event cards */}
//       <div className="eventsCardsWrapper">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <BlogCard
//               id={event.id}
//               title={event.title}
//               text={event.text}
//               img={event.img}
//               category={event.category}
//               key={event.id}
//             />
//           ))
//         ) : (
//           <p>Нема резултати</p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default EventsFilter;

// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { Card } from "@/microComponents/InfiniteCardScroll";
// import BlogCard from "@/microComponents/BlogCard";

// interface EventsFilterProp {
//   arrEventFilter: Card[];
// }

// function EventsFilter({ arrEventFilter }: EventsFilterProp) {
//   const router = useRouter();
//   const [events, setEvents] = useState<Card[]>([]);
//   const [filteredEvents, setFilteredEvents] = useState<Card[]>([]);
//   const [activeFilters, setActiveFilters] = useState<string[]>([]);
//   const [searchInput, setSearchInput] = useState<string>("");

//   useEffect(() => {
//     fetch("http://localhost:5000/events")
//       .then((res) => res.json())
//       .then((data: Card[]) => setEvents(data));
//   }, []);

//   useEffect(() => {
//     if (router.query.category) {
//       const categoryParams = (router.query.category as string).split(",");
//       setActiveFilters(categoryParams);
//     }
//   }, [router.query]);

//   useEffect(() => {
//     const filtered = events.filter((event) => {
//       const matchesFilters =
//         activeFilters.length === 0 || activeFilters.includes(event.category);
//       const matchesSearch = event.title
//         .toLowerCase()
//         .includes(searchInput.toLowerCase());
//       return matchesFilters && matchesSearch;
//     });
//     setFilteredEvents(filtered);
//   }, [events, activeFilters, searchInput]);

//   const handleFilterClick = (category: string) => {
//     setActiveFilters((prevFilters) =>
//       prevFilters.includes(category)
//         ? prevFilters.filter((filter) => filter !== category)
//         : [...prevFilters, category]
//     );
//     // Update URL parameters with multiple categories
//     router.push(
//       {
//         pathname: "/events",
//         query: {
//           category: activeFilters.includes(category)
//             ? activeFilters.filter((filter) => filter !== category).join(",")
//             : [...activeFilters, category].join(","),
//         },
//       },
//       undefined,
//       { shallow: true }
//     );
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchInput(e.target.value);
//   };

//   return (
//     <section>
//       <div className="buttonsWrapperFilter">
//         <button
//           onClick={() => {
//             setActiveFilters([]);
//             router.push("/events", undefined, { shallow: true });
//           }}
//           className={activeFilters.length === 0 ? "activeFilterBtn" : ""}
//         >
//           Сите
//         </button>
//         <button
//           onClick={() => handleFilterClick("HR caffee")}
//           className={
//             activeFilters.includes("HR caffee") ? "activeFilterBtn" : ""
//           }
//         >
//           HR caffee
//         </button>
//         <button
//           onClick={() => handleFilterClick("HR weekend")}
//           className={
//             activeFilters.includes("HR weekend") ? "activeFilterBtn" : ""
//           }
//         >
//           HR weekend
//         </button>
//         <button
//           onClick={() => handleFilterClick("HR webinar")}
//           className={
//             activeFilters.includes("HR webinar") ? "activeFilterBtn" : ""
//           }
//         >
//           HR webinar
//         </button>
//         <button
//           onClick={() => handleFilterClick("HR conferences")}
//           className={
//             activeFilters.includes("HR conferences") ? "activeFilterBtn" : ""
//           }
//         >
//           HR conferences
//         </button>
//       </div>

//       <form action="submit">
//         <label>Сите настани</label>
//         <input
//           type="text"
//           placeholder="search"
//           value={searchInput}
//           onChange={handleSearchChange}
//         />
//       </form>

//       {/* Render filtered event cards */}
//       <div className="eventsCardsWrapper">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <BlogCard
//               id={event.id}
//               title={event.title}
//               text={event.text}
//               img={event.img}
//               category={event.category}
//               key={event.id}
//             />
//           ))
//         ) : (
//           <p>Нема резултати</p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default EventsFilter;

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card } from "@/microComponents/InfiniteCardScroll";
import BlogCard from "@/microComponents/BlogCard";

interface EventsFilterProp {
  arrEventFilter: Card[];
}

function EventsFilter({ arrEventFilter }: EventsFilterProp) {
  const router = useRouter();
  const [filteredEvents, setFilteredEvents] = useState<Card[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    if (router.query.category) {
      const categoryParams = (router.query.category as string).split(",");
      setActiveFilters(categoryParams);
    }
  }, [router.query]);

  useEffect(() => {
    const filtered = arrEventFilter.filter((event) => {
      const matchesFilters =
        activeFilters.length === 0 || activeFilters.includes(event.category);
      const matchesSearch = event.title
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      return matchesFilters && matchesSearch;
    });
    setFilteredEvents(filtered);
  }, [arrEventFilter, activeFilters, searchInput]);

  const handleFilterClick = (category: string) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(category)
        ? prevFilters.filter((filter) => filter !== category)
        : [...prevFilters, category]
    );
    // Update URL parameters with multiple categories
    router.push(
      {
        pathname: "/events",
        query: {
          category: activeFilters.includes(category)
            ? activeFilters.filter((filter) => filter !== category).join(",")
            : [...activeFilters, category].join(","),
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <section>
      <div className="buttonsWrapperFilter">
        <button
          onClick={() => {
            setActiveFilters([]);
            router.push("/events", undefined, { shallow: true });
          }}
          className={activeFilters.length === 0 ? "activeFilterBtn" : ""}
        >
          Сите
        </button>
        <button
          onClick={() => handleFilterClick("HR caffee")}
          className={
            activeFilters.includes("HR caffee") ? "activeFilterBtn" : ""
          }
        >
          HR caffee
        </button>
        <button
          onClick={() => handleFilterClick("HR weekend")}
          className={
            activeFilters.includes("HR weekend") ? "activeFilterBtn" : ""
          }
        >
          HR weekend
        </button>
        <button
          onClick={() => handleFilterClick("HR webinar")}
          className={
            activeFilters.includes("HR webinar") ? "activeFilterBtn" : ""
          }
        >
          HR webinar
        </button>
        <button
          onClick={() => handleFilterClick("HR conferences")}
          className={
            activeFilters.includes("HR conferences") ? "activeFilterBtn" : ""
          }
        >
          HR conferences
        </button>
      </div>

      <form className="formSearchFilter" action="submit">
        <label>Сите настани</label>
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleSearchChange}
        />
      </form>

      {/* Render filtered event cards */}
      <div className="eventsCardsWrapper">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <BlogCard
              id={event.id}
              title={event.title}
              text={event.text}
              img={event.img}
              category={event.category}
              key={event.id}
              cardType="event"
            />
          ))
        ) : (
          <p>Нема резултати</p>
        )}
      </div>
    </section>
  );
}

export default EventsFilter;

// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { Card } from "@/microComponents/InfiniteCardScroll";
// import BlogCard from "@/microComponents/BlogCard";

// function EventsFilter() {
//   const router = useRouter();
//   const [events, setEvents] = useState<Card[]>([]);
//   const [filteredEvents, setFilteredEvents] = useState<Card[]>([]);
//   const [activeFilters, setActiveFilters] = useState<string[]>([]);
//   const [searchInput, setSearchInput] = useState<string>("");

//   useEffect(() => {
//     fetch("http://localhost:5000/events")
//       .then((res) => res.json())
//       .then((data: Card[]) => setEvents(data));
//   }, []);

//   useEffect(() => {
//     if (router.query.category) {
//       const categoryParams = (router.query.category as string).split(",");
//       setActiveFilters(categoryParams);
//     }
//   }, [router.query]);

//   useEffect(() => {
//     const filtered = events.filter((event) => {
//       const matchesFilters =
//         activeFilters.length === 0 || activeFilters.includes(event.category);
//       const matchesSearch = event.title
//         .toLowerCase()
//         .includes(searchInput.toLowerCase());
//       return matchesFilters && matchesSearch;
//     });
//     setFilteredEvents(filtered);
//   }, [events, activeFilters, searchInput]);

//   const handleFilterClick = (category: string) => {
//     setActiveFilters((prevFilters) =>
//       prevFilters.includes(category)
//         ? prevFilters.filter((filter) => filter !== category)
//         : [...prevFilters, category]
//     );
//     // Update URL parameters with multiple categories
//     router.push(
//       {
//         pathname: "/events",
//         query: {
//           category: activeFilters.includes(category)
//             ? activeFilters.filter((filter) => filter !== category).join(",")
//             : [...activeFilters, category].join(","),
//         },
//       },
//       undefined,
//       { shallow: true }
//     );
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchInput(e.target.value);
//   };

//   // Group events by category
//   const groupedEvents = filteredEvents.reduce(
//     (acc: { [key: string]: Card[] }, event) => {
//       if (!acc[event.category]) {
//         acc[event.category] = [];
//       }
//       acc[event.category].push(event);
//       return acc;
//     },
//     {}
//   );

//   return (
//     <section>
//       <div className="buttonsWrapperFilter">
//         <button
//           onClick={() => {
//             setActiveFilters([]);
//             router.push("/events", undefined, { shallow: true });
//           }}
//           className={activeFilters.length === 0 ? "activeFilterBtn" : ""}
//         >
//           Сите
//         </button>
//         <button
//           onClick={() => handleFilterClick("HR caffee")}
//           className={
//             activeFilters.includes("HR caffee") ? "activeFilterBtn" : ""
//           }
//         >
//           HR caffee
//         </button>
//         <button
//           onClick={() => handleFilterClick("HR weekend")}
//           className={
//             activeFilters.includes("HR weekend") ? "activeFilterBtn" : ""
//           }
//         >
//           HR weekend
//         </button>
//         <button
//           onClick={() => handleFilterClick("HR webinar")}
//           className={
//             activeFilters.includes("HR webinar") ? "activeFilterBtn" : ""
//           }
//         >
//           HR webinar
//         </button>
//         <button
//           onClick={() => handleFilterClick("HR conferences")}
//           className={
//             activeFilters.includes("HR conferences") ? "activeFilterBtn" : ""
//           }
//         >
//           HR conferences
//         </button>
//       </div>

//       <form action="submit">
//         <label>Сите настани</label>
//         <input
//           type="text"
//           placeholder="search"
//           value={searchInput}
//           onChange={handleSearchChange}
//         />
//       </form>

//       {/* Render grouped event cards */}
//       <div className="eventsCardsWrapper">
//         {Object.keys(groupedEvents).length > 0 ? (
//           Object.keys(groupedEvents).map((category) => (
//             <div key={category} className="categorySection">
//               <h2>{category}</h2>
//               <div className="categoryEvents">
//                 {groupedEvents[category].map((event) => (
//                   <BlogCard
//                     id={event.id}
//                     title={event.title}
//                     text={event.text}
//                     img={event.img}
//                     category={event.category}
//                     key={event.id}
//                   />
//                 ))}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Нема резултати</p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default EventsFilter;

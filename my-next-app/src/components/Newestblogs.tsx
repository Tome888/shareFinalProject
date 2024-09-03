import BlogCard from "@/microComponents/BlogCard";
import ScrollIndividualCard from "@/microComponents/ScrollIndividualCard";
import { useEffect, useState } from "react";

function Newestblogs() {
  const [filteredBlogs, setFilteredBlogs] = useState<any[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/blogs?_limit=2")
      .then((res) => res.json())
      .then((data) => setFilteredBlogs(data));
  }, []);

  if (filteredBlogs)
    return (
      <section className="newestBlogsSection">
        <h2>Најнови блогови</h2>
        <div>
          <div>
            {filteredBlogs.length > 0 ? (
              <BlogCard
                id={filteredBlogs[0].id}
                title={filteredBlogs[0].title}
                text={filteredBlogs[0].text}
                img={filteredBlogs[0].img}
                category={filteredBlogs[0].category}
                key={filteredBlogs[0].id}
                cardType="blog"
              />
            ) : (
              <p>Loading...</p>
            )}
            <ScrollIndividualCard theEvent={"1"} />
            <ScrollIndividualCard theEvent={"2"} />
            {filteredBlogs.length > 0 ? (
              <BlogCard
                id={filteredBlogs[1].id}
                title={filteredBlogs[1].title}
                text={filteredBlogs[1].text}
                img={filteredBlogs[1].img}
                category={filteredBlogs[1].category}
                key={filteredBlogs[1].id}
                cardType="blog"
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div
            className="cardsContainer singleEventScrlRight"
            style={{
              backgroundImage: `url(/eventsImg/img6.jpg)`,
            }}
          >
            <p className="zIndexx">Најнови огласи</p>
            <ul className="zIndexx">
              <li>HR админ </li>
              <li>Практикант</li>
              <li>Практикант</li>
              <li>Извршен менаџер</li>
              <li>HR Практикант</li>
              <li>Management trainee</li>
              <li>Менаџер за HR</li>
            </ul>
          </div>
        </div>
      </section>
    );
}
export default Newestblogs;

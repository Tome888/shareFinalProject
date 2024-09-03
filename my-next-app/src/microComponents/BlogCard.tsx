// import { useRouter } from "next/router";

// export interface BlogCardProps {
//   id: string;
//   title: string;
//   text: string;
//   img: string;
//   category: string;
// }

// function BlogCard({ id, title, text, img }: BlogCardProps) {
//   const router = useRouter();
//   console.log(router.asPath);

//   const cardType = () => {
//     console.log(router.asPath);
//     const folderType = router.asPath === "/blog"? 'BlogCard':'eventsImg';
//   };

//   const navigateToBlog = (idBlog: string) => {
//     const presentRoute = router.asPath;
//     const blogPath = presentRoute + `/${idBlog}`;

//     router.push(blogPath);
//   };
//   return (
//     <div className="cardWrapperBlog" onClick={() => navigateToBlog(id)}>
//       <img src={`/BlogCard/${img}`} alt="" />
//       <div className="blogCardtextWrapper">
//         <h3>{title}</h3>
//         <p className="blogCardText">{text}</p>
//         <p className="morePelementCardBlog">Прочитај повеќе</p>
//       </div>
//     </div>
//   );
// }
// export default BlogCard;

import { useRouter } from "next/router";

export interface BlogCardProps {
  id: any;
  title: string;
  text: string;
  img: string;
  category: string;

  cardType: "blog" | "event";
}

function BlogCard({ id, title, text, img, cardType }: BlogCardProps) {
  const router = useRouter();

  const cardTypeFunc = () => {
    const folderType = cardType === "blog" ? "BlogCard" : "eventsImg";
    return folderType;
  };

  const navigateToBlog = (idBlog: string) => {
    const blogPath =
      cardType === "blog" ? "/blog" + `/${idBlog}` : "/events" + `/${idBlog}`;

    router.push(blogPath);

    // console.log(blogPath);
  };

  return (
    <div className="cardWrapperBlog" onClick={() => navigateToBlog(id)}>
      <img src={`/${cardTypeFunc()}/${img}`} alt="" />
      <div className="blogCardtextWrapper">
        <h3>{title}</h3>
        <p className="blogCardText">{text}</p>
        <p className="morePelementCardBlog">Прочитај повеќе</p>
      </div>
    </div>
  );
}
export default BlogCard;

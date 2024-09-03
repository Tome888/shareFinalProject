import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function BreadCrumbs() {
  const router = useRouter();
  const [breadPath, setBreadpath] = useState<any[]>([]);

  useEffect(() => {
    const thePath = router.asPath.split("/");
    setBreadpath(thePath);
  }, [router]);

  const pathMaker = (path: string) => {
    if (path === "") {
      return router.push("");
    } else if (path === "events") {
      return router.push("/events");
    } else if (path === "blog") {
      return router.push("/blog");
    } else if (path === "yearlyConference") {
      return router.push("/yearlyConference");
    } else if (path === "about") {
      return router.push("/about");
    }
  };

  const makebreadCrumb = (arrPaths: any[]) => {
    const arrTranslatedPaths: any = [];

    arrPaths.forEach((path, inx) => {
      if (path === "") {
        arrTranslatedPaths.push("Почетна");
      }

      if (path === "events") {
        arrTranslatedPaths.push("Настан");
      }
      if (path === "blog") {
        arrTranslatedPaths.push("Блогови");
      }
      if (path === "yearlyConference") {
        arrTranslatedPaths.push("Годишна конференција");
      }
      if (path === "about") {
        arrTranslatedPaths.push("За нас");
      }

      if (inx === 2) {
        const toNum = +path;
        arrTranslatedPaths.push(
          isNaN(toNum) ? "Блог Пост" : "Информации за настан"
        );
      }
    });

    return (
      <div className="breadCumbsWrapper">
        {arrTranslatedPaths.map((pathItem: any, inx: any) => {
          return (
            <p key={inx} onClick={() => router.push(`/${breadPath[inx]}`)}>
              <i
                className="fa-solid fa-chevron-right"
                style={{ display: pathItem === "Почетна" ? "none" : "block" }}
              ></i>
              {pathItem}
            </p>
          );
        })}
      </div>
    );
  };
  return makebreadCrumb(breadPath);
}

export default BreadCrumbs;

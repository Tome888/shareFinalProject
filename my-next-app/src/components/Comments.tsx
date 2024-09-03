import CommentComp from "@/microComponents/CommentComp";
import { useState } from "react";

interface CommentProps {
  userName: string;
  comment: string;
}

function Comments() {
  const [arrCom, setArrCom] = useState<CommentProps[] | []>([]);
  const [textComm, setTextComm] = useState("");

  const addCommentFunc = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (textComm.trim() !== "") {
      setArrCom([
        ...arrCom,
        {
          userName: "Me",
          comment: textComm,
        },
      ]);
      setTextComm("");
    }
  };

  return (
    <section>
      <div className="addComment">
        <div className="orangeBorderComm">
          <div className="addCommPfpWrapper">
            <img src="/pfps/pfp3.jpg" alt="" className="commPfp addCommPfp" />
            <i className="fa-solid fa-paperclip"></i>
          </div>

          <form className="commentForm" onSubmit={addCommentFunc}>
            <textarea
              name="comment"
              onChange={(event) => setTextComm(event.target.value)}
              value={textComm}
            ></textarea>
            <button type="submit" className="buttonAni">
              Коментирај
            </button>
          </form>
        </div>
      </div>
      <div className="commentWrapper">
        <h2>Коментари</h2>
        <div className="commentSection">
          <CommentComp
            imgPath={"/pfps/pfp1.jpg"}
            userName={"User 99"}
            textOfComment={null}
            numberOfComm={arrCom.length + 1}
          />
          <div className="commentIndividualWrapper replyIndividual">
            <div className="divASDASD">
              <img src="/pfps/pfp2.jpg" alt="" className="commPfp" />
              <div>
                <p className="commUserName">User 2</p>
                <p>Пред 11минути</p>
              </div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              libero non magni dolore iure mollitia at fuga earum, incidunt aut
              harum, architecto consequatur quos cupiditate temporibus corrupti
              enim suscipit in eligendi vero laborum? Quod illo a quam, sed ad
              quia. Rerum libero aliquid totam iure nam id nihil dicta nemo!
            </div>
          </div>

          <div className="commentIndividualWrapper replyIndividual">
            <div className="divASDASD">
              <img src="/pfps/pfp3.jpg" alt="" className="commPfp" />
              <div>
                <p className="commUserName">User 3</p>
                <p>Пред 12минути</p>
              </div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              libero non magni dolore iure mollitia at fuga earum, incidunt aut
              harum, architecto consequatur quos cupiditate temporibus corrupti
              enim suscipit in eligendi vero laborum? Quod illo a quam, sed ad
              quia. Rerum libero aliquid totam iure nam id nihil dicta nemo!
            </div>
          </div>

          <CommentComp
            imgPath={"/pfps/pfp4.jpg"}
            userName={"User 10"}
            textOfComment={null}
            numberOfComm={null}
          />

          {arrCom.map((comm, inx) => {
            return (
              <CommentComp
                key={inx}
                imgPath={"/pfps/pfp3.jpg"}
                userName={comm.userName}
                textOfComment={comm.comment}
                numberOfComm={null}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Comments;

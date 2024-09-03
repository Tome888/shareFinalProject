import { useState } from "react";

interface CommentProp {
  imgPath: string;
  userName: string;
  textOfComment: string | null;
  numberOfComm: number | null;
}

function CommentComp({
  imgPath,
  userName,
  textOfComment,
  numberOfComm,
}: CommentProp) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div className="commentIndividualWrapper">
      <div className="divASDASD">
        <img src={imgPath} alt="" className="commPfp" />
        <div>
          <p className="commUserName">
            {userName}
            {/* {Math.floor(Math.random() * 1000)} */}
          </p>
          <p>Пред 10минути</p>
        </div>
      </div>
      <div>
        {textOfComment
          ? textOfComment
          : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero
          non magni dolore iure mollitia at fuga earum, incidunt aut harum,
          architecto consequatur quos cupiditate temporibus corrupti enim
          suscipit in eligendi vero laborum? Quod illo a quam, sed ad quia.
          Rerum libero aliquid totam iure nam id nihil dicta nemo!`}
      </div>
      <div className="commentInteractionWrapper">
        <i
          className={`fa-${liked ? "solid " : "regular"} fa-thumbs-up`}
          onClick={() => {
            setLikes(liked ? likes - 1 : likes + 1);
            setLiked(!liked);
          }}
        ></i>
        <p>{likes}</p>
        <i className="fa-regular fa-comment"></i>
        <p>{numberOfComm ? numberOfComm : 0}</p>
      </div>
    </div>
  );
}

export default CommentComp;

import React from "react";
import SubButton from "./UI/button/SubButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <SubButton onClick={() => navigate(`/posts/${props.post.id}`)}>
          Открыть
        </SubButton>
        <SubButton
          style={{ marginLeft: "15px" }}
          className="mr-4"
          onClick={() => props.remove(props.post)}
        >
          Удалить пост
        </SubButton>
      </div>
    </div>
  );
};

export default PostItem;

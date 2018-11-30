import React from "react";
import Comment from "../container/comment";

const CommentList = props => {
  let { item } = props;
  return (
    <ul className="comment-list">
      {item.kids.map((value, index) => {
        return <Comment commentID={value} key={index} text="main" />;
      })}
    </ul>
  );
};

export default CommentList;

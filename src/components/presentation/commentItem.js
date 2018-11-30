import React from "react";
import Comment from "../container/comment";
const CommentItem = props => {
  return (
    <li className="comment-item ">
      <div className="clearfix">
        <div className="comment-icon-container">
          <img
            src="../images/commentIcon2.jpg"
            alt="comment-icon"
            className="comment-icon"
          />
        </div>
        <div className="comment-detail-container">
          <div className="comment-author">
            <h3>{props.by}</h3>
          </div>
          <div className="comment-date">{props.time}</div>
          <div
            className="comment-discription"
            dangerouslySetInnerHTML={{ __html: props.text }}
          />
        </div>
      </div>

      <hr className="comment-serperator" />
      {props.kids !== undefined && props.kids.length > 0 && (
        <ul className="sub-comment">
          {props.kids.map((value, id) => {
            return <Comment commentID={value} key={id} text="sub" />;
          })}
        </ul>
      )}
    </li>
  );
};

export default CommentItem;

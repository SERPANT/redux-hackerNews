import React from "react";
const ListItemView = props => {
  return (
    <li className="list-item">
      {props.loading || (
        <div>
          <div className="item-title">{props.itemTitle}</div>
          <div className="item-sub-title">
            <span className="auther-name"> By: {props.itemAuthor}</span>
            <span className="comment-number">
              , comments: {props.itemComment}
            </span>
          </div>
        </div>
      )}
      {props.loading && <div className="loading">LOADING...</div>}
    </li>
  );
};

export default ListItemView;

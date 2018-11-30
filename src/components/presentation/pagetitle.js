import React from "react";

const PageTitle = props => {
  let { item } = props;
  return (
    <div className="page-title-container">
      <div className="page-title">
        <h1>
          <a href={item.url}>{item.title}</a>
        </h1>
      </div>
      <div className="page-author">By : {item.by}</div>
    </div>
  );
};

export default PageTitle;

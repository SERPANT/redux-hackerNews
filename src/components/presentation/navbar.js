import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  let tabs = props.tabs.map((tab, index) => {
    return (
      <Link to={{ pathname: tab.path }} key={index}>
        <li className="tab">{tab.text}</li>
      </Link>
    );
  });
  return (
    <div className="navbar">
      <ul className="tab-list">{tabs}</ul>
    </div>
  );
}

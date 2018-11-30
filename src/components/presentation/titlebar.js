import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";

export function TitleBar(props) {
  let tabs = [
    { text: "Top Stories", path: "/" },
    { text: "Ask HN Stories", path: "/askstories" },
    { text: "Job HN Stories", path: "/jobstories" }
  ];
  return (
    <div className="header">
      <Link to={{ pathname: "/" }}>
        <img src="images/hn2.jpg" className="page-icon" alt="icon" />
        <span className="page-Title"> HACKER NEWS</span>
      </Link>
      <NavBar tabs={tabs} />
    </div>
  );
}

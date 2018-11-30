import React, { Component } from "react";

class PageList extends Component {
  clickAction(e) {
    this.props.changePage(e.target.value - 1);
  }

  render() {
    let pageList = [];
    let currentPage = this.props.currentPage;
    for (let i = currentPage + 1; i <= currentPage + 5; i++) {
      pageList.push(
        <li
          className={
            i === currentPage + 1 ? "page-item active-page" : "page-item"
          }
          key={i}
          value={i}
          onClick={this.clickAction.bind(this)}
        >
          {i}
        </li>
      );
    }

    return (
      <div>
        <ul className="page-list">{pageList}</ul>
      </div>
    );
  }
}

export default PageList;

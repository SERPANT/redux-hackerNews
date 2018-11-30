import axios from "axios";
import { connect } from "react-redux";
import React, { Component } from "react";
import * as action from "../action/listaction";
import ListItems from "../components/container/listitem";
import PageList from "../components/presentation/pageList";

class AskStories extends Component {
  async componentDidMount() {
    if (
      this.props.idList.length <= 0 ||
      this.props.currentTab !== "ASK_STORIES"
    ) {
      const list = await axios.get(
        "https://hacker-news.firebaseio.com/v0/askstories.json"
      );
      this.props.setIdList(list.data, false, "ASK_STORIES");
    }
  }

  slicePage() {
    return this.props.idList.slice(
      this.props.currentPage * 10,
      (this.props.currentPage + 1) * 10
    );
  }

  changePage(newPage) {
    this.props.changePage(newPage);
  }

  render() {
    let cutList = this.slicePage();
    let listItems = cutList.map(value => {
      return <ListItems id={value} key={value} />;
    });

    if (this.props.loading) {
      return <div>LOADING...</div>;
    }
    return (
      <div className="main-body">
        <ul className="title-list">{listItems}</ul>
        <PageList
          currentPage={this.props.currentPage}
          changePage={this.changePage.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.listReducer.currentPage,
    loading: state.listReducer.loading,
    idList: state.listReducer.idList,
    data: state.listReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIdList: (list, loading, tab) => {
      dispatch(action.setIdList(list, loading, tab));
    },
    changePage: newPage => {
      dispatch(action.changePage(newPage));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AskStories);

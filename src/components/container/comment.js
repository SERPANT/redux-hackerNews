import Axios from "axios";
import { connect } from "react-redux";
import React, { Component } from "react";
import CommentItem from "../presentation/commentItem";
import * as action from "../../action/commentItemaction";

class Comment extends Component {
  async componentDidMount() {
    //this.props.resetData();
    let item = await Axios(
      "https://hacker-news.firebaseio.com/v0/item/" +
        this.props.commentID +
        ".json"
    );

    this.props.setData(item.data, false, this.props.commentID);
  }

  async componentWillReceiveProps(nextProp) {
    if (this.props.commentID !== nextProp.commentID) {
      this.props.resetData();
      let item = await Axios(
        "https://hacker-news.firebaseio.com/v0/item/" +
          nextProp.commentID +
          ".json"
      );

      this.props.setData(item.data, false, nextProp.commentID);
    }
  }

  convertUnixTimeToNormal(unixTimestamp) {
    let a = new Date(unixTimestamp * 1000);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();

    let time = month + " " + date + " ," + year + " @ " + hour + ":" + min;
    return time;
  }

  render() {
    if (this.props.data[this.props.commentID] !== undefined) {
      if (this.props.data[this.props.commentID].loading) {
        return <li className="comment-item"> LOADING...</li>;
      }
      let data = this.props.data[this.props.commentID].data;

      return (
        this.props.loading || (
          <CommentItem
            by={data.by}
            time={this.convertUnixTimeToNormal(data.time)}
            text={data.text}
            kids={data.kids}
          />
        )
      );
    } else {
      return <li className="comment-item"> LOADING...</li>;
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.commentItemReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: (item, loading, id) => {
      dispatch(action.setData(item, loading, id));
    },
    resetData: () => {
      dispatch(action.resetData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);

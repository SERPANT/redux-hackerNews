import Axios from "axios";
import { connect } from "react-redux";
import React, { Component } from "react";
import * as action from "../action/commentaction";
import PageTitle from "../components/presentation/pagetitle";
import CommentList from "../components/presentation/commentlist";

class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  async componentDidMount() {
    let data;
    if (this.props.location.state !== undefined) {
      data = this.props.location.state.object.data;
    } else if (this.item === undefined) {
      let item = await Axios.get(
        "https://hacker-news.firebaseio.com/v0/item/" + this.id + ".json"
      );
      data = item.data;
    }

    this.props.setItem(data, false, data.kids);
  }

  async componentWillReceiveProps(nextprops) {
    if (this.props.item.id !== -1) {
      if (this.props.item.id !== nextprops.item.id) {
        this.props.setItem({ id: -1, kids: {} }, true, {});
        let item = await Axios.get(
          "https://hacker-news.firebaseio.com/v0/item/" + this.id + ".json"
        );
        let data = item.data;

        this.props.setItem(data, false, data.kids);
      }
    }
  }

  render() {
    let item = this.props.item;
    if (item !== undefined && item.id !== -1) {
      return (
        <div className="comment-page-body">
          <PageTitle item={item} />
          <div>{item.text}</div>
          {item.kids && item.kids.length > 0 && (
            <div className="comment-list-container">
              <CommentList item={item} />
            </div>
          )}
          {this.props.kids && this.props.kids.length <= 0 && (
            <div class="no-comment">No COMMENTS TO DISPLAY</div>
          )}
        </div>
      );
    } else {
      return <div>LOADING...</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    item: state.commentReducer.item,
    kids: state.commentReducer.kids,
    loading: state.commentReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setItem: (item, loading, kids) => {
      dispatch(action.setData(item, loading, kids));
    },
    resetData: () => {
      dispatch(action.resetData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentPage);

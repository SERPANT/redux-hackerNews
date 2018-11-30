import Axios from "axios";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as action from "../../action/itemaction";
import ListItemView from "../presentation/listItemview";

class ListItem extends Component {
  async componentDidMount() {
    let item = await Axios.get(
      "https://hacker-news.firebaseio.com/v0/item/" + this.props.id + ".json"
    );

    this.props.setData(item.data, false, this.props.id);
  }

  render() {
    let item = this.props.data[this.props.id];
    let itemTitle,
      itemComment,
      itemAuthor,
      loading = true;

    if (item !== undefined) {
      itemTitle = item.data.title;
      itemComment = item.data.descendants;
      itemAuthor = item.data.by;
      loading = item.loading;
    }

    return (
      <Link
        to={{ pathname: `/news/${this.props.id}`, state: { object: item } }}
      >
        <ListItemView
          loading={loading}
          itemAuthor={itemAuthor}
          itemComment={itemComment}
          itemTitle={itemTitle}
        />
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.itemReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: (data, loading, id) => {
      return dispatch(action.setData(data, loading, id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);

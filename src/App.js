import store from "./store";
import { Provider } from "react-redux";
import React, { Component } from "react";
import TopStories from "./views/topstories";
import JobStories from "./views/jobstories";
import AskStories from "./views/askstories";
import CommentPage from "./views/commentpage";
import { TitleBar } from "./components/presentation/titlebar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="main-container">
            <TitleBar />
            <Switch>
              <Route exact path="/" component={TopStories} />
              <Route path="/news/:id" component={CommentPage} />
              <Route exact path="/askstories" component={AskStories} />
              <Route exact path="/jobstories" component={JobStories} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

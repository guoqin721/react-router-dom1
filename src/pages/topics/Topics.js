import React, { Component } from 'react';
import Topic from './topic/Topic';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
export default class Topics extends Component {
  render() {
    return (
      <div>
        <h1>主题列表</h1>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              {`${this.props.match.url}`}
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>
              组件
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              属性 v 状态
            </Link>
          </li>
          <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
          <Route exact path={this.props.match.url} render={() => (
              <h3>请选择一个主题</h3>
          )}/>
        </ul>
      </div>
    )
  }
}
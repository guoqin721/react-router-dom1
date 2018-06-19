import React, {Component} from 'react';
export default class Topic extends Component{
  render() {
    return (
      <div>
        {this.props.match.params.topicId} 
      </div>
    )
  }
}
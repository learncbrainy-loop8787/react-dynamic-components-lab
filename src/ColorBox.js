import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
      {this.props.opacity < .2 ? null : ( 
        <ColorBox opacity= {newValue} />
      )}
    </div>
    )
  }

}


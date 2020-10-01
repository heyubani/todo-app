import React, { Component } from 'react'

export default class VisibilityControl extends Component {
    render = () =>
        <div style={{ margin:'2px',fontWeight:'bold' }}>
            <input type="checkbox" checked={this.props.ischecked}
             onChange={(e) => this.props.callback(e.target.checked)}/> {"   "}
            <label>show {this.props.description}</label>
        </div>
}
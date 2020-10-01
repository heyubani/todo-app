import React, {Component} from 'react'

export default class TodoBanner extends Component {
    render = () => 
   <div style={{textAlign:"center"}}>
       <header className="ui header big-text">
         {this.props.name}’s To Do List
         ({this.props.task.filter(t => !t.done).length} items to do)
       </header>
   </div>
}
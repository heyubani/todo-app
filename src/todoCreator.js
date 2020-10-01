import React, {Component} from 'react'

export default class TodoCreator extends Component {
    state = {
        newItem:''
    }

    handleOnChange =(e)=> {
       this.setState({newItem: e.target.value})
    }

    createNew = () => {
        this.props.callback( this.state.newItem);
        this.setState({newItem:''});
    }
    render = () => 
   <div>
       <input style={{width:'700px',height:'40px'}} value={this.state.newItem} onChange={this.handleOnChange}/>
       <button className="ui button green" onClick={this.createNew}>Add</button>
   </div>
}
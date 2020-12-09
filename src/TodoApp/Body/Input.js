import React from 'react';
import { v4 as uuid } from 'uuid'

class Input extends React.Component {
  constructor() {
    super()
    this.state = { 
      value: ''
    }
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({
      value
    })
  }

  onClick = () => {
    if (!this.state.value.trim()) {
      return alert('Please enter a task')
    }
    if (!this.props.currentTag) {
      return alert('Please choose a tag')
    }

    //Add task
    this.props.addNewTask({
      name: this.state.value,
      group: this.props.currentTag,
      uuid: uuid(),
      isCompleted: false
    })
  }
  render() {
    const { value } = this.state
    return (
      <div className="container__box-input">
        <input type="text" value={value} onChange={this.handleChange} placeholder="What do you need to do?"></input>
        <button onClick={this.onClick}><i className="fas fa-plus"></i></button>
      </div>
    )
  }
}

export default Input;
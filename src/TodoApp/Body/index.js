import React from 'react';
import Input from './Input'
import Tags from './Tags'
import List from './List'
import Tabs from './Tabs'
import '../../font awesome/css/all.min.css'

class Body extends React.Component {
  constructor() {
    super()
    this.state = { 
      currentTag: '',
      list: [],
      status: 'ALL',
      isCheckedAll: false
    }
  }

  setCurrentTag = tag => {
    this.setState({
      currentTag: tag
    })
  }

  addNewTask = item => {
    this.setState({
      list: [ ...this.state.list, item]
    })
  }

  removeTask = task => {
    this.setState({
      list: this.state.list.filter(item => item.uuid !== task.uuid)
    })
  }

  filterByStatus = (list = [], status = '', uuid) => {
    switch (status) {
      case 'ACTIVE':
        return list.filter(item => !item.isCompleted)
      case 'COMPLETED':
        return list.filter(item => item.isCompleted)
      case 'REMOVE':
        return list.filter(item => item.uuid !== uuid)
      default:
        return list
    }
  }

  countCompleted = (list = []) => {
    return list.filter(item => item.isCompleted)
  }

  markCompleted = (uuid) => {
    const { list } = this.state
    let isCheckedAll = true
    const updatedListItem = list.map(item => {
      if ((!item.isCompleted && item.uuid !== uuid) || (item.isCompleted && item.uuid === uuid)) {
        isCheckedAll = false
      }
      if (item.uuid === uuid) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
    this.setState({
      isCheckedAll,
      list: updatedListItem
    })
  }

  render() {
    const { currentTag, list, status, isCheckedAll } = this.state
    return(
      <div className="container">
        <Input 
        currentTag= {currentTag}
        addNewTask={this.addNewTask}/>
        <br></br>
        <br></br>

        <Tags
        currentTag= {currentTag}
        setCurrentTag={this.setCurrentTag}/>

        <List 
        currentTag= {currentTag}
        markCompleted={this.markCompleted}
        isCheckedAll={isCheckedAll}
        list={this.filterByStatus(list,status)}
        removeTask={this.removeTask}/>

        <Tabs
        activeButton={status}
        setStatusFilter={(status) => this.setState({ status })}
        numOfItem={this.countCompleted(list).length}
        numOfTodos={list.length}/>
      </div>
    )
  }
}

export default Body
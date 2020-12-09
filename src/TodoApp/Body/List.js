import React from 'react';


class List extends React.Component {
  constructor() {
    super()
    this.state = { 

    }
  }

  renderList = () => {
    const { currentTag } = this.props

    let newList = this.props.list
    if (currentTag) {
      newList = this.props.list.filter(task => task.group === currentTag)
    }

    return newList
  }

  render() {
    const list = this.renderList()
    const { markCompleted } = this.props
    return (
      <div className="container__box-list">
        <div className="container__box-list--selection">
        {
        list.map((task, index) => {
          return(
            <div key={index}  className={task.isCompleted ? 'container__box-list--task completed' : 'container__box-list--task'}>
              <input type="checkbox" checked={task.isCompleted} onChange={() => markCompleted(task.uuid)}></input>
              <span>{task.name}</span>
              <button onClick={() => this.props.removeTask(task)}><i class="fas fa-times"></i></button>
            </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default List;
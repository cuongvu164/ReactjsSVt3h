import React from 'react';


class Tabs extends React.Component {
  constructor() {
    super()
    this.state = { 
      
    }
  }

  render() {
    const { activeButton, setStatusFilter, numOfItem, numOfTodos } = this.props
    return (
      <div className="container__box-tab">
        <button
          className={ activeButton === "ALL" ? "selected" : ""}
          onClick={() => setStatusFilter("ALL")}>
            All Task
        </button>
          
        <button
          className={ activeButton === "ACTIVE" ? "selected" : ""}
          onClick={() => setStatusFilter("ACTIVE")}>
            Active
        </button>

        <button
          className={ activeButton === "COMPLETED" ? "selected" : ""}
          onClick={() => setStatusFilter("COMPLETED")}>
            Completed
        </button>

        <button>
            Clear Completed
        </button>

        <span className="count-completed">
          <span>{numOfItem}</span>
          <span> / {numOfTodos} Completed </span>
        </span>
      </div>
    )
  }
}

export default Tabs;
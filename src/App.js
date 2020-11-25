import React from 'react'
import Menu from './Session 16/Exercise 1/main.js'
import AnswerAndQuestion from './Session 16/Exercise 2/main.js'
class AppMenu extends React.Component {
  render() {
    return (
    <div>
      <div>
        <div class="container">
          <Menu/>
        </div>
      </div>
      <div>
        <div class="box">
          <AnswerAndQuestion/>
        </div>
      </div>      
    </div>
    )
  }
}

export default AppMenu;

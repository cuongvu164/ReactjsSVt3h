import React from 'react'
import './style.css'

class AnswerAndQuestion extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Question/>
        <Control/>
      </div>
    )
  } 
}

class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <h1>Reactjs Quiz</h1>
        <div class="loading"></div>
        <p>0% complete</p>
      </div>
    )
  }
}

class Question extends React.Component {
  render() {
    return (
      <div class="question">
        <h2>What is the full form of HTTP?</h2>
        <p>a. Hyper text transfer package</p>
        <p>b. Hyper text transfer protocol</p>
        <p>c. Hyphenation text test program</p>
        <p>d. None of the above</p>
      </div>
    )
  }
}

class Control extends React.Component {
  render() {
    return (
      <div className="control">
        <button>Back</button>
        <button>Skip</button>
      </div>
    )
  }
}

export default AnswerAndQuestion;
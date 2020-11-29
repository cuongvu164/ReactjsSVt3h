import React from 'react'
import './style.css'
import '../../font awesome/css/all.min.css'

class Menu extends React.Component {
  render() {
    return (
      <div class="menu">
        <ul>
          <li>
            <a href="#a">
              <span>
                <i class="fas fa-home"></i>
              </span>
            </a>
          </li>

          <div class="box-right"></div>
          <div class="box-left"></div>

          <li>
            <a href="#a">
              <span><i class="fas fa-flask"></i>Projects</span>
            </a>
          </li>
          <div class="box-right"></div>
          <div class="box-left"></div>

          <li>
            <a href="#a">
              <span><i class="fas fa-angle-double-right"></i>Breadcrumb</span>
            </a>
          </li>
          <div class="box-right"></div>
          <div class="box-left"></div>
          
          <li>
            <a href="#a">
              <span><i class="fas fa-rocket"></i>Getting started</span>
            </a>
          </li>
          <div class="box-right"></div>
          <div class="box-left"></div>
          <li>
            <a href="#a">
              <span><i class="fas fa-arrow-down"></i>Download</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu;

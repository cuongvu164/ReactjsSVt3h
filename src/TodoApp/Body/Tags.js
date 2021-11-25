import React from 'react';


class Tags extends React.Component {
  constructor() {
    super()
    this.state = { 
      tags: ['Home', 'Work', 'School'],
    }
  }

  render() {
    const { currentTag } = this.props
    const { tags } = this.state
    return (
      <div className="container__box-tag">
        <div className="container__box-tag--tags">
          Tags:
          <span className={ !currentTag ? 'tag-active' : ''} onClick={() => this.props.setCurrentTag('')}><i class="fas fa-circle"></i>All</span>
          {
            tags.map((tag, index) =>{
              return <span
              className={ currentTag === tag ? 'tag-active' : ''}
              onClick={() => this.props.setCurrentTag(tag)}
              key={ index }><i class="fas fa-circle"></i> { tag } </span>
            })
          }
        </div>
      </div>
    )
  }
}

export default Tags;
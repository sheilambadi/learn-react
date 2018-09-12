import React, { Component } from 'react';

class ProjectItem extends Component {

  deleteProject(id){
    // console.log(id+" clicked");
    this.props.onDelete(id);
  }


  render() {
    // console.log(this.props.projects);
    return(
      <li className="Project">
        <strong>{this.props.project.title}</strong> : {this.props.project.category} 
        <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
    
  }
}

export default ProjectItem;

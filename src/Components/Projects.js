import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  // component to loop through individual movie components before passing them to view

  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    // console.log(this.props.projects);

    let projectItems;

    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        // console.log(project);

        return(
          // send data as property in ProjectItem
          // assign each project to projectItems
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project}/>
        );
      });
    }

    return(
      <div className="Projects">
        {/* pass the assigned projects */}
        {projectItems}
      </div>
    );
    
  }
}

Projects.propTypes={
  projects:PropTypes.array, 
  onDelete:PropTypes.func
}

export default Projects;

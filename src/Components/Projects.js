import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  // component to loop through individual movie components before passing them to view
  render() {
    // console.log(this.props.projects);

    let projectItems;

    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        // console.log(project);

        return(
          // send data as property in ProjectItem
          // assign each project to projectItems
          <ProjectItem key={project.title} project={project}/>
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

export default Projects;

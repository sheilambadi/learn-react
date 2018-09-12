import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  // Data should be initialized here - e.g. from db
  // only define keys and states here
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  // better design is to have the data in the following lifecycle method
  // fires off whenever view is rerendered
  componentWillMount(){
    this.setState({projects: [
      {
        title: "Business Website",
        category: "Web Design"
      },
      {
        title: "Social App",
        category: "Mobile Development"
      },
      {
        title: "Ecommerce Shopping Site",
        category: "Web Development"
      }
    ]})
  }

  handleAddProject(project){
    // console.log(project);

    // states are immutable thus need to push new component then update state
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    // Javascript code here
    return(
      <div className="App">
        {/* JSX Code Here */}
        {/* Pass data from state as property */}
        {/* Data should be immutable - passed from the top down */}

        {/* oreder of displaying components maintained */}

        My Application

        <AddProject addProject={this.handleAddProject.bind(this)}/>

        <Projects projects={this.state.projects}/>
      </div>
    );
    
  }
}

export default App;

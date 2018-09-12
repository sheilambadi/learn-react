import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  // Data should be initialized here - e.g. from db
  // only define keys and states here
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getProjects(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: "Business Website",
        category: "Web Design"
      },
      {
        id: uuid.v4(),
        title: "Social App",
        category: "Mobile Development"
      },
      {
        id: uuid.v4(),
        title: "Ecommerce Shopping Site",
        category: "Web Development"
      }
    ]});
  }

  getTodos(){
    // make request here using jquery
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      dataType: 'json',
      cache: false,
      success: function(data){
        // set todos in state
        this.setState({todos:data}, function(){
          console.log(this.state);
        })

      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  // better design is to have the data in the following lifecycle method
  // fires off whenever view is rerendered
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  // to get todos in this lifecycle method
  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    // console.log(project);

    // states are immutable thus need to push new component then update state
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
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

        <h3>Latest Projects</h3>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
    
  }
}

export default App;

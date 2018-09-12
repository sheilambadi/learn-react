import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  // Data should be initialized here - e.g. from db
  constructor(){
    super();
    this.state = {
      projects: [
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
      ]
    }
  }

  render() {
    // Javascript code here
    return(
      <div className="App">
        {/* JSX Code Here */}
        {/* Pass data from state as property */}
        {/* Data should be immutable - passed from the top down */}
        My Application
        <Projects projects={this.state.projects}/>
      </div>
    );
    
  }
}

export default App;

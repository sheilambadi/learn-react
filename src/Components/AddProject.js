import React, { Component } from 'react';

class AddProject extends Component {
    // store value submitted to state
    constructor(){
        super();

        // bind data to the state
        this.state = {
            newProject: {}
        };
    }

    static defaultProps = {
        categories: ["Web design", "Mobile development", "Web development"]
    }

    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert("Title required!");
        } else {
            // set whatever user enters in state
            this.setState({newProject: {
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                // console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

  render() {
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    });
    // console.log(this.props.projects);
    return(
      <div>
          <h3>Add Project</h3>

        {/* bind this for it to be accessed by the method*/}
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                <label>Title</label><br/>
                <input type="text" ref="title"/>
              </div>
              <div>
                <label>Category</label><br/>
                <select ref="category">
                    {categoryOptions}
                </select>
              </div>

              <input type="submit" value="submit"/>

          </form>
      </div>
    );
    
  }
}

export default AddProject;

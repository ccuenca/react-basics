import React, {Component} from 'react';
import './App.css';
import Person from '../Person/Person';

class App extends Component{

  state = {
    persons: [
      { name: 'Cristhian', age:'37' },
      { name: 'Diana', age:'34' },
      { name: 'Sebastián', age:'1' },
    ],
    showPersons: true
  }

  switchNameHandler = (event) => {
    //this.state.persons[0].name = 'Sebas';
    this.setState({
      persons: [
        { name: 'Sebas', age:'37' },
        { name: event.target.value, age:'34' },
        { name: 'Sebastián', age:'1' },
      ] 
    });
  }

  tooglePersonsHandlers = () => {
    //const doesShow = this.state.showPersons;
    //this.setState({ showPersons: !doesShow });

    console.log(this.refs.Test1.Saludar());
  }

  renderPersons(){
  }

  render(){
    return (
        <div className='App'> 
          <h1>My First React App!</h1>
          <button className='btn btn-primary' onClick={this.tooglePersonsHandlers}>Switch Name</button>
          <br/>
          <br/>
          <Test ref="Test1" />

          {
            this.state.showPersons === true ?
            <div>
              <Person 
                changeName={this.switchNameHandler}
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />

              <Person 
                changeName={this.switchNameHandler}
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} />

              <Person
                changeName={this.switchNameHandler}
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div>
            :null
          }
          
        </div>
    );
  }

}

export default App;
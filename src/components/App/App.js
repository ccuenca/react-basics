//#region Imports
import React, {Component} from 'react';
import './App.css';
import Person from '../Person/Person';
//#endregion

class App extends Component{
 
  state = {
    persons: [
      { id:'1', name: 'Cristhian', age:'37' },
      { id:'2', name: 'Diana', age:'34' },
      { id:'3', name: 'Sebastián', age:'1' },
    ],
    showPersons: true
  }

  changeNameHandler = (event, id) => {    
    
    const personIndex = this. state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState( {persons: persons} );
  }

  tooglePersonsHandlers = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });    
  }

  deletePersonHandler = (index) =>{
    //const persons = this.state.persons.slice();

    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  render(){

    let persons = null;

    if( this.state.showPersons ){
      persons = (
      <div>
        
        { this.state.persons.map( (person, index) => {
            return <Person  key={person.id}
                            click={() => this.deletePersonHandler(index)} 
                            name={person.name} 
                            age={person.age} 
                            changeName={(event) => this.changeNameHandler(event, person.id)} />
        })}

        {/* <Person 
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
          age={this.state.persons[2].age} /> */}
      </div>
      );
    }

    return (
        <div className='App'> 
          <h1>My First React App!</h1>
          <button className='btn btn-primary' onClick={this.tooglePersonsHandlers}>Switch Name</button>
          <br/>
          <br/>
          { persons }
        </div>
    );
  }

}

export default App;
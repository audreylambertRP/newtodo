import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id:1, text:'first'},
        {id:2, text:'second'},
        {id:3, text:'third'}
      ]
    }
    this.newTodo = ''
    this.idCounter = 4
  }

  updateNewTodo(e) {
    this.newTodo = e.target.value
  }

  addTodo() {
   this.setState({
     todos: this.state.todos.concat({id: this.idCounter++, text: this.newTodo})
   })
  }

  deleteTodo(i) {
    this.setState({
      todos: this.state.todos.filter(function(elem, index, array) {
        return i !== index
      })
    })       
  }

  deleteTodoClosure(i) {
    return () => {
      this.setState({
        todos: this.state.todos.filter((elem, index) => index !== i)
      })
    }
  }

  render() {
    return (
      <div>
        <h1>My new todo</h1>
        <div id='addTodo'>
          <input type="text" onChange={this.updateNewTodo.bind(this)} />
          <input type='submit' value='Add todo' onClick={this.addTodo.bind(this)}/>
        </div>
        <div id ='todoList'>
          {
            this.state.todos.map(function(value, index) {
              return <div key={value.id}>
                        <li>{index + 1} : {value.text}</li>
                        <button type='button' onClick={this.deleteTodo.bind(this, index)}>Delete todo</button>
                        <button type='button' onClick={this.deleteTodoClosure.bind(this)(index)}>Delete todo</button>
                     </div>
            }.bind(this))
          }
        </div>
      </div>
    );
  }
}


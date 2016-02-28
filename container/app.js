import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id:1, text:'first', status:true},
        {id:2, text:'second', status:true},
        {id:3, text:'third', status:true}
      ]
    }
    this.newTodo = ''
    this.idCounter = 4
  }

  updateNewTodo(e) {
    this.newTodo = e.target.value
  }

  addTodo(e) {
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

  displayFilter() {
    return () => {
      console.log('displayFilter')
    } 
 }

  changeTodoStatus() {
    console.log('dans changeTodoStatus')
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
                        <button type='button' onClick={this.changeTodoStatus.bind(this, index)}>Is it done?</button>
                     </div>
            }.bind(this))
          }
        </div>
        
        <div id='filtering'>
          <button type='button' onClick={this.displayFilter('all')}>Display all</button>
          <button type='button' onClick={this.displayFilter('todo')}>Display only todos</button>
          <button type='button' onClick={this.displayFilter('done')}>Delete only done</button>
        </div>
      </div>
    );
  }
}


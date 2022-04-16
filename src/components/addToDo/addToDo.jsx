import React from 'react'
import { connect } from 'react-redux'
import { setNewTodoText, addNewTodo } from '../../redux/todos/todos.actions'
import {InputGroup, FormControl, Button} from "react-bootstrap";
import  './addToDo.css';


const AddTodoForm = ({ newTodoText, setNewTodoText, addNewTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    addNewTodo()
  }

  return (
    <InputGroup className="mb-3">
    <FormControl
      required
      placeholder="Add Todo"
      aria-label="Todos"
      aria-describedby="basic-addon2"
      type="text"
      value={newTodoText}
      onChange={(e) => setNewTodoText(e.target.value)}
      style={{outline:"none"}}
    />
    <Button variant="success" id="button-addon2" onClick={handleSubmit} >
      Add
    </Button>
  </InputGroup>
  )
}
const mapStateToProps = (state) => ({
  newTodoText: state.todos.newTodoText,
})
const mapDispatchToProps = (dispatch) => ({
  setNewTodoText: (value) => dispatch(setNewTodoText(value)),
  addNewTodo: () => dispatch(addNewTodo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)

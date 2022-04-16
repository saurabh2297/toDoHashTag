import React from 'react'
import { connect } from 'react-redux'
import TodoItem from '../toDoItem/toDoItem'

const TodosContainer = ({ filteredTodos }) => (
  <div>
    <div className="">
      {filteredTodos &&
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  </div>
)
const mapStateToProps = (state) => ({
  filteredTodos: state.todos.filteredTodos,
})

export default connect(mapStateToProps)(TodosContainer)

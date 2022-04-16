import React from 'react'
import { connect } from 'react-redux'
import { Card , Button , Container ,Row ,Col } from 'react-bootstrap'
import {
  addHashTagFilter,
  markTodoAsCompleted,
} from '../../redux/todos/todos.actions'
import { ReactComponent as DoneIcon } from '../../assets/done.svg'
import './toDoItem.css'

const TodoItem = ({ todo, markTodoAsCompleted, addHashTagFilter }) => {
  return (
    <Card key={todo.id} style={{margin:"3%"}}>
      <Container>
        <Row>
          <Col sm={9}>
            {todo.text.split(' ').map((word, index) =>
              word.startsWith('#') ? (
              <span
                key={index}
                onClick={() => addHashTagFilter(word)}
                className="hashtag"
              >
                {word}{' '}
              </span>
            ) : (
            <span key={index}>{word} </span>
          ),
        )}
        </Col>
        <Col sm={2}>{todo.status === 'incomplete' ? (
          <Button variant="warning" style={{margin:"15%"}} size="sm"  onClick={() => markTodoAsCompleted(todo.id)}><DoneIcon/></Button>
        ) : (
            <Button variant="success" style={{margin:"15%"}} size="sm" disabled><DoneIcon/></Button>
        )}</Col>
      </Row>
    </Container>   
  </Card>
  )
}
const mapDispatchToProps = (dispatch) => ({
  addHashTagFilter: (word) => dispatch(addHashTagFilter(word)),
  markTodoAsCompleted: (todoId) => dispatch(markTodoAsCompleted(todoId)),
})

export default connect(null, mapDispatchToProps)(TodoItem)

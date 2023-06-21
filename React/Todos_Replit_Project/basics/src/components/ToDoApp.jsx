import React from 'react'
import NoteForm from './NoteForm'
import { Col, Container, Row } from 'react-bootstrap'
import Notes from './Notes'



const ToDoApp = () => {
  return (
    <Container className='mt-5'>
      <Row >
        <Col sm={5} className='mb-5'>
          <NoteForm />
        </Col>
        <Col sm={7}>
          <Notes />
        </Col>
      </Row>
    </Container>
      
    
    
  )
}

export default ToDoApp
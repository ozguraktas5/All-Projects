import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import './style.scss'

const Clicked = () => {

  const [counter, setCounter] = useState(0);

  const clicked = () => {
    setCounter(prev => prev + 1)
    document.title = `${counter+1} times clicked`
  }

  return (
    <Container className='mt-5'>
        <h1>{counter} times clicked on the button below</h1>
        <Button variant='danger' className='btn-grad mt-3' onClick={clicked}>Click On Me</Button>
    </Container>
  )
}

export default Clicked
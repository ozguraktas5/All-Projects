import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, ButtonGroup, Button } from 'react-bootstrap'
import './style.scss'

const Progress = () => {

  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    const newProgress = progress + 10;
    setProgress(newProgress <= 100 ? newProgress : 100);
  };

  const decreaseProgress = () => {
    const newProgress = progress - 10;
    setProgress(newProgress >= 0 ? newProgress : 0);
  };

  return (
    <Container>
      <h1 className='text-center mt-5'>Progress Bar</h1>
      <ButtonGroup className='buttons d-block text-center mt-5'>
        <Button className='button-1' onClick={increaseProgress}>
            Artı
        </Button>
        <Button className='button-2' onClick={decreaseProgress}>
            Eksi
        </Button>
      </ButtonGroup>
      <ProgressBar className="pbar mt-4" now={progress} label={`${progress}%`}/>
    </Container>
  )
}

export default Progress
import React from 'react';
import './style.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from 'react-bootstrap';   


const Accordion = () => {
  return (
    <div className='accordions'>
        <h1>Questions</h1>
        <div className='accordion'>
            <h4>Do I Have To Allow The Use Of Cookies?</h4>
            <Button>
                <AddIcon />
                <RemoveIcon />
            </Button>
        </div>
        <div className='accordion'>
            <h4>How Do I Change My My Page Password?</h4>
            <Button>
                <AddIcon />
                <RemoveIcon />
            </Button>
        </div>
        <div className='accordion'>
            <h4>What Is BankID?</h4>
            <Button>
                <AddIcon />
                <RemoveIcon />
            </Button>
        </div>
        <div className='accordion'>
            <h4>Whose Birth Number Can I Use?</h4>
            <Button>
                <AddIcon />
                <RemoveIcon />
            </Button>
        </div>
        <div className='accordion'>
            <h4>When Do I Recieve A Password Ordered By Letter?</h4>
            <Button>
                <AddIcon />
                <RemoveIcon />
            </Button>
        </div>
    </div>
  )
}

export default Accordion
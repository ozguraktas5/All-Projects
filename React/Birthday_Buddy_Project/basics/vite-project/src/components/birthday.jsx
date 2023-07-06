import React from 'react';
import './scss/style.scss';
import image1 from '../assets/person-1.jpeg';
import image2 from '../assets/person-2.jpeg';
import image3 from '../assets/person-3.jpeg';
import image4 from '../assets/person-4.jpeg';
import image5 from '../assets/person-5.jpeg';


const Birthday = () => {
  return (
    <div className='card'>
        <h3>5 Birthdays Today</h3>
        <div className='profile'>
            <img src={image1} alt="person1" />
            <div>
                <h4>Bertie Yates</h4>
                <p>29 years</p>
            </div>
        </div>
        <div className='profile'>
            <img src={image2} alt="person2" />
            <div>
                <h4>Hester Hogan</h4>
                <p>32 years</p>
            </div>
        </div>
        <div className='profile'>
            <img src={image3} alt="person3" />
            <div>
                <h4>Larry Little</h4>
                <p>36 years</p>
            </div>
        </div>
        <div className='profile'>
            <img src={image4} alt="person4" />
            <div>
                <h4>Sean Walsh</h4>
                <p>34 years</p>
            </div>
        </div>
        <div className='profile'>
            <img src={image5} alt="person5" />
            <div>
                <h4>Lola Gardner</h4>
                <p>29 years</p>
            </div>
        </div>
        <button>Clear All</button>
    </div>
  )
}

export default Birthday
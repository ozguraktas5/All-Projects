import React from 'react';
import CardDesign from './components/my-card-design/mycard';



const App = () => {
  return (
    <>
      
      <CardDesign
          title= "MEN'S T-SHIRT"
          image = "image1.jpg"
          price = "150.00₺"
          discounted_price = "135.00₺"
          discount = "-10%"
          
      />
      <CardDesign
          title = "MEN'S T-SHIRT"
          image = "image2.jpg"
          price = "200.00₺"
          discounted_price = "180.00₺"
          discount = "-10%"
          
      />
    
      
    </>
  )
}

export default App
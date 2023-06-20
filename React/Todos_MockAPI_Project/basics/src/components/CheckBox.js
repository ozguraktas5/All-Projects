import React, { useState} from 'react'

const CheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
    };


  return (
    <div>
        <label>
            <input
                type='checkbox'
                checked={isChecked}
                onChange={handleCheckBoxChange}
            />
        </label>
    </div>
  )
}

export default CheckBox
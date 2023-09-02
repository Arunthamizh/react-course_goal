import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css'; // the css is scoped to this component
import styled from 'styled-components'

// const FormControl = styled.div`

//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.invalid ? 'red' : 'black'}
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//   background: ${props => props.invalid ? '#ffd7d7' : 'transparent' }
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// `;// taged template literal

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault(); 
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* access the css module file for style */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid }`}>

      {/* below approach is for styled css approach */}

      {/* <FormControl className={!isValid && 'invalid' }>  */} 
        {/* styled css approach and pass the value as props to styled css */}
      {/* <FormControl invalid={!isValid }> */}

        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{borderColor: !isValid ? 'red': '#ccc',
                      background: !isValid ? 'salmon': 'transparent' }} type="text" onChange={goalInputChangeHandler} />
      {/* </FormControl> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

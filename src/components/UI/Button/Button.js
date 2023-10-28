import React from 'react';

import styled from 'styled-components'; // *  Like this need to import the css filr
//  css module class approach is to set class to be unique to this component.
  // Not allowed to apply to other component, It create a unique class name for the classes in the css module.
   //  (By adding extra name to the class like -> "Button_button__KXFVC" )
    // Change the css file as Buttom.module.css  
import styles from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

// New way to create button with styled component

// const Button = styled.button`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;
//     //  media query with styled components
//     @media (min-width: 768px){
//        width : auto; 
//     }
  
//   .&:focus {
//     outline: none;
//   }
  
//   .&:hover,
//   .&:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
  
// `; // taged template literal

export default Button;

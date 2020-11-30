import React from 'react';
// function to handle page on click
export const HandlePageOnClick = (target,props) =>{
   props.history.push(target);
   window.screenTop = 0;
}
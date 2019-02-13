/* eslint
  react/destructuring-assignment: off,
  react/prop-types: off,
*/
import React from 'react';

// Exercise 01/01
// ===========
//
// At this stage we are not interesting in layout, just
// getting used to JSX and some of its features. Therefore,
// don't worry about how the component renders/looks, focus
// on making sure the right data is rendered.
//
// Tasks
// --------
// ✅    Your component should accept a 'status' prop, which renders the status label
// ✅    Your component should accept a 'stat' prop, which renders a statistic
// ✅    Your component should render one of the allowed status icons
//
// 🚫    Styling & layout are out of scope for this exercise
//
// ⭐️    Capitalise the first letter of the status label
//
// Tip
// ------
// 🐨   You can create an icon using the 'i' DOM node, and with either of the following class names:
//        Unavailable  =>    'fas fa-user-slash'
//        Available    =>    'far fa-user'
//        Busy         =>    'fas fa-user'
// class Unavailable extends React.component {
// 	Render () {
// 		return <h1> hello </h1>
// 	}
// }
//
// const status = Unavailable
// const stat = 4


function StatusBlock(props) {
  return (
    <div>
      <i> {props.status} </i>
      <h1> {props.stat} </h1>
      <i className='far fa-user'></i>
    </div>
  );
}

export default StatusBlock;

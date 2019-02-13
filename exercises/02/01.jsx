/* eslint
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/destructuring-assignment: off,
  max-len: off,
*/
import React from 'react';

// Exercise 02/01
// ===========
//
// The focus on this exercise is to manipulate local component state.
// In the next exercises, we will build this example to showcase some key
// patterns/usages of stateful components.
//
//
// Tasks
// --------
// ✅    Your component should not accept any props
// ✅    Your component should initialise a 'state' object
// ✅    Your component's state object should contain a 'team' node
// ✅    Your component's state object should initialise the 'team' node to an empty string
// ✅    Your component should render an input DOM element to accept text input from the user
// ✅    Your component should update the 'state.team' with the text provided by the user
// ✅    Your component should render the team name from state, as it is updated
// ✅    Your event data should come from `event.target` -- not `event.currentTarget` -- as the test suite doesn't offer that simulation
//
//
// Tips
// ------
// 🐨  Add the ALL of the following class names to your <input /> component to make it obvious on the screen:
//      "appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
// 🐨  You'll need to "listen" for changes, based on the user's input. Think about which DOM API you could use,
//      and where you can put this in your component.
// 🐨  Remember that native DOM attributes are camelCased!
// 🐨  You can initialise state and class properties using any of the valid syntax options; this project is setup
//     to support "all" of the currently popular appraoches.
class App extends React.Component {
  constructor() {
    super();
    this.state = {team: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) { // this event is not the native DOM event, it's a react copy called a synthetic event.
  // const value = event.target.value
  const { value } = event.target // this line and above are the same. THis one is ES6 syntax
    this.setState({team: value})
  }

  render() {
    const team = this.state.team
    return (
      <div className="w-1/4">
        Start HERE!
        <input
          value = { team } // this ensures that the value that the user sees in the input box and the value that appears on the screen
                           // are idwentical- tightly linked. Without this then the user is seeing what the browser knows
                           // they've typed, and because of lag it can look different than what the user sees elsewhere.
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type='text'
          onChange={this.handleChange}
        />
        <h1> { team } </h1>
      </div>
    );
  }
}

export default App;

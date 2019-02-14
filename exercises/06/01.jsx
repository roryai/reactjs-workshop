/* eslint
  react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  react/no-multi-comp: off,
  max-len: off,
*/
import React from 'react';
import PropTypes from 'prop-types';


// Exercise 06/01
// ===========
//
// We will take a short diversion here and explore "HOCs", or Higher-Order-Components.
// While the demo app doesn't define any HOCs directly, HOCs are one of the foundational advanced
// concepts in ReactJS, and can help abstract cross-cutting concerns across several components.
// They also showcase one of ReactJS' powerhouse features: composability.
//
// Although, while we won't define any inside the demo app, we will be using one -- arguably the most
// popular -- heavily when we explore Redux.
//
// Tasks
// --------
// ✅    You should define a `withMouse` HOC that injects the current mouse X and Y coordinates
// ✅    Your `withMouse` HOC should update the current coordinates in real time, as the user moves their mouse
// ✅    Your component should accept a `mouse` prop, which is an object containing the `x` and `y` nodes and correspond to
//        the current mouse (x,y) positions, respectively.
// ✅    Your component should render the current X, Y position by pulling the information from the `mouse` prop
//        The format should be: (x,y) including the parentheses.
//
// 🚫   Styling is out of scope
// 🚫   You are free to add additional text, markup, but we will only be looking for the current X, Y position of the mouse
//
// Tips
// ------
// 🐨  Use the `onMouseMove` Synthetic DOM event to capture the current X and Y coords of the mouse
// 🐨  Remember, you HOC `props` are READ-ONLY, so you'll have to store the updates somewhere else to trigger a re-render
//
// 👩‍💻  Credit: Based on https://github.com/ReactTraining/react-workshop/
export class App extends React.Component {

  render() {
    const {mouse} = this.props
    return (
      <div> {/* this is the innermost div to be rendered. it sits inside the div from the withMouse method's div, below.*/}
        (Current position is: {mouse.x || '0'}, {mouse.y || '0'})
      </div>
    );
  }
};

// Add runtime prop validation
App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
};

// Define our HOC
// needs to return the current mouse coordinates. Updates them in real time.
function withMouse(InputComponent) {
  return class HOCComponent extends React.Component { // this class can be anonymous, named here for clarity
    constructor(props) {
      super(props);
      this.mouseHandler = this.mouseHandler.bind(this) // always bind a method that's contained withing a class so that it can be referenced with this.
      this.state = {
        x: 0,
        y: 0
      }
    }

    mouseHandler(event) {
      const { clientX, clientY } = event;

      this.setState({
        x: clientX,
        y: clientY
      })
    };

    render() {
      return (
        <div className="" onMouseMove={this.mouseHandler}>
          <InputComponent {...this.props} mouse={this.state} /> {/* this is where the dumb component, App, is instantiated. The 'class' is passed in, not the instantiated object. It is instantiated with the state belonging to the HOC. */}
                          {/* ...this.props passes all the props that are contained within the HOC object. In this case it's empty, but it's good practive generally.*/}
        </div>
      )
    }
  }
}

const AppWithHOC = withMouse(App)

export default AppWithHOC;

// Compound Components
// http://localhost:3000/isolated/exercise/02.extra-1.js
// For rendered version see: https://codesandbox.io/s/busy-nobel-pgtdud?file=/src/App.js

import * as React from 'react'
import {Switch} from '../switch'

// 🐨 replace this with a call to React.Children.map and map each child in
// props.children to a clone of that child with the props they need using
// React.cloneElement.
// 📜 https://reactjs.org/docs/react-api.html#reactchildren
// 📜 https://reactjs.org/docs/react-api.html#cloneelement

function Toggle({ children }) {
    const [on, setOn] = React.useState(false);
    const toggle = () => setOn(!on);

    return React.Children.map(children, (child) => {
        if (allowedTypes.includes(child.type)) {
            const newChild = React.cloneElement(child, { on, toggle });

            return newChild;
        }
        return child;
    });
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({ on, children }) => (on ? children : null);

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({ on, children }) => (on ? null : children);

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({ on, toggle }) => <Switch on={on} onClick={toggle} />;

function MyToggleButton({ on, toggle }) {
    return on ? "the button is on yo." : "the button is off sooo...";
}

const allowedTypes = [ToggleOn, ToggleOff, ToggleButton];
function App() {
    return (
        <div>
            <Toggle>
                <ToggleOn>The button is on</ToggleOn>
                <ToggleOff>The button is off</ToggleOff>
                <span>Hello</span>
                <ToggleButton />
                <MyToggleButton />
            </Toggle>
        </div>
    );
}

export default App;

/*
eslint
  no-unused-vars: "off",
*/

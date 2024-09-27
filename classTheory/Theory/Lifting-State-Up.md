LIFTING STATE UP (Levantar el estado)
Is a technique used to share state between multiple components. Instead of each component having its own local state, the state is “lifted” to a common ancestor component. This way, the parent component holds the state (the ancestor/parent component then passes the state down to its child components via props).

ANALOGY 
Think of it like a family sharing a single WiFi router. Instead of each family member having their own separete internet connection, they all connect to the same router. The router (parant component) manages the internet connection (state), and each family member (child component) uses that connection. 

EXAMPLE 

We have two components - Temperature.jsx and BoilingVeredict.jsx. Both need to share the temperature state. 

Temperature.jsx --> This component is resonsible for capturing the user's input (temperature)

            function TemperatureInput({ temperature, onTemperatureChange }) {
            return (
                <fieldset>
                <legend>Enter temperature:</legend>
                <input
                    value={temperature}
                    onChange={(e) => onTemperatureChange(e.target.value)}
                />
                </fieldset>
            );
            }

BoilingVerdict.jsx --> Is responsible for displaying a message bases on the temperature 

            function BoilingVerdict({ temperature }) {
            if (temperature >= 100) {
                return <p>The water would boil.</p>;
            }
            return <p>The water would not boil.</p>;
            }


Both components need to share the same state (the temperature). So, we use a parent component that manages the state (lift state up)

Parent component 

                function Calculator() {
                const [temperature, setTemperature] = React.useState('');

                return (
                    <div>
                    <TemperatureInput
                        temperature={temperature}
                        onTemperatureChange={setTemperature}
                    />
                    <BoilingVerdict temperature={temperature} />
                    </div>
                );
                }


In the Calculator component:

The temperature state is created using the useState hook.
This temperature state is then passed down as a prop to both the TemperatureInput component (to display and update the input) and the BoilingVerdict component (to determine if the water will boil).
The TemperatureInput component can update the state via the onTemperatureChange callback, which is also passed down from the parent. When the user types a value, it updates the temperature in the Calculator component.
The BoilingVerdict component reads the temperature prop and displays the appropriate message based on its value.

By lifting the state up, both components share the same temperature without each managing its own state, allowing them to stay in sync.


NOTE: 

Lifting state up involves moving the state to the nearest common ancestor of components that need to share or synchronize state (Share state between sibling components or between a parent and its direct children.). This technique is useful when you have a few components that need to share state and you want to keep the state management simple and straightforward.

Key Points:
- Data-flow: One-directional, from parent to children via props. When a child needs to update the state, it uses a callback function (also passed down from the parent) to update the state in the parent.
- Scope: Limited to a few components that share a common ancestor.
- Usage: Ideal for small to medium-sized applications where state sharing is not overly complex.
Implementation: State is managed in a parent component and passed down to child components via props.


Example: A simple form with a name input
Parent component (App): Holds the state for name and passes it down to the child (NameInput). It also passes a function to update the state.
Child component (NameInput): Displays an input field where the user can type a name. It uses the callback to update the parent's state.

            import React, { useState } from 'react';
            import NameInput from './NameInput';

            function App() {
            // Parent holds the state
            const [name, setName] = useState('');

            // Function to update the state (passed to child)
            const handleNameChange = (newName) => {
                setName(newName);
            };

            return (
                <div>
                <h1>Lifting State Up Example</h1>
                {/* Pass the state and the update function as props */}
                <NameInput name={name} onNameChange={handleNameChange} />
                <p>The name entered is: {name}</p>
                </div>
            );
            }

            export default App;


    import React from 'react';

    function NameInput({ name, onNameChange }) {
    // Handle the input change and call the parent’s update function
    const handleInputChange = (e) => {
        onNameChange(e.target.value);
    };

    return (
        <div>
        <label>Enter your name: </label>
        {/* Controlled input field (value is the parent's state) */}
        <input
            type="text"
            value={name}
            onChange={handleInputChange} // Updates the parent’s state
        />
        </div>
    );
    }

    export default NameInput;

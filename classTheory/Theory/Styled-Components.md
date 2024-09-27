
STYLE COMPONENTS

Is a popular library for styling React applications. It allows you to write CSS directly within your JavaScript code, promoting a component-based approach to styling. This method helps keep styles scoped to individual components, making it easier to manage and maintain your code.

It is recommended to use it when we have small pieces of code, for instance, when we have atoms in an atomic design or when we are creating a small app. The reason why it is better in those cases is that we can use our styles inside the same component, so we can manage them directly and have all our code in the same place 

Key Features:
- Component-Based Styling: Styles are tied to specific components, ensuring that they don’t leak into other parts of the application.
- Dynamic Styling: You can use JavaScript to dynamically adjust styles based on props or state.
- Theming: Styled Components supports theming, allowing you to define a set of styles that can be applied across your application.

EXAMPLE 
            import styled from 'styled-components';

            const Button = styled.button`
            background: ${props => props.primary ? 'blue' : 'white'};
            color: ${props => props.primary ? 'white' : 'blue'};
            font-size: 1em;
            margin: 1em;
            padding: 0.25em 1em;
            border: 2px solid blue;
            border-radius: 3px;
            `;

            function App() {
            return (
                <div>
                <Button primary>Primary Button</Button>
                <Button>Default Button</Button>
                </div>
            );
            }

            export default App;




Props --> In React, props are a way to pass data from a parent component to a child component. They are 'read-only', meaning the child component recieving the prop cannot modify it. 

When passing a prop to a child component, we use the following syntax:

js --> 
<ChildComponent propName={value} />

propName: This is the name of the prop being passed.
{value}: The value can be a variable, string, function, object, array, etc., that we want to pass to the child component.

Analogy example 

Imagine you have a parent and a child in real life. The parent gives the child a lunchbox with a sandwich inside.

Parent: The parent represents the parent component.
Lunchbox: The lunchbox is the prop, named lunchbox.
Sandwich: The sandwich inside the lunchbox is the value passed to the prop.
Child: The child represents the child component.

In code, it would look like this:
const Parent = () => {
  const sandwich = "Peanut Butter & Jelly";
  return <Child lunchbox={sandwich} />;
};

const Child = ({ lunchbox }) => {
  return <p>Lunch contains: {lunchbox}</p>;
};

Here, the Parent component passes the sandwich value to the Child component via the lunchbox prop. The Child component then displays what’s inside the lunchbox.


Another way to explain prop is "They are incoming elements that you pass as a property inside the function". 


COMPONENTS 

LIFTING STATE UP 
Is a technique used to share state between multiple components. Instead of each component having its own local state, the state is “lifted” to a common ancestor component. This ancestor component then passes the state down to its child components via props.
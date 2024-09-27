CONDITIONAL RENDERING
Conditional rendering in React allows you to render different components or elements based on certain conditions. It refers to the process of displaying different UI elements or components based on certain conditions. It’s similar to how conditions work in JavaScript, where you use if, else, or ternary operators to decide what to display.

Key Concepts:
If/Else Statements: Use JavaScript’s if statements to conditionally render components.
Ternary Operators: A more concise way to conditionally render components.
Logical && Operator: Render a component only if a condition is true.

EXAMPLES 

If/Else Statements:
            function Greeting({ isLoggedIn }) {
            if (isLoggedIn) {
                return <h1>Welcome back!</h1>;
            } else {
                return <h1>Please sign up.</h1>;
            }
            }

    If isLoggedIn is true, the message Welcome back! will be shown.
    If isLoggedIn is false, the message Please sign in. will be displayed.

Ternary Operators:
            function Greeting({ isLoggedIn }) {
            return (
                <div>
                {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
                </div>
            );
            }

    Here, if isLoggedIn is true, it will render "Welcome back!", otherwise, it will render "Please sign in."

Logical && Operator:
          function ShowMessage({ hasMessage }) {
            return (
                <div>
                {hasMessage && <p>You have a new message!</p>}
                </div>
            );
            }


    If hasMessage is true, the text You have a new message! will be displayed.
    If hasMessage is false, nothing will be rendered (the component is skipped).

Switch Case
            function Status({ status }) {
            switch (status) {
                case 'loading':
                return <p>Loading...</p>;
                case 'error':
                return <p>Error occurred!</p>;
                case 'success':
                return <p>Success!</p>;
                default:
                return <p>Unknown status</p>;
            }
            }

    Depending on the value of status, the component will render the appropriate message.

Combine logic

            function UserGreeting({ user }) {
            if (!user) {
                return <h1>Please sign in</h1>;
            }

            return (
                <div>
                {user.isAdmin ? <h1>Welcome Admin</h1> : <h1>Welcome User</h1>}
                </div>
            );
            }

    If user is null or undefined, the message Please sign in is shown.
    If user exists and isAdmin is true, it will display Welcome Admin.
    If user exists and isAdmin is false, it will display Welcome User.
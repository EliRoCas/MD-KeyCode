REACT ROUTER DOM

Is a library used for routing in React applications. It allows you to create dynamic, client-side routing, enabling your app to navigate between different components or pages without refreshing the entire page. This is essential for building single-page applications (SPAs).

Key Features:

- Declarative Routing: Define your routes using JSX, making it easy to understand and manage.
- Nested Routes: Create complex routing structures with nested routes.
- Dynamic Routing: Routes can be dynamic, allowing for parameters and more flexible navigation.
- Hooks: Utilize hooks like useHistory, useLocation, useParams, and useRouteMatch to interact with the router.

EXAMPLE 

            import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

            function Home() {
            return <h2>Home</h2>;
            }

            function About() {
            return <h2>About</h2>;
            }

            function App() {
            return (
                <Router>
                <div>
                    <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                    </ul>
                    </nav>

                    <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    </Switch>
                </div>
                </Router>
            );
            }

            export default App;

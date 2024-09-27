Both are ways to pass information to a web server in a URL, but they differ in their structure, usage, and intend. 


QUERY PARAMS

They are key-value pairs that appear after the ? in a URL. They are typically used to filter, sort, or paginate resources rather than identify a specific resource.

SYNTAX
Query parameters appear in the URL after a ?, and multiple parameters are separated by &.

Format: /resource?param1=value1&param2=value2
Example: /search?query=react&page=2

ANALOGY
Think of query parameters like asking for specific toppings on a pizza. You can add as many toppings as you want, and they are optional.

EXAMPLE

        https://example.com/search?query=react&sort=asc&page=2

        In this URL:

        - query=react is a query parameter that might filter search results to include only those related to “react”.
        - sort=asc sorts the results in ascending order.
        - page=2 indicates the second page of results.

USAGE

/ Used to pass additional information to the server (filtering, sorting, pagination).
/ Optional, not part of the URL structure.
/ Ideal for searches, filters, and other actions where you are altering the view of a resource but not identifying a specific entity.

How to use them:

In React Router (or Angular, Express, etc.), you can retrieve query params using hooks or utility functions.
Example:

            jsx
            // In React Router (React Router v6+)
            import { useSearchParams } from 'react-router-dom';

            function SearchResults() {
            const [searchParams] = useSearchParams();
            const query = searchParams.get('query'); // Access query params
            const page = searchParams.get('page');

            return (
                <div>
                <p>Search Query: {query}</p>
                <p>Page: {page}</p>
                </div>
            );
            }


PATH PARAMS 

Are part of the URL path itself and are used to identify specific resources, or item on the server. They are mandatory and are typically used to specify which resource you want to access. (To indicate whitch 'entity' or resource the request is targeting)

SYNTAX
Path parameters are embedded directly within the URL and usually follow a defined URL structure.

            Format: /resource/:param1/:param2
            Example: /users/123/profile

ANALOGY 
Think of path parameters like the address of a house. You need the exact address to reach the specific house.

EXAMPLE 
            https://example.com/users/123

            In this URL:

            - 123 is a path parameter that identifies a specific user with the ID 123.

            
USAGE

Used to specify a specific resource.
Often required (part of the URL structure).
Ideal for identifying resources like user profiles, product details, etc.

How to use them:

In React Router (or Angular, Express, etc.), you can define a path param in a route like /users/:id.
Example:

            jsx
            // In React Router
            <Route path="/users/:id" component={UserProfile} />

In the component:

            jsx
            // Getting the path param in React (React Router v6)
            import { useParams } from 'react-router-dom';

            function UserProfile() {
            const { id } = useParams(); // Access the path param `id`
            return <h1>User ID: {id}</h1>;
            }   


WHEN TO USE EACH 

/ Use Path Params when:
You are targeting a specific resource (e.g., fetching a user by ID, getting details of a specific product).
The resource is part of a hierarchical structure (e.g., /users/:userId).

/ Use Query Params when:
You are filtering or modifying the representation of a resource (e.g., searching, sorting, or paginating results).
The parameters are optional (e.g., /search?query=react can work without page=2).

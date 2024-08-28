import Header from "../components/templates/Header";

function Page() {
    return (
        // In this example, we could say that 'list' is the prop being passed to the 'Header' component. This is what the Nav component has iterated over. 
        // Here, the 'list' prop contains an array of object. 
        <>
            <Header
                list={[
                    { url: "./Page.jsx", text: "Home" },
                    { url: "./Store.jsx", text: "Store" },

                ]}
            />

        </>
    );
}

export default Page; 
